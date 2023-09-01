import React, { useEffect, useState } from "react";
import Slide from '@mui/material/Slide';
import gitlogo from './homeimages/gitcat.svg'
import {Link, useNavigate} from 'react-router-dom';
import Zoom from '@mui/material/Zoom'
import linkedinlogo from './homeimages/linkedin.svg'
import emailicon from './homeimages/emailicon.svg'
import ThemeSong from "./themesong";
import thriftaidphoto from "./projectimages/thriftaidphoto.png"
import AnimateHeight from 'react-animate-height';

export default function HomePage() {
    const navigate= useNavigate();
    const [isHovered, setIsHovered] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    

    const handleHover = () => {
      setIsHovered(true);
     };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    const handleAnimationStart = () => {
        setIsAnimating(true);
      };
    
      const handleAnimationEnd = () => {
        setIsAnimating(false);
      };

  

    return(
      <div>
        <div className="homebody" />
            <Slide 
            in={true}
            direction="down"
            timeout={400}>
            <div className="umerportfolio">Umer's Portfolio</div>
            </Slide>
            <Link to= 'projects'>
            <Slide 
            in={true}
            direction="down"
            timeout={400}>
            <div className="projectsheader">Projects</div>
            </Slide>
            </Link>
            <Link to= 'technologies'>
            <Slide 
            in={true}
            direction="down"
            timeout={400}>
            <div className="technologiesheader">Technologies</div>
            </Slide>
            </Link>
            <Link to= 'work'>
            <Slide 
            in={true}
            direction="down"
            timeout={400}>
            <div className="workexpheader">Work Experience</div>
            </Slide>
            </Link>
            <div class="growinglineone"/>
            <div class="growinglinetwo"/>
            <div class="growinglinethree"/>
            <div class="growinglinefour"/>
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
            <ThemeSong />
            <div className="projectheader">Projects</div>
            <div className="thriftaidproject" onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
                <div className={`thriftaidbox ${isHovered ? 'hovered' : ''}`}>
                </div>
                <div className="thriftaidboxcopy">
                <AnimateHeight
                duration={isAnimating ? 0 : 500}
                height={isHovered ? 'auto' : 0}
                onAnimationStart={handleAnimationStart}
                onAnimationEnd={handleAnimationEnd}
                >
                    <h1 className="check">ThriftAid is a platform that links homeless shelters with thrift. Thrift stores can donate 
                    excess stock by creating postings which homeless shelters may choose to accept.</h1>
                </AnimateHeight> 
                </div>
                <img src={thriftaidphoto} alt='project image' className="thriftaidphoto" />
                <div className="thriftaidboxsecondary" />
                <div className={`projectnamethrift ${isHovered ? 'hovered' : ''}`}>ThriftAid</div>
                <div className={`reactskillthrift ${isHovered ? 'hovered' : ''}`}>React</div>
                <div className={`nodeskillthrift ${isHovered ? 'hovered' : ''}`}>Node.js</div>
                <div className={`typescriptskillthrift ${isHovered ? 'hovered' : ''}`}>TypeScript</div>
                <div className={`mongodbskillthrift ${isHovered ? 'hovered' : ''}`}>MongoDB</div>
                <div className={`jwtauthskillthrift ${isHovered ? 'hovered' : ''}`}>JWT Authentication</div>
                <div className={`reduxskillthrift ${isHovered ? 'hovered' : ''}`}>Redux</div>
                <div className={`expressskillthrift ${isHovered ? 'hovered' : ''}`}>Express</div>
                <div className={`awsskillthrift ${isHovered ? 'hovered' : ''}`}>AWS</div>
            </div>
        </div>
    )
}