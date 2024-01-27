import React, { forwardRef, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';
import { AppBar, IconButton, Slide, Toolbar } from '@mui/material';
import CourseCard from '../CourseCard/CourseCard';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { closeItemModal as onClose } from '../../../store/reducer/itemModalSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { openItemModal } from '../../../store/reducer/itemModalSlice';
import courses from '../../../constants/courses/';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const MoreCourses = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const course = useSelector((state) => state.itemReducer.item);
  const open = useSelector((state) => state.itemReducer.isOpen);

  useEffect(() => {
    courseId
      ? dispatch(
          openItemModal(
            courses.filter((item) => String(item.id) === courseId)[0]
          )
        )
      : null;
  }, []);

  return Object.keys(course).length && courseId ? (
    <Dialog
      fullScreen
      open={open}
      onClose={() => {
        navigate('/mirintel/');
        dispatch(onClose());
      }}
      TransitionComponent={Transition}
      className='more-courses'
    >
      <AppBar sx={{ position: 'relative', bgcolor: '#ffcf99' }}>
        <Toolbar sx={{ bgcolor: '#ffcf99' }}>
          <IconButton
            edge='start'
            color='#333'
            onClick={() => {
              navigate();
              dispatch(onClose());
            }}
            aria-label='close'
          >
            <CloseIcon />
          </IconButton>
          <span className='course-dialog__name'>{course.name}</span>
        </Toolbar>
      </AppBar>
      <div className='more-courses__data'>
        {course.data.length
          ? course.data.map((data) => <CourseCard key={data.id} data={data} />)
          : null}
      </div>
    </Dialog>
  ) : null;
};

export default MoreCourses;
