import * as React from 'react'
import ImageStorage from "@/storage/ImageStorage";

const ImageStorageContext = React.createContext<ImageStorage>(new ImageStorage())

export const ImageStorageProvider = ImageStorageContext.Provider
export const ImageStorageConsumer = ImageStorageContext.Consumer

export default ImageStorageContext
