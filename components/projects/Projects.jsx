import React, { useState } from 'react'
import "./Projects.css"
import projects from './projects.json';

function ProjectsTab(props){
    return (
        <>
        <div className="proj">
            <div className="proj-tab">
                
                <div className="proj-tab-image">
                    <img className="proj-tab-image-img" src={props.imglink? props.imglink: "https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs42254-021-00305-6/MediaObjects/42254_2021_305_Figa_HTML.png"}></img>
                </div>
            </div>
            <div className="proj-description">
                    <div className="proj-tab-title">
                        {props.name}
                    </div>
                <span className="proj-stack">{props.stack}</span>
                <div className="proj-desc-list">
                    <ul>
                        {props.desc.map((item) => (
                            <li>{item}</li>
                        ))}
                    </ul>
                </div>
                
                <div className="links">
                {props.links?(
                    <>{props.links.map((item) => (
                        <a className='proj-link' href={item.link} target='_blank'>{item.text}</a>
                    ))}</>
                ):(<></>)}
                </div>
            </div>
        </div>
        </>
    )
}


function Projects() {

    console.log(projects);
    const f = ["Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium totam obcaecati eaque rem dolorem, alias nemo sapiente molestias pariatur corrupti? Voluptatem provident nihil esse perspiciatis nostrum ea unde accusantium cumque.", "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium totam obcaecati eaque rem dolorem, alias nemo sapiente molestias pariatur corrupti? Voluptatem provident nihil esse perspiciatis nostrum ea unde accusantium cumque."];
    return (
        <div>
            {projects.map((item) => (
                <ProjectsTab name={item.title} imglink={item.imglink} desc={item.desc} stack={item.stack} links={item.links}/>    
            ))}
        </div>
    )
}

export default Projects