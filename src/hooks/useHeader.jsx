import React, { useState } from 'react'

const useHeader = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const handleBurger = () => {
    setIsBurgerOpen(prevState => !prevState);
  }

  return {isBurgerOpen, handleBurger}
}

export default useHeader