import React from 'react';
import ImgList from './ImgList/ImgList';
import './models.scss';
import PhoneBtn from '../Header/PhoneBtn/PhoneBtn';
import { MODELS_PHOTO } from '../../constants/images'; 

const Models = () => {
  return (
    <section id='models' className='block models'>
      <ImgList photos={MODELS_PHOTO} rowHeight={200}></ImgList>
      <div className='model-text'>
        <p>
          Шановні моделі, Ми раді запросити Вас взяти участь у нашому заході,
          присвяченому б'юті-процедурам. Це чудова можливість для Вас відкрити
          для себе нові методи догляду за шкірою, включаючи манікюр, перукарські
          послуги та шугарінг, які ми пропонуємо. Ми з нетерпінням чекаємо на
          Вас!
        </p>
        <PhoneBtn></PhoneBtn>
      </div>
    </section>
  );
};

export default Models;
