import * as React from 'react'
import Canvas from "@/react/Canvas";
import { connect } from 'react-redux'
import selectMainImage from "@/redux/selectors/mainImage";
import { ImageStorageConsumer } from "@/react/context/ImageStorage";

const mapStateToProps = (state, ownProps) => ({
    image: selectMainImage(state, ownProps.imageStorage)
})

const MainCanvasConnected = connect(mapStateToProps, null)(Canvas)

const MainCanvas = () => (
    <ImageStorageConsumer>
        {imageStorage => <MainCanvasConnected imageStorage={imageStorage} />}
    </ImageStorageConsumer>
)

export default MainCanvas
