import React from 'react'
import createEditor from "@/redux/react/entry/editor";
import { createMount } from '@material-ui/core/test-utils';

it('snapshot', () => {
    const Editor = createEditor(new Image(100, 100))
    const wrapper = createMount()(<div><Editor/></div>)
    expect(wrapper.html()).toMatchSnapshot()
})
