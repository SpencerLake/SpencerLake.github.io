import React from 'react'
import Landing from './Landing.js'
import About from './About.js'
import Projects from './Projects.js'
import Contact from './Contact.js'
import './App.css'

function App() {
  return (
    <div className="App">
      <Landing/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;