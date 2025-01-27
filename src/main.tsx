import React from 'react'
import ReactDOM from 'react-dom/client'

import './css/global.css'
// import { Cart } from './pages/cart'
import { Home } from './pages/home'
import { Header } from './components/Header'
import { Footer } from './components/Footer'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <>
      <Header />
      <Home />
      {/* <Cart /> */}
      <Footer />
    </>
  </React.StrictMode>
)
