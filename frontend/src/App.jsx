import { useState } from 'react'
import Api from './Api'
import './App.css'

function App() {

  return (
      <div className="container">
          <header>
            <h1>MERN App</h1>
          </header>
        <main>
            <h2>Main Element</h2>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolorum eius itaque facilis facere reiciendis provident corrupti praesentium nesciunt amet numquam dicta aliquid aliquam, repellendus cum, quos voluptate iure maxime?</p>
          <hr />
          <Api></Api>
        </main>
        <footer>
            <p>MERN Stack Project</p>
        </footer>
      </div>
  )
}

export default App
