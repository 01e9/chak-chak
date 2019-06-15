import * as React from 'react'
import * as styles from "./styles.scss";

export interface IEditorProps {
    Canvas: React.JSXElementConstructor<{}>,
    Toolbar: React.JSXElementConstructor<{}>,
    ActiveTool: React.JSXElementConstructor<{}>
}

class Editor extends React.Component<IEditorProps> {
    render() {
        const { Canvas, Toolbar, ActiveTool } = this.props;

        return (
            <React.Fragment>
                <div className={styles.canvasWrap}>
                    <Canvas/>
                    <ActiveTool/>
                </div>
                <Toolbar/>
            </React.Fragment>
        )
    }
}

export default Editor;
