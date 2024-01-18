import React from 'react';
import './ProjectCard.css';
import icons from '../../img/svg/sprite.svg';

function ProjectCard(props) {
  return (
    <div className='projectCard-container'>
      <h2>{props.title}</h2>
      <img src={props.image} alt='' className='projectCard-image'></img>
      <div className='projectCard-content'>
        {props.languages.map((lang, i) => {
          return <p>{lang}</p>;
        })}
      </div>
      <div className='projectCard-description'>
        <p>{props.description}</p>
      </div>
      <div className='projectCard-links'>
        <a href={props.githubLink} className='projectCard-btn'>
          <svg className='projectCard-icon'>
            <use xlinkHref={`${icons}#icon-github`} />
          </svg>
          GitHub
        </a>
        <a href={props.demoLink} className='projectCard-btn'>
          <svg className='projectCard-icon'>
            <use xlinkHref={`${icons}#icon-external-link`} />
          </svg>
          Website
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
