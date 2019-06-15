import * as React from "react";
import Editor_ from "@/react/Editor";
import { connect } from 'react-redux'
import MainCanvas from "@/redux/react/MainCanvas";
import Toolbar from "@/redux/react/Toolbar";
import { IState } from "@/redux/reducers";

const mapStateToProps = (state: IState) => ({
    Canvas: MainCanvas,
    Toolbar: Toolbar,
    ActiveTool: () => <span>[ActiveTool]</span> // fixme
})

const Editor = connect(mapStateToProps)(Editor_)

export default Editor
