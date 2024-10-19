import React, { Component } from 'react'
import { PiPlaceholderDuotone } from "react-icons/pi";
import "./sidebaritem.css";

export class SideBarItem extends Component {
    currIcon = PiPlaceholderDuotone;
    currDistanceFromLeft = 1;
    currName = "sub-item";
    iconColor = "white";
    constructor(props) {
        super();
        this.state = {
          name: "React",
        };
        this.iconColor = props.iconColor == undefined? "white": props.iconColor;
        this.currName = props.name == undefined? "sub-item": props.name;
        this.currIcon = props.icon == undefined? PiPlaceholderDuotone: props.icon;
        this.currDistanceFromLeft = props.disp == undefined? 1: props.disp;
      }
    
    render() {
        return (
            <div className="top-comp">
                <div className="icon-f-displacement" style={{padding: `0px 0px 0px ${this.currDistanceFromLeft*15}px`, color: this.iconColor}}>
                    <this.currIcon  className='icon-f'/>
                </div>
                <span className='top-comp-text'>{this.currName}</span>
            </div>
            )
    }
}

export default SideBarItem