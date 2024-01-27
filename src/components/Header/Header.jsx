import React from 'react';
import Nav from './Nav/Nav';
import Logo from '../Logo/Logo';
import PhoneBtn from './PhoneBtn/PhoneBtn';
import './header.scss'
import useHeader from '../../hooks/useHeader';

const Header = () => {
  const {isBurgerOpen, handleBurger} = useHeader();
  return (
    <header className={isBurgerOpen ? 'header active' : 'header'}>
      <Logo></Logo>
      <Nav onClick={handleBurger} />
      <PhoneBtn></PhoneBtn>
    </header>
  );
};

export default Header;
