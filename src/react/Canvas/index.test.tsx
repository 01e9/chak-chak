import * as React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import Canvas, { ICanvasProps } from "@/react/Canvas";

const requiredProps: ICanvasProps = {
    image: new Image(100, 100),
    aspectRatio: 1,
}

describe('snapshot', () => {
    it('required props', () => {
        const wrapper = createShallow()(<Canvas {...requiredProps} />);
        expect(wrapper).toMatchSnapshot()
    })
    it('changed image', async () => {
        const wrapper = createShallow()(<Canvas {...requiredProps} />);
        expect(wrapper).toMatchSnapshot("before")
        await new Promise(resolve => wrapper.setProps({image: new Image(101, 102)}, resolve))
        expect(wrapper).toMatchSnapshot("after")
    })
})
