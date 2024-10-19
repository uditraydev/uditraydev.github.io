import React from 'react'
import "./Numberbar.css"
function Numberbar(props) {
  return (
    <div className='numberbar'>
        {[...Array(props.lines+1).keys()].map((i) =>(
            <div className="num">{i+1}</div>
        ))}
    </div>
  )
}

export default Numberbar