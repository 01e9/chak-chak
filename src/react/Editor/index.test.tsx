import * as React from 'react'
import Editor, { IEditorProps } from '@/react/Editor'
import { createRender } from '@material-ui/core/test-utils';

const requiredProps: IEditorProps = {
    Canvas: () => <div>[Canvas]</div>,
    Toolbar: () => <div>[Toolbar]</div>,
    ActiveTool: () => <div>[ActiveTool]</div>,
}

function createRendered(props: Partial<IEditorProps> = {}) {
    return createRender()(<div><Editor {...requiredProps} {...props} /></div>)
}

describe('snapshot', () => {
    it('required props', () => {
        expect(createRendered().html()).toMatchSnapshot();
    })
})
