import React from 'react'
import './DoctorsStyles.css'
const Doctors = () => { 
  return (
    <div name='doctors' className='Doctors'>
        <div className="container">
            <div className="top">
                <h2 >Our Doctors</h2>
            </div>
            <div>
             <button className="btn btn-primary">General medicine Surgeons</button>
             <button className="btn btn-primary">Orthopedic Surgeons</button>
             <button className="btn btn-primary">Cardiac Surgeons</button>

            </div>
            
            <div>
   
            <div className="bottom">
              
                <button className="btn btn-primary">Book UR Doctor</button>
                <button className="btn btn-primary">Our Products</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Doctors;