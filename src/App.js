import React from 'react';

import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Service from './components/Service';
import Preco from './components/Preco';



const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Banner />
      <Nav />
      <About />
      <Service /> 
      <Preco />  
     
      <div className='h-[100vh]'/>
    </div>
  );
};

export default App;
