import Modal from '@mui/material/Modal';
import List from '@mui/material/List';
import MuiButton from '../../MuiButton/MuiButton';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { closeItemModal as onClose } from '../../../store/reducer/itemModalSlice';
import { useNavigate, useParams } from 'react-router-dom';
import teachers from '../../../json/teachers.json';
import { openItemModal } from '../../../store/reducer/itemModalSlice';
import { useEffect } from 'react';
import { HAIRDRESSER } from '../../../constants/images';

const TeacherModal = () => {
  const { teacherId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const teacher = useSelector((state) => state.itemReducer.item);
  const open = useSelector((state) => state.itemReducer.isOpen);

  useEffect(() => {
    teacherId
      ? dispatch(
          openItemModal(
            teachers.filter((item) => String(item.id) === teacherId)[0]
          )
        )
      : null;
  }, []);

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
          <span className='teacher-modal__experience'>Досвід роботи: {teacher.yearsOfWork}</span>
          <span className='teacher-modal__experience'>Досвід викладання: {teacher.yearsOfTeaching}</span>
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
