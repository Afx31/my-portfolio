import React, { useState, useEffect } from 'react';
import ScrollTo from 'react-scroll-into-view';
import './Navbar.css';

const Navbar = () => {
  const [nav, setNav] = useState('');

  // Animation for navbar to decrease in size when scrolling down
  useEffect(() => {
    document.addEventListener(
      'scroll',
      () => {
        if (window.scrollY > 10)
          setNav('nav-collapse');
        else
          setNav('');
      },
      { capture: false, passive: true }
    );
  }, []);

  return (
    <nav className={nav}>
      <div className='logo'>
        <ScrollTo selector={'#home'}>
          <h4>William Mitchell</h4>
        </ScrollTo>
      </div>
      <ul className='nav-links'>
        <li>
          <ScrollTo selector={'#about'}>
            <p>ABOUT</p>
          </ScrollTo>
        </li>
        <li>
          <ScrollTo selector={'#skills'}>
            <p>SKILLS</p>
          </ScrollTo>
        </li>
        <li>
          <ScrollTo selector={'#projects'}>
            <p>PROJECTS</p>
          </ScrollTo>
        </li>
        <li>
          <ScrollTo selector={'#contact'}>
            <p>CONTACT</p>
          </ScrollTo>
        </li>
      </ul>
      <div className='burger'>
        <div className='line1'></div>
        <div className='line2'></div>
        <div className='line3'></div>
      </div>
    </nav>
  );
};

export default Navbar;
