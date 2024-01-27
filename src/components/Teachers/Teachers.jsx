import TeacherSlider from '../TeacherSlider/TeacherSlider';
import teachers from 'N:/mirintel/src/json/teachers.json';
import './teachers.scss';
import TeacherModal from './TeacherModal/TeacherModal';
const Teachers = () => {
  return (
    <>
      <section id='teachers' className='teachers'>
        <h2 className='teachers-heading'>Наші викладачі</h2>
        <TeacherSlider items={teachers} />
        <TeacherModal></TeacherModal>
      </section>
    </>
  );
};

export default Teachers;
