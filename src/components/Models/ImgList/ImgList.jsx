import React from 'react';
import ImageList from '@mui/material/ImageList';
import { Box } from '@mui/material';
import ImgListItem from './ImgListItem/ImgListItem';

const ImgList = ({width,photos, itemClassName, rowHeight}) => {
  return (
    <Box sx={{ width: width ? width : 600, height: '100%' }}>
      <ImageList variant='masonry' cols={3} gap={8} rowHeight={rowHeight}>
        {photos.map((item) => (
          <ImgListItem itemClassName={itemClassName} key={item} item={item} />
        ))}
      </ImageList>
    </Box>
  );
};

export default ImgList;
