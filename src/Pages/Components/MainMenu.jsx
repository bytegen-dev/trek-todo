import React from 'react'
import { Link } from 'react-router-dom'

function MainMenu(props) {
  return (
    <div className='menu'>
      <div className="content">
        <nav>
            <div className="theme">
                <img src="img/theme.png" alt="adjust" />
            </div>
            <div className="hamburger" onClick={props.hideMenu}>
                <i className="fa fa-close"></i>
            </div>
        </nav>
        <div className="links-holder">
            <Link className='active' to={'/home'}>Dashboard</Link>
            <Link to={'/about'}>About</Link>
            <Link className='hidden' to={'/install-guide'}>Install App (offline)</Link>
            <Link className='hidden' to={'/collections'}>Collections</Link>
            <Link to={'/settings'}>Settings</Link>
        </div>
        <div className="social-links">
            <a href="#!"><i className="fa-brands fa-twitter"></i></a>
            <a href="#!"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="#!"><i className="fa fa-globe"></i></a>
            <a href="#!"><i className="fa-brands fa-github"></i></a>
        </div>
      </div>
    </div>
  )
}

export default MainMenu
