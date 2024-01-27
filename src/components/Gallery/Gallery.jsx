import React, { useState } from 'react';
import { SMALL_GALLERY_PHOTOS } from '../../constants/images';
import ImgList from '../Models/ImgList/ImgList';
import MuiButton from '../MuiButton/MuiButton';
import './gallery.scss';
import BigGallery from './BigGallery/BigGallery';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import useGallery from '../../hooks/useGallery';

const Gallery = () => {
  const { open, handleClickOpen, handleClose } = useGallery();

  return (
    <section id='gallery' className='block'>
      <AnimationOnScroll animateIn='animate__fadeIn'>
        <ImgList
          width={'100%'}
          itemClassName={'animate__fadeIn'}
          photos={SMALL_GALLERY_PHOTOS}
          rowHeight={350}
        ></ImgList>
        <MuiButton onClick={handleClickOpen} title={'Дивитися ще'}></MuiButton>
      </AnimationOnScroll>
      <BigGallery open={open} handleClose={handleClose}></BigGallery>
    </section>
  );
};

export default Gallery;
