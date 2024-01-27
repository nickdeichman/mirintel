import React, { useEffect } from 'react';
import SlickSlider from 'react-slick';
import CoursesSliderItem from './CoursesSliderItem/CoursesSliderItem';

const CoursesSlider = ({ items, handleOpen }) => {
  const changeSlidesOnWidth = () => {
    if (window.innerWidth < 990) {
      return 1.5;
    }
    return 2.5;
  };
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: changeSlidesOnWidth(),
    slidesToScroll: 1,
    autoplay: true,
    lazyload: true,
    pauseOnHover: true,
  };




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
