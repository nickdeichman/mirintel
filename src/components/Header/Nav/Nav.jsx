import React from 'react';
import NavList from '../../NavList/NavList';
import './nav.scss';
import MenuIcon from '@mui/icons-material/Menu';

const Nav = ({ onClick }) => {
  return (
    <nav className='header-nav'>
      <NavList />
      <MenuIcon onClick={() => onClick()} className='burger' />
    </nav>
  );
};

export default Nav;
