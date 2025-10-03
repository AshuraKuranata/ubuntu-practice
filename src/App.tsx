/* Practice set up of all the fundamentals learned in class */

// Set up RESTful API against local PostgreSQL server
// Create interactive front end
// Copy/Generate a similar view from one of the linked Canonical sites 
// Build multiple components on the front end
// Learn Vanilla usage 

import { useState, useEffect } from 'react'
import '../dist/styles/style.css';
import buttonstyles from '../dist/components/Button/Button.module.css';
import Navbar from './components/Navbar/Navbar';
import { Hero } from './components/Hero Main/HeroMain';
import Modal from './components/Modal/Modal';

function App() {
  const [themeMode, setThemeMode] = useState('is-paper');
  
  useEffect(() => {
    document.body.classList.remove("is-paper", "is-dark", "is-light");
    document.body.classList.add(themeMode);
  })

  const handleThemeMode = () => {
    if (themeMode === 'is-paper') {
      setThemeMode('is-dark')
    } else if (themeMode === 'is-dark') {
      setThemeMode('is-light')
    } else if (themeMode === 'is-light') {
      setThemeMode('is-paper')
    }
  }

  return (
    <>
      <Navbar />
      <br />
      <Modal />
      <br />
      <section className='p-section' style={{justifySelf: 'center', justifyItems: 'center'}}>
          <h3>Theme Section</h3>
          <p >Current mode is: {themeMode}</p>
          <button onClick={handleThemeMode}>Cycle Theme</button>
      </section>
      
      <Hero 
        title="Hero Component"
        subtitle="Creating a hero component"
        layout="25/75"
        signpostImage={<img src="https://assets.ubuntu.com/v1/fe20126d-RISC-V-logo.svg" alt="RISC-V logo" style={{ maxWidth: "200px" }} />}
        description={
          <p>
            Test Content that will populate over this space <br />
            Cool writing description that shouldn't run too long
          </p>
        }
        cta={
          <>
            <a href="#" className="p-button--positive">Learn more</a>
            <a href="#">Contact us ›</a>
          </>
        }
      />
      <br />
      <Hero 
        title="Second Hero using component"
        subtitle="Re-utilizing Hero Component"
        layout="50/50"
        signpostImage={<img src="https://assets.ubuntu.com/v1/fe20126d-RISC-V-logo.svg" alt="RISC-V logo" style={{ maxWidth: "200px" }} />}
        description={
          <p>
            Another example use of the same hero component with different content <br />
            Additional text that could explain what's going on here
          </p>
        }
        cta={
          <>
            <a href="#" className="p-button--positive">Click for more information</a>
            <a href="#">Contact us ›</a>
          </>
        }
      />
      <br />
      <Hero 
        title="Second Hero using component"
        subtitle="Re-utilizing Hero Component"
        layout="50/50"
        signpostImage={<img src="https://assets.ubuntu.com/v1/fe20126d-RISC-V-logo.svg" alt="RISC-V logo" style={{ maxWidth: "200px" }} />}
        description={
          <p>
            Another example use of the same hero component with different content <br />
            Additional text that could explain what's going on here
          </p>
        }
        cta={
          <>
            <a href="#" className="p-button--positive">Click for more information</a>
            <a href="#">Contact us ›</a>
          </>
        }
      />


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
