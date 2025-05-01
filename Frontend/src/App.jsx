import React from 'react'
import Sidebar from './components/Sidebar';
import About from './components/About';
import Projects from './components/Projects';
import './App.css'

function App() {
  return (
    <>
      <div className="appContainer">
        <header className='sidebarContainer'>
        <Sidebar />
        </header>
        <main className="mainContent">
          <About />
          <Projects />
        </main>
      </div>
    </>
  )
}

export default App;
