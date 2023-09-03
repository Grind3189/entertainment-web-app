import DataType from "./types/data-types"
import ImageSize from "./types/image-type"

export const getResultWord = (data: DataType[]) => {
    return data.length > 1 ? 'results' : 'result'
}

export const getImage = (imageSize: ImageSize, collection: DataType)  => {
    if (imageSize?.regular === 'sm') {
        return collection.thumbnail.regular.small
    } else if (imageSize?.regular === 'med') {
        return collection.thumbnail.regular.medium
    } else {
        return collection.thumbnail.regular.large
    }
}