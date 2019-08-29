import * as React from 'react'
import Toolbar, { IToolbarProps } from "@/react/Toolbar";
import { createMount, createShallow } from '@material-ui/core/test-utils';

const requiredProps: IToolbarProps = {
    left: 101,
    top: 102,
    onPositionUpdate: jest.fn(),
    tools: [
        {key: "1", Component: () => <button key="tool1">[Tool1]</button>},
        {key: "2", Component: () => <button key="tool2">[Tool2]</button>},
    ]
}

it('snapshot', () => {
    const wrapper = createShallow()(<Toolbar {...requiredProps} />);
    expect(wrapper).toMatchSnapshot();
})

it('moves', () => {
    const props: IToolbarProps = {
        ...requiredProps,
        onPositionUpdate: jest.fn()
    }
    const wrapper = createMount()(<Toolbar {...props} />);

    expect(props.onPositionUpdate).not.toHaveBeenCalled();

    const instance = wrapper.find(Toolbar).instance();
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
    expect(props.onPositionUpdate).toHaveBeenCalledWith(
        requiredProps.left + leftMove - leftShift,
        requiredProps.top + topMove - topShift
    );
})
