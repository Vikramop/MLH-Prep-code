import React from 'react'
import './ServicesStyles.css'


const Services = () => {
  return (
    <div name='services' className='Services'>
        <div className="container">
            <div className="top">
                <h2 >Services</h2>
            </div>
            <div className="middle">
             <h4>We have the best consulatancy services with major and minor aspects.
               </h4>
            </div>
            <div className="middle-1">
              
                 <h4> <br/> 
                         Ambulance  Services<br/>
                         Emergency Services<br/>
                         Free vaccination<br/>
                         Affordable charges</h4>
                
              
            </div>
            <div className="bottom">
                <button className="btn btn-primary">Book UR Doctor</button>
                <button className="btn btn-primary">Our Products</button>
            </div>
        </div>
    </div>
  )
}

export default Services;