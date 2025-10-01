/* Practice set up of all the fundamentals learned in class */

// Set up RESTful API against local PostgreSQL server
// Create interactive front end
// Copy/Generate a similar view from one of the linked Canonical sites 
// Build multiple components on the front end
// Learn Vanilla usage 


// import { useState } from 'react'
import '../dist/style.css';
import buttonstyles from '../dist/components/Button/Button.module.css';
import Navbar from './components/Navbar/Navbar';

function App() {

  return (
    <>
      <Navbar />
      <div>
        <h1>"INSERT NAME HERE" Company</h1>
        <p>The quick brown <code>fox&nbsp;jumps</code> over the lazy dog.</p>
        <pre>bolla.internal
    - lldp:descr:
      label: SysDescr
      Ubuntu 18.04.4 LTS Linux 4.15.0-106-generic #107-Ubuntu SMP Thu Jun 4 11:27:52 UTC 2020 x86_64
        </pre>
        <button className={buttonstyles.button}>Test Button</button>
      </div>
    </>
  )
}

export default App
