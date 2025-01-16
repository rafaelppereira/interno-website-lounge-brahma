import './@config/styles/globals.css'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-cards'

import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './app'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
