import React, { useState, useEffect } from 'react';
import ScrollTo from 'react-scroll-into-view';
import './Home.css';
import icons from '../img/svg/sprite.svg';

const Home = () => {
  let [text, setText] = useState('');
  let [startType, setStartType] = useState(false);
  let [startDelete, setStartDelete] = useState(false);
  let [indexToType, setIndexToType] = useState(null);
  const textToType = ['Application', 'Web', 'Mobile'];

  useEffect(() => {
    const typeText = () => {
      setText(text+=textToType[indexToType].charAt(text.length));
    }

    const deleteText = () => {
      setText(text.slice(0, -1));
    }

    if (startType && text.length < textToType[indexToType].length) {
      setTimeout(()=>{setTimeout(typeText(), 500)}, 100);
    } else if (startType && text.length === textToType[indexToType].length) {
      setStartType(false);
      setTimeout(()=>{setTimeout(setStartDelete(true), 100)}, 1000);
    }

    if (startDelete && text.length > 0) {
      setTimeout(()=>{setTimeout(deleteText(), 500)}, 100);
    } else if (startDelete && text.length === 0) {
      setStartDelete(false);
      setTimeout(()=>{setTimeout(() => {
        // Change index for next text swtich in array
        if (indexToType === 0)
          type(1);
        else if (indexToType === 1)
          type(2);
        else
          type(0);
      }, 200)}, 200);
    }
  }, [startDelete, startType, text.length]);

  const type = (index) => {
    setIndexToType(index);
    setStartType(true);
  };
  
  useEffect(() => {
    type(0);
  },[]);

  return (
    <div id='home' className='home-container'>
      <div className='home-image-superlow-res' />
      <div className='home-image-low-res' />
      <div className='home-image-high-res' />
      <div className='home-text'>
        <h2 className='home-heading-2'>Howdy</h2>
        <div className='home-description'>
          <span className='home-normal-text'>Mid&nbsp;</span>
          <span className='home-typing-text'>{text}</span>          
          <span className='home-normal-text'> Developer &nbsp;</span>
        </div>
        <ScrollTo selector={'#about'}>
          <svg className='expandarrow-icon'>
            <use xlinkHref={`${icons}#icon-expand-arrow`} />
          </svg>
        </ScrollTo>
      </div>
    </div>
  );
};

export default Home;
