import React, { useState } from 'react'

const useGallery = () => {
  
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return {open, handleClickOpen, handleClose};
}

export default useGallery