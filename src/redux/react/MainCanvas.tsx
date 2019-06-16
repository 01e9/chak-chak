import * as React from 'react'
import Canvas from "@/react/Canvas";
import { connect } from 'react-redux'
import selectMainImage from "@/redux/selectors/mainImage";
import { ImageStorageConsumer } from "@/react/context/ImageStorage";
import { IState } from "@/redux/reducers";
import ImageStorage from "@/storage/ImageStorage";

interface IMainCanvasConnectedProps {
    imageStorage: ImageStorage;
}

const mapStateToProps = (state: IState, ownProps: IMainCanvasConnectedProps) => ({
    image: selectMainImage(state, ownProps.imageStorage)
})

const MainCanvasConnected = connect(mapStateToProps)(Canvas)

const MainCanvas = () => (
    <ImageStorageConsumer>
        {imageStorage => <MainCanvasConnected imageStorage={imageStorage} />}
    </ImageStorageConsumer>
)

export default MainCanvas
