import React from 'react'

function Dashboard(props) {
  return (
    <div className='dashboard'>
      <nav className="nav">
        <div className="content">
            <div className="about-user">
                <img src="img/user.png" alt="dp" />
                <span>Guest</span>
            </div>
            <div className="hamburger" onClick={props.showMenu}>
                <i className="fa fa-bars"></i>
            </div>
        </div>
      </nav>

      <header className="header">

        <div className="today-date">
            <h1>May 8, 2023</h1>
        </div>

        <div className="tasks-data">
            <span>
                6 incomplete, 3 complete
            </span>
        </div>

      </header>

      <div className='tasks-content'>
        <div className="incomplete">
            <h3>incomplete</h3>
            <div className="task to-check">
                <div className="task-checkbox">
                    <i className="fa fa-check"></i>
                </div>
                <div className="task-details">
                    <div className="task-name">
                        Interview Daniel Samson
                    </div>
                    <div className="task-type">
                        <img src="img/online-meeting.png" alt="meeting" />
                        <span>Meeting</span>
                    </div>
                </div>
                <div className="delete-task">
                    <i className="fa fa-trash"></i>
                    <i className="fa fa-close"></i>
                </div>
            </div>
            <div className="task to-check">
                <div className="task-checkbox">
                    <i className="fa fa-check"></i>
                </div>
                <div className="task-details">
                    <div className="task-name">
                        Purchase data today (2gb)
                    </div>
                    <div className="task-type">
                        <img src="img/finance.png" alt="meeting" />
                        <span>Finance</span>
                    </div>
                </div>
                <div className="delete-task">
                    <i className="fa fa-trash"></i>
                    <i className="fa fa-close"></i>
                </div>
            </div>
        </div>
        <div className="complete">
            <h3>complete</h3>
            <div className="task checked">
                <div className="task-checkbox">
                    <i className="fa fa-check"></i>
                </div>
                <div className="task-details">
                    <div className="task-name">
                        Quiet time Today
                    </div>
                    <div className="task-type">
                        <img src="img/prayer.png" alt="bible" />
                        <span>Religious</span>
                    </div>
                </div>
                <div className="delete-task">
                    <i className="fa fa-trash"></i>
                    <i className="fa fa-close"></i>
                </div>
            </div>
            <div className="task checked">
                <div className="task-checkbox">
                    <i className="fa fa-check"></i>
                </div>
                <div className="task-details">
                    <div className="task-name">
                        Call Williams
                    </div>
                    <div className="task-type">
                        <img src="img/love.png" alt="bible" />
                        <span>Love</span>
                    </div>
                </div>
                <div className="delete-task">
                    <i className="fa fa-trash"></i>
                    <i className="fa fa-close"></i>
                </div>
            </div>
        </div>
      </div>

      <button className='clear-tasks'>Clear Completed <i className="fa fa-circle-exclamation"></i></button>

      <div onClick={props.showNewTask} className='new-task' to={'/main/new-task'}>
        <i className="fa fa-plus"></i>
      </div>

    </div>
  )
}

export default Dashboard
