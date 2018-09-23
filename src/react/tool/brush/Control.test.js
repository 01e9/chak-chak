import React from 'react'
import { createRender } from '@material-ui/core/test-utils';
import ToolBrushControl from "@/react/tool/brush/Control";

describe('snapshot', () => {
    it('inactive', () => {
        const wrapper = createRender()(<div><ToolBrushControl/></div>);
        expect(wrapper.html()).toMatchSnapshot()
    })
    it('active', () => {
        const wrapper = createRender()(<div><ToolBrushControl isActive={true} /></div>);
        expect(wrapper.html()).toMatchSnapshot()
    })
})
