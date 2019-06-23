import * as React from "react";
import Editor, { IEditorProps } from "@/react/Editor";
import { connect } from 'react-redux'
import Canvas from "@/redux/react/MainCanvas";
import Toolbar from "@/redux/react/Toolbar";
import ActiveTool from "@/redux/react/ActiveTool";

const mapStateToProps = (): IEditorProps => ({
    Canvas,
    Toolbar,
    ActiveTool
})

export default connect(mapStateToProps)(Editor)
