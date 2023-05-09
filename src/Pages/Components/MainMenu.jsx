import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import LoginContext from '../../Contexts/LoginContext'

function MainMenu(props) {
    const dataRecieved = useContext(LoginContext)
  return (
    <div className='menu'>
      <div className="content">
        <nav>
            <div className="theme" onClick={()=>{
                dataRecieved.toggleTheme()
            }}>
                <img src="img/theme.png" alt="adjust" />
            </div>
            <div className="hamburger" onClick={props.hideMenu}>
                <i className="fa fa-close"></i>
            </div>
        </nav>
        <div className="links-holder">
            <Link className='active' to={'/'}>Dashboard</Link>
            <Link className='hidden' to={'/about'}>About</Link>
            <Link className='hidden' to={'/install-guide'}>Install App (offline)</Link>
            <Link className='hidden' to={'/collections'}>Collections</Link>
            <Link className='hidden' to={'/settings'}>Settings</Link>
        </div>
        <div className="social-links">
            <a href="https://twitter.com/tertiux44" target={'_blank'} rel={'noreferrer'}><i className="fa-brands fa-twitter"></i></a>
            <a href="https://linkedin.com/in/tertiux44" target={'_blank'} rel={'noreferrer'}><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="https://wa.me/+2347035658853" target={'_blank'} rel={'noreferrer'}><i className="fa-brands fa-whatsapp"></i></a>
            <a href="https://github.com/tertiux" target={'_blank'} rel={'noreferrer'}><i className="fa-brands fa-github"></i></a>
        </div>
      </div>
    </div>
  )
}

export default MainMenu
