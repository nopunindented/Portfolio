import React from "react";
import Slide from '@mui/material/Slide';
import gitlogo from './homeimages/gitcat.svg'
import {Link} from 'react-router-dom';
import Zoom from '@mui/material/Zoom'
import linkedinlogo from './homeimages/linkedin.svg'
import emailicon from './homeimages/emailicon.svg'

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
                I'm a 3rd year undergraduate software engineering student
                at the University of Alberta.
                I enjoy creating applications that tackle social problems, help university students & clubs, or are just cool in general :)
            </p>
            </Slide>
            <Link to="https://github.com/nopunindented">
            <Zoom 
            in={true}
            timeout={1000}>
            <img src={gitlogo} className="gitlogo" alt="githublogo" />
            </Zoom>
            </Link>
            <Link to="https://www.linkedin.com/in/umer-fiaz/">
            <Zoom 
            in={true}
            timeout={1000}>
            <img src={linkedinlogo} className="linkedinlogo" alt="githublogo" />
            </Zoom>
            </Link>
            <Link onClick={(e) => {window.location.href ='mailto:mufiaz@ualberta.ca';}}>
            <Zoom 
            in={true}
            timeout={1000}>
            <img src={emailicon} className="emailicon" alt="githublogo" />
            </Zoom>
            </Link>
            
        </div>
    )
}