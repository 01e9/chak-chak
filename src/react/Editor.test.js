import React from 'react'
import Editor from '@/react/Editor'
import { createRender } from '@material-ui/core/test-utils';

const requiredProps = {
    Canvas: () => '[Canvas]',
    Toolbar: () => '[Toolbar]',
    ActiveTool: () => '[ActiveTool]',
}

function createRendered(props = {}) {
    return createRender()(<div><Editor {...requiredProps} {...props} /></div>)
}

describe('snapshot', () => {
    it('required props', () => {
        expect(createRendered().html()).toMatchSnapshot();
    })
})