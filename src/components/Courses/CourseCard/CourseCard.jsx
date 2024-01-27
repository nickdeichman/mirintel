import React from 'react';
import MuiButton from '../../MuiButton/MuiButton';

const CourseCard = ({data}) => {
  return (
    <div className='course-card'>
      <h3>{data.name}</h3>
      <p><span className='course-card__span'>Про курс:</span> {data.about}</p>
      {data.for ? <p><span className='course-card__span'>Для кого:</span> {data.for}</p> : null}
      <a className='course-card__link' href={data.moreLink} target='_blank' rel="noreferrer">
        <MuiButton title={'Залишити заявку'} />
      </a>
    </div>
  );
};

export default CourseCard;
