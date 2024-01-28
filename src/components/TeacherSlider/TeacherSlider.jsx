import SlickSlider from 'react-slick';
import CoursesSliderItem from '../TeacherSliderItem/TeacherSliderItem';
import useSlider from '../../hooks/useSlider';


const TeacherSlider = ({ items }) => {
  const {settings} = useSlider();
  return (
    <SlickSlider style={{ width: '90%', margin: '0 auto' }} {...settings}>
      {items.map((item) => {
        return <CoursesSliderItem key={item.id} item={item} />;
      })}
    </SlickSlider>
  );
};

export default TeacherSlider;
