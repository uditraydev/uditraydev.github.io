import React from 'react'
import "./About.css";
import Terminal from '../terminal/Terminal';
import { FaPython } from "react-icons/fa";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function SkillBob(props){
  if(props.color=="#5d5d5d"){
    return (
      <div className="skillbob">
        <button style={{borderRadius:20, padding:"3px 5px 3px 5px", border:"solid", borderWidth:"2px" ,color:"#b2b2b2", borderColor:props.color, backgroundColor:"transparent", fontSize:"18px"}}> {props.name}</button>
      </div>
    )
  }
  return (
    <div className="skillbob">
      <button style={{borderRadius:20, padding:"3px 5px 3px 5px", border:"solid", borderWidth:"2px" ,color:props.color, borderColor:props.color, backgroundColor:"transparent", fontSize:"15px"}}> {props.name}</button>
    </div>
  )
}

function About(props) {
  const colorList = ["dodgerblue", "blue", "red", "lime", "yellow", "aqua", "silver", "chartreuse", "goldenrod", "khaki", "magenta"]
  const skillsTree = new Map([ ["frontend", ["react", "angular", "CSS-HTML", "Js/Ts"] ],["backend", ["fastapi", "ASP.net", "Flask", "Django", "SQL"] ], ["others", ["pyQT", "arduino", "NumPy/Pandas", "PyGame", "SFML (C++)", "and more..."] ] ]);
  const handleTerminalEnter = (value) => {
    props.TerminalValueChange(value);
  }
  return (
    <div>
        <div className="heading">
          Udit Ray
        </div>
        <span className='sub-heading'>Software Engineer<span className='blink' style={{color:"aqua"}}>|</span></span>
        <span className='skills-heading' >Skills</span>
        <div className="text-and-terminal">
          <div className="texts">
            <div className="skills-container">
              <div className="tree">
                {
                  [...skillsTree.keys()].map((skill_heading) => (
                    <ul>
                      <details open> <summary><SkillBob name={skill_heading} color="#5d5d5d" style={{color:"white"}}/></summary>
                      {
                        skillsTree.get(skill_heading).map((item_heading) =>(
                          <li><SkillBob name={item_heading} color={colorList[getRandomInt(colorList.length)]}/></li>)
                        )
                      }
                      </details>
                    </ul>
                  ))
                }
              </div>
            </div>
          </div>
          <div className="terminal-overall">
          <Terminal OnEnterPressed={handleTerminalEnter}/>
          </div>
        </div>
    </div>
  )
}

export default About