import React, { Component } from 'react'
import { useState } from 'react';
import "./SideBar.css";
import SideBarItem from '../sidebaritem/SideBarItem';
import { RiArrowDropDownLine } from "react-icons/ri";
import { SiCplusplus } from "react-icons/si";
import { IoIosMore } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaPython } from "react-icons/fa";
import { VscJson } from "react-icons/vsc";
import { FaHtml5 } from "react-icons/fa";





function SideBar(props){
  const [sidebaritemprops, setSidebarItems] = useState( [
    { 'name': "components", "icon": RiArrowDropDownLine, "disp": 2, "isArrow": true, "isClosed": false},
      { 'name': "about.js", "icon": IoLogoJavascript, "iconColor": "#519abaff", "disp": 3},
      { 'name': "projects.html", "icon": FaHtml5, "iconColor": "red", "disp": 3 },
      { 'name': "backend", "icon": RiArrowDropDownLine, "disp": 3, "isArrow": true, "isClosed": false},
        { 'name': "info.json", "icon": VscJson, "iconColor": "yellow", "disp": 4 },
        { 'name': "resume.cpp", "icon": SiCplusplus, "iconColor": "#519abaff", "disp": 4 },
        { 'name': "dependencies", "icon": RiArrowDropDownLine, "disp": 3, "isArrow": true, "isClosed": false},
          { 'name': "contact.py", "icon": FaPython, "iconColor": "yellow", "disp": 4 }
    ]
    )
  const itemtree = {0: [1, 2, 3, 6], 3: [4, 5], 6:[7]}
  const parents = [-1, 0, 0, 0, 0, 4, 4, 0, 7];

  function setHidden(i, isClicked=false){
    if(sidebaritemprops[i].isArrow==true){
      console.log("TEst");
      let sidebaritempropstemp = sidebaritemprops.slice();
      sidebaritempropstemp[i].isClosed = sidebaritempropstemp[i].isClosed? false: true;
      setSidebarItems(sidebaritempropstemp);
      if(itemtree[i]){
        for(let f of itemtree[i]){
          setHidden(f);
        }
        return;
      }
      return;
    }
    if(isClicked){
      props.onSideBarItemClicked(sidebaritemprops[i].name);
      return;}
    let sidebaritempropstemp = sidebaritemprops.slice();
    sidebaritempropstemp[i]['isHidden'] = sidebaritempropstemp[i]['isHidden']? false: true;
    setSidebarItems(sidebaritempropstemp);
  }
  
    return (
      <div className='sidebar-overall'>
        <div className="sidebar-container">
          <div className="explorer">
            <span className='explorer-comp-text'>EXPLORER</span>
            <IoIosMore  className='more-icon' size={"19px"}/>
          </div>
          <div className="top-comp">
            <RiArrowDropDownLine  className='arrow-icon' size={"32px"}/>
            <span clas1sName='top-comp-text'>VS-PORTFOLIO</span>
          </div>
          {/* <SideBarItem iconColor="aqua" icon={FaReact} name="react.tsx"/>
          <SideBarItem iconColor="yellow" icon={IoLogoJavascript} name="funtf.js"/>
          <SideBarItem icon={RiArrowDropDownLine} name="components"/>
          <SideBarItem iconColor="#519abaff" icon={FaPython} name="testing.py" disp ={2} /> */}

          {sidebaritemprops.map((curr_prop, i) => (
            <div>
              {curr_prop.isHidden?(
                <></>
              ) :
              (
              <div onClick={() => setHidden(i, true)}>
                <SideBarItem {...curr_prop}/>
              </div>)
              
            }
            </div>
          ))}


        </div>
      </div>
    )
  }

export default SideBar;