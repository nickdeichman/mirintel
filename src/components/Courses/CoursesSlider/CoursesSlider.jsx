import React from 'react';
import SlickSlider from 'react-slick';
import CoursesSliderItem from './CoursesSliderItem/CoursesSliderItem';
import useSlider from '../../../hooks/useSlider';

const CoursesSlider = ({ items, handleOpen }) => {
  const {settings} = useSlider();

  return (
    <SlickSlider style={{ width: '90%', margin: '0 auto' }} {...settings}>
      {items.map((item, index) => {
        return (
          <CoursesSliderItem handleOpen={handleOpen} key={index} item={item} />
        );
      })}
    </SlickSlider>
  );
};

export default CoursesSlider;
