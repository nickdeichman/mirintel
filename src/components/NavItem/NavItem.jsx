import React from 'react';

const NavItem = ({ navItemTitle, navItemLink }) => {
  if (navItemLink[0].includes('footer-contacts')) {
    navItemLink[0] = '#'.concat(navItemLink[0]);
  }
  
  return (
    <a className='nav-item' href={`#${navItemLink}`}>
      <li>{navItemTitle}</li>
    </a>
  );
};

export default NavItem;
