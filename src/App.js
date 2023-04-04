import React from 'react';

import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Service from './components/Service';



const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Banner />
      <Nav />
      <About />
      <Service />   
     
      <div className='h-[100vh]'></div>
    </div>
  );
};

export default App;
