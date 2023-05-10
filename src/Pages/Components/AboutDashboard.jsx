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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, nobis quos. Eum assumenda labore corporis aspernatur, ratione autem soluta in voluptate eos voluptatibus vel at architecto atque deserunt, molestias totam vitae quis obcaecati! Placeat atque quasi magnam, accusamus praesentium iusto quam eaque illo nemo facilis natus corporis libero rem labore nisi beatae reprehenderit temporibus earum repellat architecto distinctio aperiam accusantium. Quaerat quidem cum, rerum, sequi consequatur repellat dolores ipsa cupiditate incidunt iste totam! Saepe, libero dolor voluptatum tempora atque nulla culpa at beatae ex provident! Aut aspernatur ullam totam voluptates, illo repellendus optio repudiandae natus, rerum neque consequuntur molestias voluptate!
        </span>
        <a href='https://wa.me/+2347035658853'>Connect with Developer <i className="fa fa-arrow-right"></i></a>
      </div>

    </div>
  )
}

export default AboutDashboard
