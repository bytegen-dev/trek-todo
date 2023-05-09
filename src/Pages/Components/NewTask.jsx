import React from 'react'
import { useContext } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import LoginContext from '../../Contexts/LoginContext'
import { useState } from 'react'

function NewTask(props) {
    const newTaskRef = useRef(null)

    const dataRecieved = useContext(LoginContext)

    function swipeActivated(event){
        const swipeStart = event.touches[0].clientY
        newTaskRef.current.classList.add("touched")
        newTaskRef.current.addEventListener('touchend', (eventx)=>{
            const swipeEnd = eventx.changedTouches[0].clientY
            
            if(swipeEnd > (swipeStart + 150)){
                props.hideNewTask()
                // console.log(swipeStart, swipeEnd)
            } else{
                // console.log(swipeStart, swipeEnd)
                newTaskRef.current.classList.remove("touched")
                return ()=>{
                    newTaskRef.current.removeEventListener('touchend')
                }
            }
        })

    }

    
    const [newTaskData, setNewTaskData] = useState({
        taskName: '',
        taskType: 'goal',
    })

    function handleChange(event){
        setNewTaskData((prev)=>{
            return ({
                ...prev,
                taskName: event.target.value
            })
        })
    }
    
    function addTask(event){
        event.preventDefault()
        dataRecieved.addTask(newTaskData)
        props.hideNewTask()
        setTimeout(()=>{
            setNewTaskData((prev)=>{
                return ({
                    ...prev,
                    taskName: '',
                })
            })
        }, 500)
    }
    
    function exit(){
        props.hideNewTask()
        setNewTaskData((prev)=>{
            return ({
                ...prev,
                taskName: '',
            })
        })
    }

    useEffect(()=>{
        const goalAll = document.querySelectorAll(".goal")

        goalAll.forEach((goal)=>{
            goal.addEventListener('click', ()=>{
                goalAll.forEach((item)=>{
                    item.classList.remove("active")
                })
                const type = goal.getAttribute("id")
                setNewTaskData((prev)=>{
                    return({
                        ...prev,
                        taskType: type
                    })
                })
                goal.classList.add("active")
            })
        })
    }, [])

  return (
    <div ref={newTaskRef} className={props.showingNewTask?'new-task-big show':'new-task-big'} onTouchStart={swipeActivated}>
      <div className="closing"></div>
      <div className="content">
        <form onSubmit={addTask}>
            <div className="task-type">
                <div className="goal active" id='goal'>
                    <span>🎯</span> Goal
                </div>
                <div className="goal" id='religious'>
                    <span>🙏</span> Religious
                </div>
                <div className="goal" id='finance'>
                    <span>💸</span> Finance
                </div>
                <div className="goal" id='dream'>
                    <span>🌛</span> Dream
                </div>
                <div className="goal" id='tech'>
                    <span>{"</>"}</span> Tech
                </div>
            </div>
            <div className='input-holder'>
                <label htmlFor="tasknametemp">Task name</label>
                <input value={newTaskData.taskName} onChange={handleChange} required type="text" id='tasknametemp' maxLength={'50'} />
            </div>
            <div className='submit'>
                <div className='exit' onClick={exit}>cancel</div>
                <button>save <i className="fa fa-arrow-right"></i></button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default NewTask
