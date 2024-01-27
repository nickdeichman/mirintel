import React from 'react';
import Nav from './Nav/Nav';
import Logo from '../Logo/Logo';
import PhoneBtn from './PhoneBtn/PhoneBtn';
import './header.scss';
import useHeader from '../../hooks/useHeader';
import HeaderContext from '../../context/HeaderContext';

const Header = () => {
  const { isBurgerOpen, handleBurger } = useHeader();
  return (
    <>
      <header className={isBurgerOpen ? 'header active' : 'header'}>
        <Logo></Logo>
        <HeaderContext.Provider value={{isBurgerOpen, handleBurger}}>
          <Nav />
        </HeaderContext.Provider>
        <PhoneBtn></PhoneBtn>
      </header>
      <div className={isBurgerOpen ? 'onActiveBurger active' : 'header'}></div>
    </>
  );
};

export default Header;
