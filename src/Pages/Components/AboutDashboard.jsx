import React from 'react'

function AboutDashboard(props) {

  return (
    <div className='dashboard'>
      <nav className="nav">
        <div className="content">
            <div className="about-user" style={{cursor: 'pointer'}} onClick={()=>{
                window.location.reload()
            }}>
                {/* <img src="img/user.png" alt="dp" />
                <span>{dataRecieved.user.name}</span> */}
                Trek<span style={{display: 'none'}}>ToDo</span>_ <img src="img/goal.png" alt="trek-logo" />
                <i className="fa fa-heart"></i>
            </div>
            <div className="hamburger" onClick={props.showMenu}>
                <i className="fa fa-bars"></i>
            </div>
        </div>
      </nav>

      <div className="content">
        <h2>About Trek_</h2>
        <div className="gold"></div>
        <span>
            <p>
                Welcome to Trek - the web app that helps you document your journey to success! With Trek, you can easily keep track of your goals, dreams, prayers, and milestone achievements. We understand that the journey to success can be tough, but with Trek, we make it easier by providing a platform where you can easily document your progress and stay motivated.
            </p>

            <p>
                One of the unique features of Trek is that it uses device local storage to store all your data. This means that you don't have to worry about losing your data even when you're offline or when you close the app. With Trek, you can be sure that your data is safe and accessible at all times. Plus, local storage also helps make the app faster and more responsive.
            </p>

            <p>
                Trek is designed to be simple and easy to use. With our user-friendly  interface, you can easily add tags to each task to provide more context and make it easier to find them later.                
            </p>

            <p>
                At Trek, we believe that success is a journey, and we want to help you make that journey as smooth as possible. So whether you're a student, an entrepreneur, or just someone trying to achieve your goals, Trek is here to help you every step of the way. Start your journey with Trek today and let us help you document your success!
            </p>
        </span>
        <a href='https://wa.me/+2347035658853'>Connect with Developer <i className="fa fa-arrow-right"></i></a>
      </div>

    </div>
  )
}

export default AboutDashboard
