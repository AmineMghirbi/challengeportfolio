import React from 'react'
import './contact.css'
const Contact = () => {
  return (
    <div className='contact-container'>
      <h4 className='contact-title'>CONTACT ME</h4>
      <form className='contact-form'>
          <div>
              <p>FULL NAME:</p>
              <input className='contact-input' type="text" placeholder='Email'/>
          </div>
          <div>
              <p>Email:</p>
              <input  className='contact-input' type="email" placeholder='Email'/>
          </div>
          <div>
              <p>Message:</p>
              <textarea  className='contact-input' rows="5"  placeholder='Email'/>
          </div>
          <button className='contact-button'>SUBMIT</button>
      </form>
    </div>
  )
}

export default Contact
