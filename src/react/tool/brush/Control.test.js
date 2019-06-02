import React from 'react'
import { createRender, createMount } from '@material-ui/core/test-utils';
import ToolBrushControl from "@/react/tool/brush/Control";

const requiredProsp = {
    onClick: jest.fn()
}

describe('snapshot', () => {
    it('inactive', () => {
        const wrapper = createRender()(<div><ToolBrushControl {...requiredProsp} /></div>);
        expect(wrapper.html()).toMatchSnapshot()
    })
    it('active', () => {
        const props = {isActive: true}
        const wrapper = createRender()(<div><ToolBrushControl {...requiredProsp} {...props} /></div>);
        expect(wrapper.html()).toMatchSnapshot()
    })
})

describe('callback props', () => {
    it('onClick', () => {
        const props = {onClick: jest.fn()};
        const wrapper = createMount()(<div><ToolBrushControl {...requiredProsp} {...props} /></div>);
        const button = wrapper.find('button')
        expect(button).toHaveLength(1)
        expect(props.onClick).not.toHaveBeenCalled()
        button.simulate('click')
        expect(props.onClick).toHaveBeenCalledTimes(1)
    })
})
