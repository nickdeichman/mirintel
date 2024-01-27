import React from 'react';
import ImageList from '@mui/material/ImageList';
import { Box } from '@mui/material';
import ImgListItem from './ImgListItem/ImgListItem';

const ImgList = ({width,photos, itemClassName, rowHeight}) => {
  return (
    <Box sx={{ width: width ? width : 600, height: '100%' }}>
      <ImageList className='gallery-images' variant='masonry' cols={3} gap={8} rowHeight={rowHeight}>
        {photos.map((item,index ) => (
          <ImgListItem itemClassName={itemClassName} key={index} item={item} />
        ))}
      </ImageList>
    </Box>
  );
};

export default ImgList;
