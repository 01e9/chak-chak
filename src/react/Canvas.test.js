import React from 'react';
import { createMount } from '@material-ui/core/test-utils';
import Canvas from "@/react/Canvas";

const requiredProps = {
    image: new Image(100, 100)
}

function mount(props = {}) {
    return createMount()(<div><Canvas {...requiredProps} {...props} /></div>)
}

describe('snapshot', () => {
    it('required props', () => {
        expect(mount().html()).toMatchSnapshot()
    })
})