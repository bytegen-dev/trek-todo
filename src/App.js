import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Main from './Pages/Main'
import About from './Pages/About'
import Settings from './Pages/Settings'
import './index.scss'
import LoginContext from './Contexts/LoginContext'
import { useReducer } from 'react'

function App() {
  const APPINITIAL = {
    darkTheme: false,
    tasksUnchecked: [],
    tasksChecked: [],
    user:{
      name: 'guest',
      img: 'img/user.png'
    },
    toggleTheme: ()=>{
      dispatch({target: 'themeToggle'})
    },
    addTask: (taskToAdd)=>{
      dispatch({target: 'addTask', taskToAdd})
    },
    clearCompleted: ()=>{
      dispatch({target: 'clearCompleted'})
    }
  }
  
  const updateApp = (state, action)=>{
    switch (action.target){
      case 'themeToggle':
        return ({
          ...state,
          darkTheme: !state.darkTheme,
        })
        case 'addTask':
          return ({
            ...state,
            tasksUnchecked:[
              ...state.tasksUnchecked,
              {
                taskName: action.taskToAdd.taskName,
                taskType: action.taskToAdd.taskType,
                taskId: action.taskToAdd.taskName + Math.floor(Math.random()*1000000)+99,
                checkTask: (taskToCheck)=>{
                  dispatch({target: 'checkTask', taskToCheck})
                }
              }
            ],
        })
        case 'checkTask':
          var filteredTasks = state.tasksUnchecked.filter((task)=>{
            return (task.taskId !== action.taskToCheck.taskId)
          })
          var filteredNewTasks = [
            ...state.tasksChecked,
            {
              taskName: action.taskToCheck.taskName,
              taskType: action.taskToCheck.taskType,
              taskId: action.taskToCheck.taskName + Math.floor(Math.random()*1000000)+99,
              unCheckTask: (taskToUnCheck)=>{
                dispatch({target: 'unCheckTask', taskToUnCheck})
              }
            }
          ]
          return({
            ...state,
            tasksUnchecked:[
              ...filteredTasks
            ],
            tasksChecked:[
              ...filteredNewTasks
            ],
          })
          case 'unCheckTask':
            var filteredTasksX = state.tasksChecked.filter((task)=>{
              return (task.taskId !== action.taskToUnCheck.taskId)
            })
            var filteredNewTasksX = [
              ...state.tasksUnchecked,
              {
                taskName: action.taskToUnCheck.taskName,
                taskType: action.taskToUnCheck.taskType,
                taskId: action.taskToUnCheck.taskName + Math.floor(Math.random()*1000000)+99,
                checkTask: (taskToCheck)=>{
                  dispatch({target: 'checkTask', taskToCheck})
                }
              }
            ]

            return({
              ...state,
              tasksUnchecked: [
                ...filteredNewTasksX
              ],
              tasksChecked: [
                ...filteredTasksX
              ],
            })
          case 'clearCompleted':
            return({
              ...state,
              tasksChecked: []
            })
      default:
        return({
          ...state
        })
    }    
  }

  const [appData, dispatch] = useReducer(updateApp, APPINITIAL)

  return (
    <LoginContext.Provider value={appData}>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/main' element={<Main />}/>
          <Route path='/home' element={<Main />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/settings' element={<Settings />}/>
        </Routes>
      </div>
    </LoginContext.Provider>
  )
}

export default App
