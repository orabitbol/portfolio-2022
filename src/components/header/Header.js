import React from 'react'
import './header.css';
import CTA from './CTA'
import HeaderSocials from './HeaderSocials';


const Header = () => {
  return (
    <header>
      <div className='container.header__container'>
        <div className='wapper'>
          <div >
            <h5> Hello I'm</h5>
            <h1> Or Abitbol</h1>
            <h5 className='text-light'> Full stack Developer</h5>
          </div>
        </div>
        <CTA />
        <HeaderSocials />
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header