import React from 'react'
import Dashboard from './Components/Dashboard'
import MainMenu from './Components/MainMenu'
import { useState } from 'react'
import NewTask from './Components/NewTask'

function Main() {
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

  function showNewTask(){
    setMainUi((prev)=>{
      return ({
        ...prev,
        showNewTask: true
      })
    })
    document.getElementById('tasknametemp').focus()
  }

  function hideNewTask(){
    setMainUi((prev)=>{
      return ({
        ...prev,
        showNewTask: false,
        showMenu: false
      })
    })
  }

  return (
    <div className={mainUi.showMenu ? 'show-menu main' : 'main'}>
      <Dashboard showMenu={showMenu} showNewTask={showNewTask} />
      <MainMenu hideMenu={hideMenu} />
      <NewTask hideNewTask={hideNewTask} showingNewTask={mainUi.showNewTask}/>
      <div onClick={hideNewTask} className={mainUi.showNewTask?"backdrop show":"backdrop"}></div>
    </div>
  )
}

export default Main
