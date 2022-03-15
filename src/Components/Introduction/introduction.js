import React from 'react'
import './introduction.css'
const Introduction = () => {
  return (
    <div className='intro-container'>
        <div className='intro'> 
            <h1 className='intro-text'>
                Hello, My Name is <text className='intro-name'>JOHN DON</text>.
            </h1>
            <h1 className='intro-text'>
                And I make horrible website.
            </h1>
        </div>
        <img className='introduction-img' src="/picture.jpg" placeholder='here is the image'/>
    </div>
  )
}

export default Introduction
