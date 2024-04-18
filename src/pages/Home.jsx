import React from "react";
import Sprints from "../components/Sprints";
import Process from "../components/Process";
import Flows from "../components/Flows";
import Heatmap from "../components/Heatmap";
import Wireframes from "../components/Wireframes";

import Cta from "../components/Cta";
import {IconContext} from "react-icons/lib";
import "../App.css";


function Home () {
    return (
        <>
        <IconContext.Provider value={{ color: "#F4F5F6"}}>
        <div className="home">
            <div className="jumbo">
                <h1>Concise Design Sprints</h1>
                <p>Requirements defined and delivered for Brand Stategies, Sites and Apps.</p>

                <div className="backlott">
                    <Sprints />
                   
                </div>
               
            </div>
            <div className="sectionL">
                <h2>Process and Systems</h2>
                <div className="pwrap">
                    <p>Defining problems, challenge assumptions, identifying, creating and testing solutions.  </p>
                </div> 
            </div>
                <Process /> 
         
            <div className="sectionR">
                <h2>Journeys and Flows</h2>
                <div className="pwrapR">
                    <p>Mapping User and System behaviour to better understand needs, goals and opportunities </p>
                </div> 
            </div>
                <Flows />
            <div className="sectionL">
                <h2>Testing and Analysis</h2>
                <div className="pwrap">
                    <p>Data driven decisions and evaluation.</p>
                </div>
                <Heatmap />
            </div>
            <div className="sectionR">
                <h2>Wireframes and Prototypes</h2>
                <div className="pwrapR">
                    <p>Achieving clarity of communication through visualisation and Interaction.</p>
                </div>
               </div>
               <Wireframes />
             
            
                 <div className="CTA">
                    <h5>Take a closer look at some case studies</h5>
                    <Cta name="Show Me"/>
                </div>

               

               
            
        </div>
        </IconContext.Provider>
</>
    );
}

export default Home;
