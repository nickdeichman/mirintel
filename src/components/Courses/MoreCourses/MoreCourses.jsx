import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';
import { AppBar, IconButton, Toolbar } from '@mui/material';
import CourseCard from '../CourseCard/CourseCard';
import { useSelector } from 'react-redux';
import { closeItemModal as onClose } from '../../../store/reducer/itemModalSlice';
import { useNavigate } from 'react-router-dom';
import useMoreCourses from '../../../hooks/useMoreCourses';

const MoreCourses = () => {
  const course = useSelector((state) => state.itemReducer.item);
  const open = useSelector((state) => state.itemReducer.isOpen);
  const navigate = useNavigate();
  const { courseId, Transition, dispatch } = useMoreCourses();

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
