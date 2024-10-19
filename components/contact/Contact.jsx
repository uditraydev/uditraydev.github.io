import React from 'react'
import "./Contact.css";
import Numberbar from '../numberbar/Numberbar';
import Terminal from '../terminal/Terminal';
function Contact(props) {
    const handleTerminalEnter = (value) => {
        props.TerminalValueChange(value);
      }
  return (
    <div>
        <div className='contact-overall'>
            <Numberbar lines={7}/>
            <div className="contact-function">
                <div style={{display:"flex", fontWeight:"inherit" , flexDirection:"column", justifyContent:"left"}}>
                    <span className='none'>
                        <span className='blue'>def</span><span className='yellow'> contact(</span>name: <span className="green">str</span><span className='yellow'>) </span>-&gt;<span className="blue">None</span>:
                    </span>
                    <span className='left-border'>&#9;email:<span className="green"> Email</span> = <span className='blue'><a className='contact-link' href="mailto:uditroydev@gmail.com">uditroydev@gmail.com</a></span> </span>
                    <span className='left-border'>&#9;linkedin:<span className="green"> LinkedIn</span> = <span className='blue'><a className='contact-link' href="https://www.linkedin.com/in/udit-ray" target='_blank'>linkedin.com/in/udit-ray</a></span> </span>
                    <span className='left-border'>&#9;github = <span className='blue'><a className='contact-link' href="https://github.com/lyer1" target='_blank'>github.com/lyer1</a></span> </span>
                    <span className='left-border'>&#9;leetcode = <span className='blue'><a className='contact-link' href="https://leetcode.com/u/lye0/" target='_blank'>leetcode.com/u/lye0/</a></span> </span>
                    <span className='left-border'>&#9;codechef = <span className='blue'><a className='contact-link' href="https://www.codechef.com/users/lyer0" target='_blank'>codechef.com/users/lyer0</a></span> </span>
                    <span className='left-border'>&#9;website = <span className='blue'><a className='contact-link' href="http://localhost:5173/" target='_blank'>udit.dev</a></span> </span>
                    
                </div>
            </div>
        </div>
    <Terminal className="terminal" OnEnterPressed={handleTerminalEnter}/>
    </div>
  )
}

export default Contact;