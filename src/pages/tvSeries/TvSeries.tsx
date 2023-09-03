
import { useLocation } from "react-router-dom"
import { useContext } from 'react'
import Search from "../../components/search/Search"
import Items from "../../components/items/Items"
import Item from "../../components/item/Item"
import { ImageContextSize } from "../../components/contexts/ImageContext"
import DataType from "../../types/data-types"
import { getResultWord, getImage } from "../../util"
import './tv-series.scss'

type TvSeriesProp = {
  collections: DataType[],
  addToBookmark: (title: string) => void
}

const TvSeries = ({ collections, addToBookmark }: TvSeriesProp) => {
  const tvSeries: DataType[] = collections.filter(collection => collection.category === 'TV Series')
  const location = useLocation()
  const searchParams: string | null = new URLSearchParams(location.search).get('search')
  const { imageSize } = useContext(ImageContextSize)
  let allData = tvSeries

  if (searchParams) {
    allData = collections.filter(collection => {
      return collection.title.toLowerCase().includes(searchParams.toLowerCase())
    })
  }

  const tvSeriesEl = allData.map((collection) => {
    const regularImg = getImage(imageSize, collection)
    return <Item key={collection.title} collection={collection} image={regularImg} addToBookmark={addToBookmark} />
  })
  

  return (
    <main className="tv-series-container">
      <Search placeholder="Search for TV series" />
      {
        searchParams ?
          <h1>Found {allData.length} {getResultWord(allData)} for '{searchParams}'</h1> :
          <h1>TV Series</h1>
      }
      <Items>
        {tvSeriesEl}
      </Items>
    </main>
  )
}

export default TvSeries