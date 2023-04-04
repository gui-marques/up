import React from 'react';

import Logo from '../assets/logo.png';

const Header = () => {
  return(
   <header className='py-0'>
    <div className='container  mx-auto'>
      <div className='flex  justify-between items-center'>
        <a href='a'>
          <img className='w-[150px]' src={Logo} alt='' />
        </a>
        <button className='btn btn-sm'>Planos</button>
      </div>
    </div>
   </header>
  )
};

export default Header;
