import './bookmark.scss'

type BookmarkProp = {
  isBookmarked: boolean,
  addToBookmark: (title: string) => void,
  title: string
}

const Bookmark = ({ isBookmarked, addToBookmark, title }: BookmarkProp) => {
  return (
    <button className='bookmark-btn' onClick={() => addToBookmark(title)}>
      <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
        <path d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z" stroke="#FFF" strokeWidth="1.5" fill={isBookmarked? '#fff' : 'none'} />
      </svg>
    </button>
  )
}

export default Bookmark