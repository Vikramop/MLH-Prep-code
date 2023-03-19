import React from 'react'
import './HomeStyles.css'

const Home = () => {
  return (
    <div name='home' className='home'>
        <div className="container">
            <div className="top">
                <h2 className="title">Improving Lifes Of Our <span>Patients</span><br/> And Their <span>
                  Families</span></h2>
            </div>
            <div className="bottom">
                <button className="btn btn-primary">Book UR Doctor</button>
                <button className="btn btn-primary">Our Products</button>
            </div>
        </div>
    </div>
  )
}

export default Home;
