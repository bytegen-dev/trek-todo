import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Main from './Pages/Main'
import About from './Pages/About'
import Settings from './Pages/Settings'
import './index.scss'

function App() {
  // const APPINITIAL = {
  //   darkTheme: false,
  // }

  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/main' element={<Main />}/>
        <Route path='/home' element={<Main />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/settings' element={<Settings />}/>
      </Routes>
    </div>
  )
}

export default App
