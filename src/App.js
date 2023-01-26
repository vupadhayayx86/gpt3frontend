import React from 'react'

import Article from "./components/article/Article"
import Brand from "./components/brand/Brand"
import CTA from "./components/cta/Cta"
import Feature from "./components/feature/Feature"
import Navbar from "./components/navbar/Navbar"
import "./App.css"

import {Footer,Blog,Features,Possibility,WhatGPT3,Header} from './containers'

const App = () => {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer /> 
    </div>
  )
}

export default App