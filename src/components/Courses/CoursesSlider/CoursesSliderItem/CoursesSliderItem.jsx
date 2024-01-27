import React from 'react';
import { Paper } from '@mui/material';
import MuiButton from '../../../MuiButton/MuiButton';
import { useDispatch } from 'react-redux';
import { openItemModal as handleOpen } from '../../../../store/reducer/itemModalSlice';
import { Link } from "react-router-dom";

const CoursesSliderItem = ({ item }) => {
  const [,name, about, picture] = Object.keys(item);
  const dispatch = useDispatch();



  return (
    <Paper className='slider__item'>
      <img className='slider-photo' src={item[picture]} alt='' loading='lazy' />
      <h2 className='courses-slider__name'>{item[name]}</h2>
      <p className='courses-slider__about'>{item[about].length > 100 ? item[about].substring(0, 117).concat('...') : item[about]}</p>
      <Link to={`courses/${item.id}`} state={{key: item.id}}>

      <MuiButton
      onClick={() => dispatch(handleOpen({name: item[name], data: item.data}))}
        title={'Детальніше'}
      ></MuiButton>
      </Link>
    </Paper>
  );
};

export default CoursesSliderItem;
