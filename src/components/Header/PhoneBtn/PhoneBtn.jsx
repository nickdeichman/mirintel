import React from 'react';
import Button from '@mui/material/Button';
import PhoneIcon from '@mui/icons-material/Phone';
import { PHONE_NUMBER } from '../../../constants/header';
const PhoneBtn = () => {
  return (
    <>
      <a className='phone-btn' href={`tel:+38${PHONE_NUMBER.replaceAll(' ', '')}`}>
        <Button sx={{backgroundColor: 'unset'}} className={`button`} variant='contained'>
          <PhoneIcon sx={{ marginRight: '10px', fontSize: '1.2rem' }} />
          {PHONE_NUMBER}
        </Button>
      </a>
    </>
  );
};

export default PhoneBtn;
