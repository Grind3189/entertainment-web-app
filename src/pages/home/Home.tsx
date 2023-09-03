import './home.scss'
import { useRef, useContext } from 'react'
import { useLocation } from 'react-router'
import { motion } from 'framer-motion'
import { ImageContextSize } from '../../components/contexts/ImageContext'
import movieIcon from '../../assets/icons/icon-nav-movies.svg'
import DataType from '../../types/data-types'
import Search from '../../components/search/Search'
import Item from '../../components/item/Item'
import Bookmark from '../../components/bookmark/Bookmark'
import Items from '../../components/items/Items'
import { getImage, getResultWord } from '../../util'

type HomeProp = {
  collections: DataType[],
  addToBookmark: (title: string) => void
}

const Home = ({ collections, addToBookmark }: HomeProp) => {
  const {imageSize} = useContext(ImageContextSize)
  const location = useLocation()
  const searchParams: string | null = new URLSearchParams(location.search).get('search')
  const carouselRef = useRef<HTMLDivElement>(null)
  let allData = collections

  if (searchParams) {
    allData = collections.filter(collection => {
      return collection.title.toLowerCase().includes(searchParams.toLowerCase())
    })
  }

  const trendingEl = collections.map((data) => {
    if (data.isTrending) {
      let trendingImg
      if (imageSize?.trending === 'sm') {
        trendingImg = data.thumbnail.trending?.small
      } else if (imageSize?.trending === 'lg') {
        trendingImg = data.thumbnail.trending?.large
      }

      return (
        <div key={data.title} className="carousel-content" style={{ backgroundImage: `url(${trendingImg})` }}>
          <div className="left-col">
            <div className="first-row">
              <span>{data.year}</span>
              ·
              <img src={movieIcon} alt='movie icon' />
              <span>{data.category}</span>
              ·
              <span>{data.rating}</span>
            </div>
            <h4>{data.title}</h4>
          </div>
          <Bookmark isBookmarked={data.isBookmarked} title={data.title} addToBookmark={addToBookmark} />
          
        </div>
      )
    } else return
  })


  const recommendedEl = allData.map((collection) => {
    const regularImg = getImage(imageSize, collection)
    if(searchParams) {
      return <Item key={collection.title} collection={collection} image={regularImg} addToBookmark={addToBookmark} />
    } else {
        return !collection.isTrending && <Item key={collection.title} collection={collection} image={regularImg} addToBookmark={addToBookmark} />
    }
  })



  return (
    <main className='home-container'>
      <section className="h-search-container">
        <Search placeholder='Search for movies or TV series'/>
      </section>



      <section className="trending-container">
        {
          !searchParams ?
            <>
              <h1>Trending</h1>
              <motion.div className="carousel" ref={carouselRef}>
                <motion.div drag="x" dragConstraints={carouselRef} className="inner-carousel">
                  {trendingEl}
                </motion.div>
              </motion.div>
            </>
            : <h1>Found {allData.length} {getResultWord(allData)} for '{searchParams}'</h1>
        }
      </section>

      <section className="recommended-container">
        {!searchParams && <h1>Recommended for you</h1>}
        <Items>
          {recommendedEl}
        </Items>
      </section>
    </main>
  )
}

export default Home