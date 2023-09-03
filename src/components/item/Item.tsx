import './item.scss'
import movieIcon from '../../assets/icons/icon-category-movie.svg'
import tvIcon from '../../assets/icons/icon-category-tv.svg'
import DataType from '../../types/data-types'
import Bookmark from '../bookmark/Bookmark'

type ItemProp = {
  collection: DataType
  image: string
  addToBookmark: (title: string) => void
}

const Item = ({ collection, image, addToBookmark }: ItemProp) => {
  return (
    <div className="recommended-item">
      <div className="image-container" style={{ backgroundImage: `url(${image})` }}>
        <Bookmark isBookmarked={collection.isBookmarked} addToBookmark={addToBookmark} title={collection.title}  />
      </div>
      <div className="first-row">
        <span>{collection.year}</span>
        ·
        <img src={collection.category === 'Movie' ? movieIcon : tvIcon} alt='movie icon' />
        <span>{collection.category}</span>
        ·
        <span>{collection.rating}</span>
      </div>
      <h4>{collection.title}</h4>
    </div>
  )
}

export default Item