import body from '../assets/courses/body.webp';
import eye from '../assets/courses/eye.webp';
import legs from '../assets/courses/legs.webp';
import manicure from '../assets/courses/manicure.webp';
import massage from '../assets/courses/massage.webp';
import piercing from '../assets/courses/piercing.webp';
import scissors from '../assets/courses/scissors.webp';
import tattoo from '../assets/courses/tattoo.webp';


import eyeLashesCourses from '../json/eyelashes.json';
import hairdressingCourses from '../json/hairdressing.json';
import massageCourses from '../json/massage.json';
import nailServiceCourses from '../json/nailService.json';
import piercingCourses from '../json/piercing.json';
import tapingCourses from '../json/taping.json';
import tattooCourses from '../json/tattoo.json';
import depelationCourses from '../json/depelation.json';

const COURSES = [
  {
    id: 1,
    name: 'Курси з коррекції фігури',
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices sed purus nec ornare. Aliquam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices sed purus nec ornare. Aliquam.',
    picture: body,
    data: tapingCourses,
  },
  {
    id: 2,
    name: 'Курси нарощування вій та коррекції брів',
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices sed purus nec ornare. Aliquam.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    picture: eye,
    data: eyeLashesCourses,
  },
  {
    id: 3,
    name: 'Курси депіляції та шугарингу',
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices sed purus nec ornare. Aliquam.',
    picture: legs,
    data: depelationCourses,
  },
  {
    id: 4,
    name: 'Курси манікюру та педикюру',
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices sed purus nec ornare. Aliquam.',
    picture: manicure,
    data: nailServiceCourses,
  },
  {
    id: 5,
    name: 'Курси масажу',
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices sed purus nec ornare. Aliquam.',
    picture: massage,
    data: massageCourses,
  },
  {
    id: 6,
    name: 'Курси Пірсінга',
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices sed purus nec ornare. Aliquam.',
    picture: piercing,
    data: piercingCourses,
  },
  {
    id: 7,
    name: 'Курси Перукарів',
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices sed purus nec ornare. Aliquam.',
    picture: scissors,
    data: hairdressingCourses,
  },
  {
    id: 8,
    name: 'Навчання Мікроблейдінгу, татуажу і татуюванню',
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices sed purus nec ornare. Aliquam.',
    picture: tattoo,
    data: tattooCourses,
  },
];

export default COURSES;
