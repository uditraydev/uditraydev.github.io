import React from 'react'
import { useState } from 'react';
import "./Resume.css";

function Resume() {
  const [loading, setLoading] = useState(true);
  function loadingtemp(){
    return (
      <div className="overloader">
        <div className="loader"></div>
      </div>
    )
  }
  return (
    <div className='resume-overall'>
        { loading ? <>{loadingtemp()}</> : <></> } 
        <iframe style={{border:"0px"}}src="https://drive.google.com/file/d/1QTIUVy1iDN2Q8yCTM8KEzd0nGuB_Fc0V/preview" width="99%" height="700px" onLoad={() => setLoading(false)}/>
    </div>
  )
}

export default Resume;