import React from "react"
import "./App.css"
import todaysVibe from "../todaysVibe.png"
import vainClimberTracker from "../vainClimberTracker.png"

export default function Projects() {
    return (
        <div className="page">
            <h2 className="section-title">PROJECTS</h2>
            <div className="project-holder">
                <h2 className="secondary-title">Today's Vibe</h2>
                <div >
                    <img src={todaysVibe} alt='project' className='proj-pic'></img>
                </div>
                <div className="biography">
                    <p className="descript-text">
                        Web application to create activities 
                        that will display an open/closed indicator, and be linked to a real 
                        life location, which is viewable by a map 
                        <a id="demo-link" target="_blank" rel="noopener" href="https://youtu.be/jtl2Cjk7gYE"> Click here </a>
                         to see a 
                        <a id="demo-link" target="_blank" rel="noreffer" href="https://youtu.be/jtl2Cjk7gYE"> demo</a>
                    </p>
                </div>
            </div>
            <div className="project-holder">
                <h2 className="secondary-title">Vain Climber Tracker</h2>
                <div >
                    <img src={vainClimberTracker} alt='Picture of project' className='proj-pic'></img>
                </div>
                <div className="biography">
                    <p className="descript-text"> 
                        A basic application that allows a climber to keep track of
                        climbs they have accomplished and want to remember. 
                        <a id="demo-link" target="_blank" href="https://youtu.be/LocMD9GrSfE">Click here </a> 
                        to see a <a id="demo-link" target="_blank" href="https://youtu.be/LocMD9GrSfE">demo</a>
                    </p>
                </div>
            </div>
            <div className="project-holder">
                <h2 className="secondary-title">Population Info Retriever</h2>
                <div >
                    <img src={pop1} alt='Picture of project' className='proj-pic'></img>
                </div>
                <div className="biography">
                    <p className="descript-text"> 
                        A basic application that retrieves information from external API 
                        to allow user to see populations each year and each state's population 
                        that year. 
                    </p>
                </div>
            </div>
        </div>
    )
}