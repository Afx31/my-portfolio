import React from 'react';
import './About.css';

const About = () => {
  return (
    <div id='about' className='about-container'>
      <div className='about-inner-container'>
        <div>
          <img
            src={require('../img/wireframes.jpg')}
            /* https://www.pexels.com/photo/white-printer-paper-196645/ */
            alt=''
            className='about-image'
          />
        </div>
        <div className='about-text'>
          <h2 className='about-heading-2'>A Little Bit About Me</h2>
          <hr />
          <p className='about-description'>
            My name is William, a Software Engineer based in Australia.
            My day to day job is in the .NET/SQL FinTech space, whilst diving 
            into other areas such as ASP.NET & Web at work.
            <br />
            <br />
            In my spare time, I'm working on a data acquisition monitoring device
            for my race car, side .NET applications and various web projects like 
            a blogsite and my own UI framework. I also enjoy upskilling in various 
            tech like C++, Python & computer architecture & design.
            <br />
            <br />
            If you have any questions or would like to get in contact with me,
            please do not hesitate to use the link at the bottom!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
