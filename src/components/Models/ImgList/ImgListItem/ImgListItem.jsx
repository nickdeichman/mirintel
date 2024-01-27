import React from 'react'
import ImageListItem from '@mui/material/ImageListItem';


const ImgListItem = ({item, itemClassName}) => {
  return (
    <ImageListItem>
    <img
     className={itemClassName}
      srcSet={`${item}`}
      src={`${item}`}
      alt=''
      loading="lazy"
    />
  </ImageListItem>
  )
}

export default ImgListItem