import React, { useState } from 'react'
import "./Terminal.css"
import { FaPlus } from "react-icons/fa6";
import {VscEllipsis, VscChevronUp, VscClose, VscSplitHorizontal, VscTrash, VscTerminalPowershell } from "react-icons/vsc";

function Terminal(props) {
    const [helpOn, updateHelpOn] = useState(false);
    function enterPressed(event){
        if(event.key=="Enter"){
            if(event.target.value=="help"){
                updateHelpOn(true);
                event.target.value = "";
            }
            props.OnEnterPressed(event.target.value)
        };
    }
    const terminalTabs = ["PROBLEMS", "OUTPUT", "PORTS", "DEBUG CONSOLE", "TERMINAL"];
    return (
        <div className='terminal'>
            <div className="terminal-top">
                <div className="terminal-tabs">
                    {terminalTabs.map((val)=>(
                        (val=="TERMINAL")?(
                            <div className="terminal-tab-item" style={{color:"white", borderBottom:"solid", borderBottomWidth:"1px", borderBottomColor:"DodgerBlue"}}>
                                {val}
                            </div>
                        ):(
                            <div className="terminal-tab-item">
                                {val}
                            </div>
                        )
                    ))}
                </div>
                <div className="right-menu">
                    <VscTerminalPowershell/> <span style={{fontSize:"smallest"}}>node</span>
                    <FaPlus className="right-menu-item" />
                    <VscSplitHorizontal className="right-menu-item" />
                    <VscTrash className="right-menu-item" />
                    <VscEllipsis className="right-menu-item" />
                    <VscChevronUp className="right-menu-item" />
                    <VscClose className="right-menu-item" />
                </div>
            </div>
            <div className="terminal-bottom">
                <span className='terminal-line' style={{paddingLeft:"5px"}}>
                {!helpOn?(
                    
                    <>
                        <>
                            <span id="gray">11:25:52 pm</span> <span id="blue">[vite]</span> udit/components/portfolio.web (x5)  <span id="gray">type "help" for commands </span> 
                        </>
                    </>
                ):(
                    <>    
                    <span className="yellow">help ! commands -- &gt; </span>
                    <span className="blue">resume about contact</span>
                    </>
                )}
                </span>
                <input className='input-box' width={"190px"} onKeyDown={(e) => enterPressed(e)}></input>
            </div>
        </div>
    )
}

export default Terminal