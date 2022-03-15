import React from 'react';
import './project.css';
const Project = () => {
  return (
    <div className='card'>
        <img className='card-img' src="/project.png" placeholder='this is image placeholder'/>
        <h4 className='card-title'>PROJECT</h4>  
        <p className='card-description'>
            Post hanc adclinis Libano monti Phoenice, regio plena gratiarum et venustatis,
            urbibus decorata magnis et pulchris; in quibus amoenitate celebritateque nominum Tyros
            excellit, Sidon et Berytus isdemque pares Emissa et Damascus saeculis condita priscis.
        </p>
        <a href="#">VGitHub Link</a>
    </div>
  )
}

export default Project