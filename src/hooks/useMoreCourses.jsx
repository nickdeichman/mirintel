import React, { forwardRef, useEffect } from 'react';
import { openItemModal } from '../store/reducer/itemModalSlice';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import courses from '../constants/courses/';
import { Slide } from '@mui/material';

const useMoreCourses = () => {
  const { courseId } = useParams();
  const dispatch = useDispatch();

  const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction='up' ref={ref} {...props} />;
  });

  useEffect(() => {
    courseId
      ? dispatch(
          openItemModal(
            courses.filter((item) => String(item.id) === courseId)[0]
          )
        )
      : null;
  }, []);
  return { courseId, Transition, dispatch };
};

export default useMoreCourses;
