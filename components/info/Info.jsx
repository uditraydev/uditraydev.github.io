import React from 'react'
import Numberbar from '../numberbar/Numberbar'
import "./Info.css";
import Terminal from '../terminal/Terminal';

function Info(props) {
    const handleTerminalEnter = (value) => {
        props.TerminalValueChange(value);
      }
  return (
    <div className='info-overall'>
        <Numberbar lines={7}/>
        <div className="info">
        <span className="green"> Terminal Commands</span>
        <br></br>
        <span className='left-border'>&#9;contact.py -&gt; <span className='blue'><a className='yellow'>contact</a></span> </span><br/>
        <span className='left-border'>&#9;about.js -&gt; <span className='blue'><a className='yellow'>about</a></span> </span><br/>
        <span className='left-border'>&#9;resume.cpp -&gt; <span className='blue'><a className='yellow'>resume</a></span> </span><br/>
        <span className='left-border'>&#9;projects.html -&gt; <span className='blue'><a className='yellow'>projects</a></span> </span><br/>
        <span className="left-border"><br/></span>
        <span className="left-border"><span className="blue" style={{fontSize:"large"}}>Type in the terminal below to try!</span></span>
        </div>
        <Terminal className="terminal" OnEnterPressed={handleTerminalEnter}/>

    </div>
  )
}

export default Info;
