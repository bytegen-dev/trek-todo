import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Main from './Pages/Main'
import About from './Pages/About'
import Settings from './Pages/Settings'
import './index.scss'
import LoginContext from './Contexts/LoginContext'
import { useReducer } from 'react'
import { useLayoutEffect } from 'react'

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
    deleteTask: (taskToDelete, taskTypeToDelete)=>{
      dispatch({target: 'deleteTask', taskToDelete, taskTypeToDelete})
    },
    clearCompleted: ()=>{
      dispatch({target: 'clearCompleted'})
    }
  }
  
  const updateApp = (state, action)=>{
    switch (action.target){
      case 'themeToggle':
        setTimeout(()=>{
          const appDataTemp = JSON.stringify(appData)
          window.localStorage.setItem('storedTaskData', appDataTemp)
        },500)
        return ({
          ...state,
          darkTheme: !state.darkTheme,
        })
        case 'addTask':
          setTimeout(()=>{
            const appDataTemp = JSON.stringify(appData)
            window.localStorage.setItem('storedTaskData', appDataTemp)
          },500)
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
          setTimeout(()=>{
            const appDataTemp = JSON.stringify(appData)
            window.localStorage.setItem('storedTaskData', appDataTemp)
          },500)
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
            setTimeout(()=>{
              const appDataTemp = JSON.stringify(appData)
              window.localStorage.setItem('storedTaskData', appDataTemp)
            },500)
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
            setTimeout(()=>{
              const appDataTemp = JSON.stringify(appData)
              window.localStorage.setItem('storedTaskData', appDataTemp)
            },500)
            return({
              ...state,
              tasksChecked: []
            })
            case 'deleteTask':
            setTimeout(()=>{
              const appDataTemp = JSON.stringify(appData)
              window.localStorage.setItem('storedTaskData', appDataTemp)
            },500)
            // var thisTask = action.taskToDelete
            var thisTaskType = action.taskTypeToDelete
            let newList
            
            if(thisTaskType === 'checked'){
              newList = state.tasksChecked.filter((task)=>{
                return (task.taskId !== action.taskToDelete.taskId)
              })
              return({
                ...state,
                tasksChecked: [
                  ...newList
                ]
              })
            } else{
              newList = state.tasksUnchecked.filter((task)=>{
                return (task.taskId !== action.taskToDelete.taskId)
              })
              return({
                ...state,
                tasksUnchecked: [
                  ...newList
                ]
              })
            }
          case 'updateDataFromStorage':
            var tobeRecievedString = window.localStorage.getItem('storedTaskData')
            var tobeRecieved = JSON.parse(tobeRecievedString)
            var optimizedChecked = tobeRecieved.tasksChecked.forEach((task)=>{
              return (task.unCheckTask = (taskToUnCheck)=>{
                dispatch({target: 'unCheckTask', taskToUnCheck})
              })
            })
            var optimizedUnChecked = tobeRecieved.tasksUnchecked.forEach((task)=>{
              return (task.checkTask = (taskToCheck)=>{
                dispatch({target: 'checkTask', taskToCheck})
              })
            })
            var optimizedFunctions = {
              toggleTheme: ()=>{
                dispatch({target: 'themeToggle'})
              },
              addTask: (taskToAdd)=>{
                dispatch({target: 'addTask', taskToAdd})
              },
              deleteTask: (taskToDelete, taskTypeToDelete)=>{
                dispatch({target: 'deleteTask', taskToDelete, taskTypeToDelete})
              },
              clearCompleted: ()=>{
                dispatch({target: 'clearCompleted'})
              }
            }
            console.log(tobeRecieved)
            return({
              ...state,
              ...tobeRecieved,
              ...optimizedChecked,
              ...optimizedUnChecked,
              ...optimizedFunctions,
            })
            
            default:
              return ({
                ...state,
      
              })
    }    
  }

  const [appData, dispatch] = useReducer(updateApp, APPINITIAL)

  useLayoutEffect(()=>{
    const prevStorage = window.localStorage.getItem('storedTaskData')
    if (prevStorage){
      dispatch({target: 'updateDataFromStorage'})
    } else{
      window.localStorage.removeItem('storedTaskData')
    }

  }, [])

  // useEffect(()=>{
  //   const appDataTemp = JSON.stringify(appData)
  //   window.localStorage.setItem('storedTaskData', appDataTemp)
  // },[appData])

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
