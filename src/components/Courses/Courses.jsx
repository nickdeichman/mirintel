import { useState } from 'react';
import './courses.scss';
import Left from './Left/Left';
import Right from './Right/Right';
import MoreCourses from './MoreCourses/MoreCourses';

const Courses = () => {
  return (
    <>
      <section id='courses'>
        <Left />
        <Right />
        <MoreCourses
        ></MoreCourses>
      </section>
    </>
  );
};

export default Courses;
