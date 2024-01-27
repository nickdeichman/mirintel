import React from 'react'
import { LOGO } from '../../constants/header'
import './logo.scss'

const Logo = () => {
  return (
    <a className='logo-link' href="/">
      <img src={LOGO} alt="mirintel_logo" />
    </a>
  )
}

export default Logo