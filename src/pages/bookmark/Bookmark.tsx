import { useLocation } from "react-router-dom"
import { useContext } from 'react'
import Search from "../../components/search/Search"
import Items from "../../components/items/Items"
import Item from "../../components/item/Item"
import { ImageContextSize } from "../../components/contexts/ImageContext"
import DataType from "../../types/data-types"
import { getResultWord, getImage } from "../../util"
import './bookmark.scss'

type BookmarkProp = {
  collections: DataType[],
  addToBookmark: (title: string) => void
}

const Bookmark = ({ collections, addToBookmark }: BookmarkProp) => {
  const bookmark: DataType[] = collections.filter(collection => collection.isBookmarked)
  const bookmarkedMovies: DataType[] = bookmark.filter(collection => collection.category === 'Movie')
  const bookmarkedTvSeries: DataType[] = bookmark.filter(collection => collection.category === 'TV Series')
  const location = useLocation()
  const searchParams: string | null = new URLSearchParams(location.search).get('search')
  const { imageSize } = useContext(ImageContextSize)
  let allData = bookmark



  if (searchParams) {
    allData = bookmark.filter(collection => {
      return collection.title.toLowerCase().includes(searchParams.toLowerCase())
    })
  }

  const bookmarkedMoviesEl = bookmarkedMovies.map((collection) => {
    const regularImg = getImage(imageSize, collection)
    return <Item key={collection.title} collection={collection} image={regularImg} addToBookmark={addToBookmark} />
  })

  const bookmarkedTvSeriesEl = bookmarkedTvSeries.map((collection) => {
    const regularImg = getImage(imageSize, collection)
    return <Item key={collection.title} collection={collection} image={regularImg} addToBookmark={addToBookmark} />

  })

  const bookmarkedShowsEl = allData.map((collection) => {
    const regularImg = getImage(imageSize, collection)
    return <Item key={collection.title} collection={collection} image={regularImg} addToBookmark={addToBookmark} />
  })

  

  return (
    <main className="bookmarked-container">
      <Search placeholder="Search for bookmarked shows" />
      {
        searchParams &&
        <h1>Found {allData.length} {getResultWord(allData)} for '{searchParams}'</h1>
      }
      {
        !searchParams ?
          <>
            <div className="bookmarked-movies-container">
              <h1>Bookmarked Movies</h1>
              <Items>
                {bookmarkedMoviesEl}
              </Items>
            </div>
            <div className="bookmarked-tv-series-container">
              <h1 className="bookmarked-tv-heading">Bookmarked TV Series</h1>
              <Items>
                {bookmarkedTvSeriesEl}
              </Items>
            </div>
          </> :
          <Items>
            {bookmarkedShowsEl}
          </Items>
      }
    </main>
  )
}

export default Bookmark