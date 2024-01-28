import Modal from '@mui/material/Modal';
import List from '@mui/material/List';
import MuiButton from '../../MuiButton/MuiButton';
import { closeItemModal as onClose } from '../../../store/reducer/itemModalSlice';
import { useNavigate } from 'react-router-dom';
import { HAIRDRESSER } from '../../../constants/images';
import useTeacherModal from '../../../hooks/useTeacherModal';

const TeacherModal = () => {
  const { teacherId, dispatch, teacher, open } = useTeacherModal();
  const navigate = useNavigate();

  return teacher && teacherId ? (
    <Modal
      open={open}
      onClose={() => {
        navigate('/mirintel/');
        dispatch(onClose());
      }}
    >
      <div className='teacher-modal' id={teacher.id}>
        <img
          src={teacher.photo ? teacher.photo : HAIRDRESSER}
          className='teacher-modal__left'
        ></img>
        <div className='teacher-modal__right'>
          <h2 className='teacher-modal__heading'>{teacher.name}</h2>
          <span className='teacher-modal__experience'>
            Досвід роботи: {teacher.yearsOfWork}
          </span>
          <span className='teacher-modal__experience'>
            Досвід викладання: {teacher.yearsOfTeaching}
          </span>
          <p className='teacher-modal__about'>{teacher.about}</p>
          <h3 className='teacher-modal__heading'>Веде курси: </h3>
          <List>
            {teacher.courses
              ? teacher.courses.map((course, index) => {
                  return (
                    <a
                      key={index}
                      className='modal-link'
                      href={Object.values(course)}
                      target='_blank'
                      rel='noreferrer'
                    >
                      <MuiButton title={Object.keys(course)}></MuiButton>
                    </a>
                  );
                })
              : null}
          </List>
        </div>
      </div>
    </Modal>
  ) : null;
};

export default TeacherModal;
