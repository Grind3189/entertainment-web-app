interface Thumbnail {
    thumbnail: {
        trending?: {
            small: string
            large: string
        },
        regular: {
            small: string
            medium: string
            large: string
        }
    }
}

type DataType = {
    title: string,
    thumbnail: Thumbnail['thumbnail']
    year: number,
    category: string,
    rating: string,
    isBookmarked: boolean,
    isTrending: boolean
}

export default DataType