import React from 'react';
import { Paper } from '@mui/material';
import { HAIRDRESSER as teacherPhoto } from '../../constants/images';
import MuiButton from '../MuiButton/MuiButton';
import { useDispatch } from 'react-redux';
import {openItemModal as handleOpen} from '../../store/reducer/itemModalSlice';
import { Link } from "react-router-dom";



const TeacherSliderItem = ({ item }) => {
  const dispatch = useDispatch();


  const [, name, yearsOfWork, yearsOfTeaching, about] = Object.keys(item);
  return (
    <Paper className='slider__item'>
      <img className='slider-photo' src={teacherPhoto} alt="" loading="lazy" />
      <h2>{item[name]}</h2>
      <span>Досвід роботи: {item[yearsOfWork]}</span>
      <span>Досвід викладання: {item[yearsOfTeaching]}</span>
      <p>
        {
        item[about].length > 120 ? item[about].substring(0, 117).concat('...') : item[about]
        }
        </p>
        <Link to={`teachers/${item.id}`} state={{key: item.id}}>
      <MuiButton onClick={() => dispatch(handleOpen({...item, photo: teacherPhoto}))} title={'Детальніше'}></MuiButton>

        </Link>
    </Paper>
  );
};

export default TeacherSliderItem;
