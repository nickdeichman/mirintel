import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MapIcon from '@mui/icons-material/Map';
import { TIKTOK_ICON } from '../../../../constants/images';
import PhoneBtn from '../../../Header/PhoneBtn/PhoneBtn';

const ContactsLeft = () => {
  return (
    <>
      <div className='footer-contacts__bottom-left'>
        <div className='footer-icons'>
        <a
          className='contact-social'
          href='https://www.facebook.com/Worldintell.Odessa'
          target='blank'
        >
          <FacebookIcon />
        </a>
        <a
          className='contact-social'
          href='https://www.instagram.com/mirintell/'
          target='blank'
        >
          <InstagramIcon />
        </a>
        <a
          className='contact-social'
          href='https://www.tiktok.com/@user8821040995368'
          target='blank'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            x='0px'
            y='0px'
            width={24}
            height={24}
            viewBox='0,0,256,256'
            style={{ fill: '#000000' }}
          >
            <g transform='translate(-25.6,-25.6) scale(1.2,1.2)'>
              <g
                fill='#585755'
                fillRule='nonzero'
                stroke='none'
                strokeWidth={1}
                strokeLinecap='butt'
                strokeLinejoin='miter'
                strokeMiterlimit={10}
                strokeDasharray=''
                strokeDashoffset={0}
                fontFamily='none'
                fontWeight='none'
                fontSize='none'
                textAnchor='none'
                style={{ mixBlendMode: 'normal' }}
              >
                <g transform='scale(10.66667,10.66667)'>
                  <path d='M6,3c-1.64497,0 -3,1.35503 -3,3v12c0,1.64497 1.35503,3 3,3h12c1.64497,0 3,-1.35503 3,-3v-12c0,-1.64497 -1.35503,-3 -3,-3zM6,5h12c0.56503,0 1,0.43497 1,1v12c0,0.56503 -0.43497,1 -1,1h-12c-0.56503,0 -1,-0.43497 -1,-1v-12c0,-0.56503 0.43497,-1 1,-1zM12,7v7c0,0.56503 -0.43497,1 -1,1c-0.56503,0 -1,-0.43497 -1,-1c0,-0.56503 0.43497,-1 1,-1v-2c-1.64497,0 -3,1.35503 -3,3c0,1.64497 1.35503,3 3,3c1.64497,0 3,-1.35503 3,-3v-3.76758c0.61615,0.43892 1.25912,0.76758 2,0.76758v-2c-0.04733,0 -0.73733,-0.21906 -1.21875,-0.63867c-0.48142,-0.41961 -0.78125,-0.94634 -0.78125,-1.36133z' />
                </g>
              </g>
            </g>
          </svg>
        </a>
        <a
          className='contact-social'
          href='https://maps.app.goo.gl/fGneD6QuKJBdJDx96'
          target='blank'
        >
          <MapIcon />
        </a>
        </div>
        <span>Телефон: </span>
        <a className='phone-link' href='tel:+380974877128'>097 487 7128</a>
      </div>
    </>
  );
};

export default ContactsLeft;
