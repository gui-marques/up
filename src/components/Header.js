import React from 'react';
import { Link } from "react-scroll";
import Logo from '../assets/logo.png';

const Header = () => {
  return(
   <header className='py-0 text-black'>
    <div className='container  mx-auto'>
      <div className='flex  justify-between items-center'>
        <a href='a'>
          <img className='w-[150px]' src={Logo} alt='' />
        </a>
        <Link
            to="preco"
            activeClass="active"
            smooth={true}
            offset={120}
            spy={true}
            className="cursor-pointer   flex items-center
            justfy-center">
            
        <button className='btn btn-sm'>Planos</button>
          </Link>
      </div>
    </div>
   </header>
  )
};

export default Header;
