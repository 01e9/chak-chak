import * as React from 'react'
import Editor, { IEditorProps } from '@/react/Editor'
import { createShallow } from '@material-ui/core/test-utils';

const requiredProps: IEditorProps = {
    Canvas: () => <div>[Canvas]</div>,
    Toolbar: () => <div>[Toolbar]</div>,
    ActiveTool: () => <div>[ActiveTool]</div>,
}

describe('snapshot', () => {
    it('required props', () => {
        const wrapper = createShallow()(<div><Editor {...requiredProps} /></div>);
        expect(wrapper).toMatchSnapshot();
    })
})
