import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'

import { createRoot } from "react-dom/client";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Slider from './components/Slider'
import AboutScreen from './screens/AboutScreen'
import ShopScreen from './screens/ShopScreen'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Provider store={store}>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<HomeScreen/>}/>
        <Route path="/about" element={<AboutScreen/>}/> 
        <Route path="/shop" element={<ShopScreen/>}/>  
      </Routes>

      <Footer/>
    </BrowserRouter>
    </Provider>
      </div>
    </>
  )
}

export default App
