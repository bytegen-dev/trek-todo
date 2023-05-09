import React from 'react'
import { useContext } from 'react'
import { useLayoutEffect } from 'react'
import { useState } from 'react'
import LoginContext from '../../Contexts/LoginContext'

function Dashboard(props) {
    const [currentDate, setCurrentDate] = useState({
        month: 'January',
        dateDay: '1',
        year: '2023'
    })

  const dataRecieved = useContext(LoginContext)


    
    useLayoutEffect(()=>{
        const today = new Date()
        // const day = today.getDay()
        const dateDay = today.getDate()
        const month = today.getMonth() + 1
        const year = today.getFullYear()

        const months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

        setCurrentDate({
            month: months[month],
            dateDay: dateDay,
            year: year.toString(),
        })

    }, [])

    const unCheckedTasks = dataRecieved.tasksUnchecked.map(task =>{
        return (
            <div key={task.taskId} className="task to-check">
                <div className="task-checkbox" onClick={()=>{
                    task.checkTask({
                        taskName: task.taskName,
                        taskType: task.taskType,
                        taskId: task.taskId
                    })
                }}>
                    <i className="fa fa-check"></i>
                </div>
                <div className="task-details">
                    <div className="task-name">
                        {task.taskName}
                    </div>
                    <div className="task-type">
                        <img src={`img/${task.taskType}.png`} alt="meeting" />
                        <span>{task.taskType}</span>
                    </div>
                </div>
                <div className="delete-task">
                    <div className="delete" onClick={()=>{
                            console.log(task.taskId)
                            dataRecieved.deleteTask({
                                taskName: task.taskName,
                                taskType: task.taskType,
                                taskId: task.taskId,
                            }, 'unchecked')
                        }}>
                        <i className="fa fa-trash" ></i>
                    </div>
                    <i className="fa fa-close"></i>
                </div>
            </div>
        )
    })

    const checkedTasks = dataRecieved.tasksChecked.map((task)=>{
        return (
            <div key={task.taskId} className="task checked">
                <div className="task-checkbox" onClick={()=>{
                    task.unCheckTask({
                        taskName: task.taskName,
                        taskType: task.taskType,
                        taskId: task.taskId
                    })
                }}>
                    <i className="fa fa-check"></i>
                </div>
                <div className="task-details">
                    <div className="task-name">
                        {task.taskName}
                    </div>
                    <div className="task-type">
                        <img src={`img/${task.taskType}.png`} alt="meeting" />
                        <span>{task.taskType}</span>
                    </div>
                </div>
                <div className="delete-task">
                    <div className="delete" onClick={()=>{
                            console.log(task.taskId)
                            dataRecieved.deleteTask({
                                taskName: task.taskName,
                                taskType: task.taskType,
                                taskId: task.taskId,
                            }, 'checked')
                        }}>
                        <i className="fa fa-trash" ></i>
                    </div>
                    <i className="fa fa-close"></i>
                </div>
            </div>
        )
    })


  return (
    <div className='dashboard'>
      <nav className="nav">
        <div className="content">
            <div className="about-user" style={{cursor: 'pointer'}} onClick={()=>{
                window.location.reload()
            }}>
                {/* <img src="img/user.png" alt="dp" />
                <span>{dataRecieved.user.name}</span> */}
                Trek<span>ToDo</span>_ <img src="img/goal.png" alt="trek-logo" />
                <i className="fa fa-heart"></i>
            </div>
            <div className="hamburger" onClick={props.showMenu}>
                <i className="fa fa-bars"></i>
            </div>
        </div>
      </nav>

      <header className="header">

        <div className="today-date">
            <h1>{currentDate.month} {currentDate.dateDay}, {currentDate.year}</h1>
        </div>

        <div className="tasks-data">
            <span>
                {dataRecieved.tasksUnchecked.length} incomplete, {dataRecieved.tasksChecked.length} complete
            </span>
        </div>

      </header>

      <div className='tasks-content'>
        {dataRecieved.tasksUnchecked.length >= 1 && <div className="incomplete">
            <h3>incomplete</h3>
            {unCheckedTasks}
        </div>}
        {dataRecieved.tasksChecked.length >= 1 && <div className="complete">
            <h3>complete</h3>
            {checkedTasks}
        </div>}
      </div>

      {dataRecieved.tasksChecked.length >= 1 && <button className='clear-tasks' onClick={dataRecieved.clearCompleted}>Clear Completed <i className="fa fa-circle-exclamation"></i></button>}

      {dataRecieved.tasksUnchecked.length + dataRecieved.tasksChecked.length < 1 &&<div className="no-tasks-here">
        No Tasks Yet <img src="img/sad.gif" alt="empty" />
      </div>}

      <div onClick={props.showNewTask} className='new-task' to={'/main/new-task'}>
        <div className="content">
            <i className="fa fa-plus"></i>
        </div>
      </div>

    </div>
  )
}

export default Dashboard
