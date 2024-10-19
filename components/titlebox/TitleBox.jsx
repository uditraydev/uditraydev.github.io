import React, { useState, useEffect } from 'react'
import "./Titlebox.css";
import { IoClose } from "react-icons/io5";

function TitleBox(props) {
  const [name, updateName] = useState(props.name);
  const [isSelected, updateIsSelected] = useState(props.isSelected);
  useEffect(() => {
    updateName(props.name);
    updateIsSelected(props.isSelected);
  }, [props.name, props.isSelected]);
  return (
    <div>
    {!isSelected?
      (
        <div className='overall' >
          <div className="name">{name}</div>
          <IoClose className='close-icon' />
        </div>
      ):
      (
        <div className='overall' style={{borderTopWidth: "2px", borderTopColor:"DodgerBlue", backgroundColor:" #282a36ff"}}>
          <div className="name">{name}</div>
          <IoClose className='close-icon' />
        </div>
      )
    }
    
    </div>
  )
}

export default TitleBox