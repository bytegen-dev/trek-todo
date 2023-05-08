import React from 'react'
import { useEffect } from 'react'

function NewTask(props) {

    useEffect(()=>{
        const goalAll = document.querySelectorAll(".goal")

        goalAll.forEach((goal)=>{
            goal.addEventListener('click', ()=>{
                goalAll.forEach((item)=>{
                    item.classList.remove("active")
                })
                goal.classList.add("active")
            })
        })
    })

  return (
    <div className={props.showingNewTask?'new-task-big show':'new-task-big'}>
      <div className="closing"></div>
      <div className="content">
        <form>
            <div className="task-type">
                <div className="goal active">
                    <span>🎯</span> Goal
                </div>
                <div className="goal">
                    <span>🙏</span> Religious
                </div>
                <div className="goal">
                    <span>💸</span> Finance
                </div>
                <div className="goal">
                    <span>🌛</span> Dream
                </div>
                <div className="goal">
                    <span>{"</>"}</span> Tech
                </div>
            </div>
            <div className='input-holder'>
                <label htmlFor="tasknametemp">Task name</label>
                <input required type="text" id='tasknametemp' maxLength={'50'} />
            </div>
            <div className='submit'>
                <button>cancel</button>
                <button>save <i className="fa fa-arrow-right"></i></button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default NewTask
