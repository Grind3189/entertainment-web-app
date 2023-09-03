import { Outlet } from 'react-router'
import Header from '../header/Header'
import './layout.scss'

const Layout = () => {
  return (
    <div className='layout-container'>
      <div className="l-left-col">
        <Header />
      </div>
      <div className="l-right-col">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout