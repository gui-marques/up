import React from 'react';
import { useState, useEffect } from 'react'

import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Service from './components/Service';
import Preco from './components/Preco';
import JsonData from './data/data.json'
import { Contact} from './components/Contact';



const App = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Banner />
      <Nav />
      <About />
      <Service /> 
      <Preco data={landingPageData.Preco} /> 
      <Contact data={landingPageData.Contact} />  
     
      <div className='h-[13vh]'/>
    </div>
  );
};

export default App;
