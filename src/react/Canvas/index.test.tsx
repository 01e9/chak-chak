import * as React from 'react';
import { createMount } from '@material-ui/core/test-utils';
import Canvas, { ICanvasProps } from "@/react/Canvas";

const requiredProps: ICanvasProps = {
    image: new Image(100, 100)
}

function createMounted(props = {}) {
    return createMount()(<Canvas {...requiredProps} {...props} />)
}

describe('snapshot', () => {
    it('required props', () => {
        expect(createMounted().html()).toMatchSnapshot()
    })
    it('changed image', async () => {
        const wrapper = createMounted()
        expect(wrapper.html()).toMatchSnapshot()
        await new Promise(resolve => wrapper.setProps({image: new Image(101, 102)}, resolve))
        expect(wrapper.html()).toMatchSnapshot()
    })
})
