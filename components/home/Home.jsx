import React from 'react'
import { useState, useEffect } from 'react';
import SideBar from '../sidebar/sidebar';
import textfile from './lorem.txt';
import TitleBox from '../titlebox/TitleBox';
import IconBar from '../iconbar/IconBar';
import { FaRegWindowRestore, FaRegWindowMinimize } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { RiCloseLargeLine } from "react-icons/ri";
import vsc from "./vsc-icon.png";
import './Home.css'
import Resume from '../resume/Resume';
import About from '../about/About';
import Contact from '../contact/Contact';
import Projects from '../projects/Projects';
import Info from '../info/Info';

function Home() {
    const [lorem, setLorem] = useState("");
    const availableTabs = new Map([['resume', 'resume.cpp'], ["about", "about.js"], ["contact", "contact.py"], ["projects", "projects.htmls"]])
    const [pageState, updatePageSet] = useState(About);
    fetch(textfile)
        .then((response) => response.text())
        .then((textContent) => {
        setLorem(textContent);
    });
    const [currSelected, updateCurrSelected] = useState(0);
    const [currSelectedListItem, updateCurrSelectedList] = useState("about.js");
    var startingOpenList = new Set(["about.js"]);
    const [openList, updateOpenList] = useState(startingOpenList);
    const handleSelectedUpdate = (selected_icon) =>{
        console.log("selected_icon", selected_icon);
    }
    const handleTitleBoxClick = (selected_item) => {
        updateCurrSelectedList(selected_item);
    }
    const handleonSideBarItemClicked = (selected_baritem) => {
        console.log(selected_baritem);
        var openListTemp = new Set([...openList]);
        openListTemp.add(selected_baritem);
        updateOpenList(openListTemp);
        updateCurrSelectedList(selected_baritem);
    }
    const handleTerminalChange = (value) =>{
        console.log(value);
        if(availableTabs.has(value)){
            var tab_name = availableTabs.get(value);
            var openListTemp = new Set([...openList]);
            openListTemp.add(tab_name);
            updateOpenList(openListTemp);
            updateCurrSelectedList(tab_name);
        }
    }

    const taskitems = ["File", "Edit", "Selection", "View", "Go", "Run", "..."]
    const pageMap = new Map([["about.js", <About TerminalValueChange={handleTerminalChange}/>], ["resume.cpp", <Resume/>], ["contact.py", <Contact TerminalValueChange={handleTerminalChange}/>], ["projects.html", <Projects/>], ["info.json", <Info TerminalValueChange={handleTerminalChange}/>]])
    useEffect(() => { 
        updatePageSet(pageMap.get(currSelectedListItem));
        }, 
    [currSelectedListItem]);
    
    return (
    <div className="home">
        <div className="taskbar">
            <img src={vsc} style={{width:"18px", paddingLeft:"18px", paddingTop:"2px", marginRight:"15px"}}></img>
            <div className="taskbar-items">
                {taskitems.map((taskitemname) =>(
                  <button className='taskbar-item-button'>{taskitemname}</button>)
                    )}
            </div>
            <div className="top-right">
                <FaRegWindowMinimize size={14} color='white' style={{paddingLeft:"10px"}}/>
                <FaRegWindowRestore size={14} color='white' style={{paddingLeft:"10px"}}/>
                <RiCloseLargeLine size={14} color='white' style={{paddingLeft:"10px"}}/>
                
            </div>
        </div>
        <div className='home-overall'>
            <IconBar currSelected={currSelected} onCurrSelectedUpdate = {handleSelectedUpdate}/>
            <SideBar onSideBarItemClicked={handleonSideBarItemClicked}/>
            <div className="left-content">
                <div className="topbar">
                        {[...openList].map((openlist_item)=>(
                                (openlist_item==currSelectedListItem)?
                                    (
                                        <div>
                                            <TitleBox name={openlist_item} isSelected={true}/>
                                        </div>
                                    ):
                                    (
                                        <div onClick={() => handleTitleBoxClick(openlist_item)}>
                                            <TitleBox name={openlist_item} isSelected={false}/>
                                        </div>
                                    )
                                )
                            )
                        }
                </div>
                <div className="right-content">
                    {pageState}
                </div>
                {/* {lorem} */}
            </div>
        </div>
    </div>
  )
}

export default Home;