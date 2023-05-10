import React from 'react'
import { useState } from 'react'
import AboutDashboard from './Components/AboutDashboard'
import AboutMenu from './Components/AboutMenu'

function About() {
    const [mainUi, setMainUi] = useState({
        showMenu: false,
        showNewTask: false,
      })
      
      function showMenu(){
        setMainUi((prev)=>{
          return ({
            ...prev,
            showMenu: true
          })
        })
      }
    
      function hideMenu(){
        setMainUi((prev)=>{
          return ({
            ...prev,
            showMenu: false
          })
        })
      }
  return (
    <div className={mainUi.showMenu ? 'show-menu about' : 'about'}>
      <AboutDashboard showMenu={showMenu} hideMenu={hideMenu} />
      <AboutMenu showMenu={showMenu} hideMenu={hideMenu} />
      <div onClick={hideMenu} className={mainUi.showNewTask?"backdrop show":"backdrop"}></div>
    </div>
  )
}

export default About
