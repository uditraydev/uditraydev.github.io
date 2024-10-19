import React, { useEffect, useState } from 'react'
import "./Iconbar.css"
import { VscFiles, VscGithubAlt, VscSourceControl} from "react-icons/vsc";

function IconBar(props) {
    const iconList = [[VscFiles, 0], [VscGithubAlt, 1], [VscSourceControl, 2]];
    const [currSelected, updateCurrSelected] = useState(props.currSelected);
    useEffect(()=>{
        updateCurrSelected(props.currSelected);
    }, [props.currSelected]);
    const handleClick = (clicked_icon) => {
        updateCurrSelected(clicked_icon);
        props.onCurrSelectedUpdate(clicked_icon); 
    }
  return (
    <div className='bar'>
        {iconList.map((fitem)=>(
                (fitem[1]==currSelected)?
                    (
                        <div onClick={()=> handleClick(fitem[1])}>
                            {fitem[0]({size: 35, className: "icon-bar-icon", style:{borderLeft:"solid", borderLeftColor:"aqua"} })}
                        </div>
                    ):
                    (
                        <div onClick={()=> handleClick(fitem[1])}>
                            {fitem[0]({size: 32, className: "icon-bar-icon"})}
                        </div>
                    )
                )
            )
        }
    </div>
  )
}

export default IconBar