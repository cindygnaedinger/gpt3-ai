import React from 'react';

import { Blog, Features, Header, Footer, Possibility, WhatGPT3 } from './containers';
import { Article, Brand, CTA, Feature, Navbar } from './components';
import "./App.css";

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />

      </div>
    </div>
  )
}

export default App;
