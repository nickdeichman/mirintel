import React from 'react'
import Contacts from './Contacts/Contacts'
import './footer.scss'
import NavList from '../NavList/NavList'
import Logo from '../Logo/Logo'
const Footer = () => {
  return (
    <footer id='footer'>
      <Contacts></Contacts>
      <NavList isFooter={true}></NavList>
      <Logo></Logo>

    </footer>
  )
}

export default Footer