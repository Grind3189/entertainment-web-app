import './header.scss'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/icons/logo.svg'
import homeIcon from '../../assets/icons/icon-nav-home.svg'
import activeHomeIcon from '../../assets/icons/icon-nav-active-home.svg'
import movieIcon from '../../assets/icons/icon-nav-movies.svg'
import activeMovieIcon from '../../assets/icons/icon-nav-active-movies.svg'
import tvIcon from '../../assets/icons/icon-nav-tv-series.svg'
import activeTvIcon from '../../assets/icons/icon-nav-active-tv-series.svg'
import bookmarkIcon from '../../assets/icons/icon-nav-bookmark.svg'
import activeBookmarkIcon from '../../assets/icons/icon-bookmark-full.svg'
import avatar from '../../assets/icons/avatar.png'


const Header = () => {

  const getImage = (image: string) => {
    const style = {
      backgroundImage: `url(${image})`
    }
    return style
  }
  return (
    <header>
      <nav>
        <NavLink to='.' style={getImage(logo)} className='logo'/>
        <NavLink to='.' style={({isActive}) => isActive ? getImage(activeHomeIcon) : getImage(homeIcon) } />
        <NavLink to='movies' style={({isActive}) => isActive ? getImage(activeMovieIcon) : getImage(movieIcon) } />
        <NavLink to='tv-series' style={({isActive}) => isActive ? getImage(activeTvIcon) : getImage(tvIcon) } />
        <NavLink to='bookmarks' style={({isActive}) => isActive ? getImage(activeBookmarkIcon) : getImage(bookmarkIcon) } />
        <img src={avatar} alt='avatar' className='avatar' />
      </nav>
    </header>
  )
}

export default Header