import React from 'react';
import Button from '@mui/material/Button';

const MuiButton = ({ title, onClick, className }) => {
  return (
    <>
      <Button
        className={`button ${className}`}
        onClick={onClick}
        variant='contained'
      >
        {title}
      </Button>
    </>
  );
};

export default MuiButton;
