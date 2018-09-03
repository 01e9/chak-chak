import Editor_ from "@/react/Editor";
import { connect } from 'react-redux'
import MainCanvas from "@/redux/react/MainCanvas";
import Toolbar from "@/redux/react/Toolbar";

const mapStateToProps = (state, ownProps) => ({
    Canvas: MainCanvas,
    Toolbar: Toolbar,
    ActiveTool: () => '[ActiveTool]' // fixme
})

const Editor = connect(mapStateToProps, null)(Editor_)

export default Editor
