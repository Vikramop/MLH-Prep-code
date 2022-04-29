import React from 'react'
import './AboutUsStyles.css'

const AboutUs = () => {
  return (
    <div name='aboutUs' className='AboutUs'>
        <div className="container">
            <div className="top">
                <h2 >AboutUs</h2>
            </div>
            <div className="des"> 
            <h4>Our consulutancy is old and gold.We have success rate of 98.7%.
                <br/>
                Our hospitals are located in mojor cities(
                    <span> 
                 Banglore, Pune, Delhi, Kolkata, Mumbai and many more..
                 </span>) 
                 <br/>
                and have better afordable services.
            </h4>
            </div>
            <div className="bottom">
                <button className="btn btn-primary">Book UR Doctor</button>
                <button className="btn btn-primary">Our Products</button>
            </div>
        </div>
    </div>
  )
}

export default AboutUs;