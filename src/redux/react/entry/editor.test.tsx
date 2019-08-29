import * as React from 'react'
import createEditor from "@/redux/react/entry/editor";
import { createMount } from '@material-ui/core/test-utils';

it('mounts without errors', () => {
    const Editor = createEditor(new Image(100, 100))
    const wrapper = createMount()(<Editor/>);
    expect(wrapper).toHaveLength(1);
})
