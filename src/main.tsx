import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ImageContext } from './components/contexts/ImageContext.tsx'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ImageContext>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </ImageContext>,
)
