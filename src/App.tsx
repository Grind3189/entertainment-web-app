import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { collections } from './data'
import Layout from './components/layout/Layout'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Home from './pages/home/Home'
import Movies from './pages/movies/Movies'
import TvSeries from './pages/tvSeries/TvSeries'
import Bookmark from './pages/bookmark/Bookmark'
import DataType from './types/data-types'

function App() {
  const [data, setData] = useState<DataType[]>(collections)

  const addToBookmark = (title: string) => {
    console.log(title)
    setData(prev => {
      return prev.map(data => {
        if (data.title === title) {
          return { ...data, isBookmarked: !data.isBookmarked }
        } else {
          return { ...data }
        }
      })
    })
  }

  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/' element={<Layout />}>
        <Route index element={<Home collections={data} addToBookmark={addToBookmark} />} />
        <Route path='movies' element={<Movies collections={data} addToBookmark={addToBookmark} />} />
        <Route path='tv-series' element={<TvSeries addToBookmark={addToBookmark} collections={data} />} />
        <Route path='bookmarks' element={<Bookmark addToBookmark={addToBookmark} collections={data} />} />
      </Route>
    </Routes>
  )
}

export default App
