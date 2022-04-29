import React, {useState} from 'react'
import './NavbarStyles.css'
import { FaBars,  FaTimes, FaInstagram } from 'react-icons/fa'
import {TiSocialTwitter, TiSocialPinterest,TiSocialFacebook } from 'react-icons/ti'
import { Link  } from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [slide, setSlide] = useState(false)

    const handleNav = () => {
        setNav(!nav)
        setSlide(!slide)
    }

    const handleClose = () => {
        setNav(!nav)
    }


    
  return (
    <div className="navbar">
    <div className="container">
        <div className={slide ? 'logo slide-right' : 'logo'}>
            <h3>Hospital</h3>
        </div>

        <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
        <li><a href="/"><Link onClick={handleClose} activeClass="active" to="home" spy={true} smooth={true} duration={500}>Home</Link></a></li>
        <li><a href="/"><Link onClick={handleClose} activeClass="active" to="services" spy={true} smooth={true} duration={500}>Services</Link></a></li>
        <li><a href="/"><Link onClick={handleClose} activeClass="active" to="doctors" spy={true} smooth={true} duration={500}>Doctors</Link></a></li>
        <li><a href="/"><Link onClick={handleClose} activeClass="active" to="aboutUs" spy={true} smooth={true} duration={500}>About  Us</Link></a></li>
        <li><a href="/"><Link onClick={handleClose} activeClass="active" to="contactUs" spy={true} smooth={true} duration={500}>ContactUs</Link></a></li>

       
            <div className="mobile-menu">
                <button>Shop</button>
                <button>Account</button>

                <div className="social-icons">
                    <TiSocialFacebook className='icon' />
                    <FaInstagram className='icon' />
                    <TiSocialTwitter className='icon' />
                    <TiSocialPinterest className='icon'/>
                </div>
            </div>
        </ul>

        <ul className="nav-menu hide" >
             <li><a href="/">Store</a></li>
             <li><a href="/">Account</a></li>
        </ul>   

        <div className="hamburger" onClick={handleNav}>
           {nav ? (<FaTimes size={20} style={{ color: '#ffffff' }} />) : (<FaBars style={{ color: '#ffffff' }} size={20} />)}
        </div>

    </div>
    </div>
  )
  }

export default Navbar;