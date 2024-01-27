import React from 'react';

const NavItem = ({ navItemTitle, navItemLink, onClick }) => {
  
  return (
    <a onClick={() => onClick()} className='nav-item' href={`#${navItemLink}`}>
      <li>{navItemTitle}</li>
    </a>
  );
};

export default NavItem;
