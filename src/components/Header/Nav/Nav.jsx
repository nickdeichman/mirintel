import React, { useContext } from 'react';
import NavList from '../../NavList/NavList';
import './nav.scss';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HeaderContext from '../../../context/HeaderContext';

const Nav = () => {
  const { isBurgerOpen, handleBurger } = useContext(HeaderContext);
  return (
    <nav className='header-nav'>
      <NavList handleBurger={handleBurger} />
      {
        isBurgerOpen ? <CloseIcon onClick={() => handleBurger()} className='burger' /> : <MenuIcon onClick={() => handleBurger()} className='burger' />
      }
    </nav>
  );
};

export default Nav;
