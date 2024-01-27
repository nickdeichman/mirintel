import React from 'react';
import Paper from '@mui/material/Paper';
import ContactsLeft from './ContactsLeft/ContactsLeft';
import ContactsRight from './ContactsRight/ContactsRight';

const Contacts = () => {
  return (
    <>
      <Paper elevation={3} id='footer-contacts'>
        <h2 className='footer-contacts__heading'>Контакти</h2>
        <p className='footer-contacts__text'>Навчальні курси індустрії краси "МірІнтелл"</p>
        <div className='footer-contacts__bottom'>
          <ContactsLeft />
          <ContactsRight />
        </div>
      </Paper>
    </>
  );
};

export default Contacts;
