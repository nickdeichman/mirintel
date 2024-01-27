import React, { forwardRef } from 'react'
import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';
import { AppBar, Divider, IconButton, Slide, Toolbar } from '@mui/material';
import ImgList from '../../Models/ImgList/ImgList';
import { BIG_GALLERY_PHOTOS } from '../../../constants/images';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const BigGallery = ({open, handleClose}) => {
  return (
    <Dialog
    fullScreen
    open={open}
    onClose={handleClose}
    TransitionComponent={Transition}
    className='big-gallery'
  >
    <AppBar sx={{ position: 'relative' }}>
      <Toolbar>
        <IconButton
          edge="start"
          color="#333"
          onClick={handleClose}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
      <Divider />
      <ImgList width={'90%'} photos={BIG_GALLERY_PHOTOS}>
      </ImgList>
  </Dialog>
  )
}

export default BigGallery