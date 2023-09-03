import { useLocation } from "react-router-dom"
import { useContext } from 'react'
import Search from "../../components/search/Search"
import Items from "../../components/items/Items"
import Item from "../../components/item/Item"
import { ImageContextSize } from "../../components/contexts/ImageContext"
import DataType from "../../types/data-types"
import { getResultWord, getImage } from "../../util"
import './movies.scss'

type MoviesProp = {
  collections: DataType[],
  addToBookmark: (title: string) => void
}

const Movies = ({ collections, addToBookmark }: MoviesProp) => {
  const movies: DataType[] = collections.filter(collection => collection.category === 'Movie')
  const location = useLocation()
  const searchParams: string | null = new URLSearchParams(location.search).get('search')
  const { imageSize } = useContext(ImageContextSize)
  let allData = movies

  if (searchParams) {
    allData = collections.filter(collection => {
      return collection.title.toLowerCase().includes(searchParams.toLowerCase())
    })
  }

  const moviesEl = allData.map((collection) => {
    const regularImg = getImage(imageSize, collection)
    return <Item key={collection.title} collection={collection} image={regularImg} addToBookmark={addToBookmark} />
  })
 

  return (
    <main className="movies-container">
      <Search placeholder="Search for movies" />
      {
        searchParams ?
          <h1>Found {allData.length} {getResultWord(allData)} for '{searchParams}'</h1> :
          <h1>Movies</h1>
      }
      <Items>
        {moviesEl}
      </Items>
    </main>
  )
}

export default Movies