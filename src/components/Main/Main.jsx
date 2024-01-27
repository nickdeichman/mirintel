import React from 'react'
import './main.scss'
import Left from './Left/Left'
import Right from './Right/Right'
const Main = () => {
  return (
    <main id='main' className='main block '>
      <Left></Left>
      <Right></Right>
    </main>
  )
}

export default Main