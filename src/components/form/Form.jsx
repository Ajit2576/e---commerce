import React from 'react'
import './form.css'

function Form() {
  return (
    <div className="form-main">
        <form className="contact-form" action="#">
            <div className="form-heading">
                <h1>Send a message</h1>
            </div>
            <div className="form-inp">
                <div className="cont-inp-1 cont-inp-size">
                    <input type="text" name='name' id='name' placeholder='Enter your name' />
                    <input type="email" name='email' id='email' placeholder='Enter your email' />
                </div>
                <div className="cont-inp-1 cont-inp-size">
                    <input type="tel" name='mobile' id='mobile' placeholder='Mobile no' />
                    <input type="text" name='company' id='comapny' placeholder='Company' />
                </div>
                <textarea name="textarea" id="textarea" placeholder='Your message'></textarea>
            </div>
            <div className="form-term-condition">
                
                <p><input type='checkbox' className='largerCheckbox'></input> I am bound by the term of the Service I accept Privacy Policy.</p>
            </div>
            <div className="form-button-2">
                <button>Send Message</button>
            </div>
        </form>
    </div>
  )
}

export default Form
