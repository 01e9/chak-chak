import React from 'react'
import Toolbar from "@/react/Toolbar";
import { createMount } from '@material-ui/core/test-utils';

const requiredProps = {
    left: 101,
    top: 102,
    onPositionUpdate: jest.fn(),
    tools: [
        () => <button key="tool1">[Tool1]</button>,
        () => <button key="tool2">[Tool2]</button>,
    ]
}

function createMounted(props = {}) {
    return createMount()(<div><Toolbar {...requiredProps} {...props} /></div>)
}

it('snapshot', () => {
    const wrapper = createMounted()
    expect(wrapper.html()).toMatchSnapshot();
})

it('moves', () => {
    const props = {
        onPositionUpdate: jest.fn()
    }
    const wrapper = createMounted(props)

    expect(props.onPositionUpdate).not.toHaveBeenCalled();

    const instance = wrapper.find('Toolbar_').instance();
    expect(instance).toBeTruthy();
    expect(instance.state.hasCapture).toBe(false);

    const dragButton = wrapper.find('.drag-button').hostNodes();
    expect(dragButton).toHaveLength(1);

    dragButton.simulate('pointerMove', null);
    expect(instance.state).toMatchObject({
        hasCapture: false
    });

    const
        leftShift = 1,
        topShift = 2,
        leftMove = 10,
        topMove = 20;

    {
        const event = {pointerId: 'test', target: {setPointerCapture: jest.fn()}}
        dragButton.simulate('pointerDown', event);
        expect(event.target.setPointerCapture).toHaveBeenCalledWith('test');
        expect(instance.state.hasCapture).toBe(false);
    }
    {
        const event = {
            pageX: requiredProps.left + leftShift,
            pageY: requiredProps.top + topShift
        }
        dragButton.simulate('gotPointerCapture', event);
        expect(instance.state).toMatchObject({
            hasCapture: true,
            leftShift: -leftShift,
            topShift: -topShift
        });
    }
    {
        const event = {
            pageX: requiredProps.left + leftMove,
            pageY: requiredProps.top + topMove
        }
        dragButton.simulate('pointerMove', event);
        expect(instance.state).toMatchObject({
            hasCapture: true,
            leftShift: -leftShift,
            topShift: -topShift,
            left: requiredProps.left + leftMove - leftShift,
            top: requiredProps.top + topMove - topShift,
        });
    }
    {
        dragButton.simulate('lostPointerCapture', {});
        expect(instance.state).toMatchObject({
            hasCapture: false,
            leftShift: 0,
            topShift: 0
        });
    }

    expect(props.onPositionUpdate).toHaveBeenCalledTimes(1);
    expect(props.onPositionUpdate.mock.calls[0][0]).toBe(requiredProps.left + leftMove - leftShift);
    expect(props.onPositionUpdate.mock.calls[0][1]).toBe(requiredProps.top + topMove - topShift);
})
