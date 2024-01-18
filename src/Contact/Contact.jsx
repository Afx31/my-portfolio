import React from 'react';
import './Contact.css';
import icons from '../img/svg/sprite.svg';

const Contact = () => {
  return (
    <div id='contact' className='contact'>
      <div className='contact-container'>
        <div className='contact-heading-2'>Get In Touch</div>
        <p className='contact-text'>
          If you have questions or wish to get in touch, please contact me via
          the link below
        </p>
        <a className='contact-email' href='mailto: willmitchellcodes@gmail.com'>
          Contact Me
        </a>
        <div className='contact-text'>You can also find me here:</div>
        <div>
          <a href='https://www.linkedin.com/in/wmitchell2/'>
            <svg className='icon-linkedin'>
              <use xlinkHref={`${icons}#icon-linkedin`} />
            </svg>
          </a>
          <a href='https://github.com/afx31'>
            <svg className='icon-github'>
              <use xlinkHref={`${icons}#icon-github`} />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
