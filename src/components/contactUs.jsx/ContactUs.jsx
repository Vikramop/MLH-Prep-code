import React from 'react'
import './ContactUsStyles.css'

const Contact = () => {
    return (
        <div name='contactUs' className='contact'>
            <div className="container">
                <div className="top">
                    <h1>Contact</h1>
                </div>

                <form className="form">
                    <div>
                        <label>Name</label>
                        <input type="text" placeholder='Enter your name' />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" placeholder='Enter your email' />
                    </div>
                    
                    <div className="bottom">
                        <button className="btn btn-dark">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact