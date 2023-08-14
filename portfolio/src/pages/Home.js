import React from "react";
import Slide from '@mui/material/Slide';

export default function HomePage() {
    return(
        <div className="homebody">
            <Slide 
            in={true}
            direction="down"
            timeout={400}>
            <div className="umerportfolio">Umer's Portfolio</div>
            </Slide>
            <Slide 
            in={true}
            direction="down"
            timeout={400}>
            <div className="projectsheader">Projects</div>
            </Slide>
            <Slide 
            in={true}
            direction="down"
            timeout={400}>
            <div className="technologiesheader">Technologies</div>
            </Slide>
            <Slide 
            in={true}
            direction="down"
            timeout={400}>
            <div className="workexpheader">Work Experience</div>
            </Slide>
            <div class="growinglineone"/>
            <div class="growinglinetwo"/>
            <div class="growinglinethree"/>
            <div class="growinglinefour"/>
            <div class="growinglinefive"/>
            <Slide 
            in={true}
            direction="up"
            timeout={800}>
            <div className= 'hi'>Hi,</div>
            </Slide>
            <Slide 
            in={true}
            direction="up"
            timeout={700}>
            <div className= 'iamumer'>I'm Umer!</div>
            </Slide>
            <Slide 
            in={true}
            direction="up"
            timeout={700}>
            <p className= 'mydescription'>
                I'm a 3rd year software engineering student
                at the University of Alberta.
                I enjoy creating applications that tackle social problems, help university students & clubs, or are just cool in general :)
            </p>
            </Slide>
        </div>
    )
}