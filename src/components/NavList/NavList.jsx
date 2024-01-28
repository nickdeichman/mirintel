import React, { useRef } from 'react';
import { NAV_ITEMS } from '../../constants/header';
import NavItem from '../NavItem/NavItem';
import PhoneBtn from '../Header/PhoneBtn/PhoneBtn';

const NavList = ({ isFooter, handleBurger }) => {
  const navItems = useRef(NAV_ITEMS);
  const footerNavItems = useRef(
    navItems.current.filter((item) => !item['Контакти'])
  );
  return isFooter ? (
    <ul className='nav-list'>
      {footerNavItems.current.map((navItemTitle, index) => {
        return (
          <NavItem
            key={index}
            navItemTitle={Object.keys(navItemTitle)}
            navItemLink={Object.values(navItemTitle)}
          />
        );
      })}
    </ul>
  ) : (
    <>
      <ul className='nav-list header-nav__list'>
        {navItems.current.map((navItemTitle, index) => {
          return (
            <NavItem
              onClick={handleBurger}
              key={index}
              navItemTitle={Object.keys(navItemTitle)}
              navItemLink={Object.values(navItemTitle)}
            />
          );
        })}
        <PhoneBtn></PhoneBtn>
      </ul>
    </>
  );
};

export default NavList;
