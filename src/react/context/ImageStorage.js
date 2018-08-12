import React from 'react'

const ImageStorageContext = React.createContext(null)

export const ImageStorageProvider = ImageStorageContext.Provider
export const ImageStorageConsumer = ImageStorageContext.Consumer

export default ImageStorageContext
