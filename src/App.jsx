import React from 'react'
import Intro from './Intro'
import Nav from './Nav'
import About from './About'
import Project  from './Project'
import Contact from './Contact'
const App = () => {
  return (
    <div>
       <Nav></Nav>
      <div id='Home'>
        <Intro></Intro>
      </div>
       
    <div id='About'>
       <About></About>
    </div>

    <div id='project'>
      <Project></Project>
    </div>
    <div id='Contact'> 
     <Contact> </Contact>
    </div>
    </div>
  )
}

export default App