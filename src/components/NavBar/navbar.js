import React, {useEffect, useState} from 'react'
import './navbar.css'
import logo from '../../assets/logo-removebg-preview.png'
import message from '../../assets/message.gif'
import menu from '../../assets/menu.png'
import { Link } from 'react-scroll';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [sticky, setSticky] = useState(false); 
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 860);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
      <nav className={`navbar ${sticky? 'dark-nav' : ''}`}>
          <img src={logo} alt="" className='logo'/>
          <div className='desktopMenu'>
        <Link activeClass='active' to='intro' spy={true} offset={100} duration={500} className='desktopMenuListItem'>Home</Link>
        <Link className='desktopMenuListItem' activeClass='active' to='services' spy={true} offset={-100} duration={500}>Services</Link>
        <Link className='desktopMenuListItem' activeClass='active' to='about' spy={true} offset={-100} duration={500}>About</Link>
        
            <Link className='desktopMenuListItem' activeClass='active' to='work' spy={true} offset={-100} duration={500}>Work</Link>  
        <Link className='desktopMenuListItem'
        activeClass='active' to='gallery' spy={true} offset={-100} duration={500}>Gallery</Link>  
          </div>
      <button className="desktopMenuBtn" onClick={() => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
          }}>
           <img src={message} alt=""className='desktopMenuImg'/> Contact Us  
      </button>
      <img src={menu} alt="menu" className='Mobmenu' onClick={()=>setShowMenu(!showMenu)}/>
      <div className='navMenu' style={{ display: showMenu ? 'flex' : 'none' }}>
        <Link activeClass='active' to='intro' spy={true} offset={100} duration={500} className='ListItem' onClick={()=>setShowMenu(false)}>Home</Link>
        <Link className='ListItem' activeClass='active' to='services' spy={true} offset={-100} duration={500} onClick={()=>setShowMenu(false)}>Services</Link>
        <Link className='ListItem' activeClass='active' to='about' spy={true} offset={-100} duration={500} onClick={()=>setShowMenu(false)}>About</Link>
        
            <Link className='ListItem' activeClass='active' to='work' spy={true} offset={-100} duration={500} onClick={()=>setShowMenu(false)}>Work</Link>  
        <Link className='ListItem'
        activeClass='active' to='gallery' spy={true} offset={-100} duration={500} onClick={()=>setShowMenu(false)}>Gallery</Link>  
       <Link className='ListItem'
        activeClass='active' to='contact' spy={true} offset={-100} duration={500} onClick={()=>setShowMenu(false)}>Contact</Link>  
            
      </div>
          
    </nav>
  )
}

export default Navbar