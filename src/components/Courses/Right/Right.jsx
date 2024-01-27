import React from 'react'
import {default as courses}   from '../../../constants/courses';
import CoursesSlider from '../CoursesSlider/CoursesSlider';


const Right = ({handleOpen}) => {
  
  return (
    <div className='courses-right'>
      <CoursesSlider handleOpen={handleOpen} items={courses} />
    </div>
  )
}

export default Right