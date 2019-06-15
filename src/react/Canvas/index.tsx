import * as React from 'react'
import { canvasDrawImage } from "@/utility/canvas";
import * as styles from "./styles.scss";

export interface ICanvasProps {
    image: HTMLImageElement;
}

export default class Canvas extends React.Component<ICanvasProps> {
    canvasRef = React.createRef<HTMLCanvasElement>()

    redrawImage() {
        if (this.canvasRef.current) {
            canvasDrawImage(this.canvasRef.current, this.props.image);
        }
    }

    componentDidMount() {
        this.redrawImage();
    }

    componentDidUpdate() {
        this.redrawImage();
    }

    render() {
        return (
            <canvas ref={this.canvasRef} className={styles.root} />
        );
    }
}
