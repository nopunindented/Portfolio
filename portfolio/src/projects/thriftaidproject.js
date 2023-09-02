import React, { useState } from "react";
import {Link} from 'react-router-dom';
import thriftaidphoto from "../pages/projectimages/thriftaidphoto.png"
import AnimateHeight from 'react-animate-height';
import linkicon from '../pages/projectimages/linkicon.png'


export default function ThriftAidProject() {
    const [isHovered, setIsHovered] = useState(false);
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
            <div className="projectheader">Projects</div>
            <div className="thriftaidproject" onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
                <div className={`thriftaidbox ${isHovered ? 'hovered' : ''}`}/>
                <div className={`thriftaidboxcopy ${isHovered ? 'hovered' : ''}`}>
                  <AnimateHeight
                    duration={isAnimating ? 0 : 550}
                    height={isHovered ? 'auto' : 0}
                    onAnimationStart={handleAnimationStart}
                    onAnimationEnd={handleAnimationEnd}
                  >
                    {isHovered && (
                      <div>
                        <h1 className="checktest">ThriftAid is a platform that links homeless shelters with thrift. Thrift stores can donate 
                        excess stock by creating postings which homeless shelters may choose to accept.</h1>
                        <div className="linkiconcirclethrift">
                        <Link to="https://github.com/nopunindented/ThriftAid">
                          <img src={linkicon} alt="thiftlinkicon" className="linkiconthrift"/>
                          </Link>
                          </div>
                      </div>
                    )}
                  </AnimateHeight>
                </div>
                <img src={thriftaidphoto} alt='project image' className="thriftaidphoto" />
                <div className="thriftaidboxsecondary" />
                <div className={`projectnamethrift ${isHovered ? 'hovered' : ''}`}>ThriftAid</div>
                <div className={`reactskillthrift ${isHovered ? 'hovered' : ''}`}>React</div>
                <div className={`nodeskillthrift ${isHovered ? 'hovered' : ''}`}>Node.js</div>
                <div className={`typescriptskillthrift ${isHovered ? 'hovered' : ''}`}>TypeScript</div>
                <div className={`mongodbskillthrift ${isHovered ? 'hovered' : ''}`}>MongoDB</div>
                <div className={`jwtauthskillthrift ${isHovered ? 'hovered' : ''}`}>JWT Auth</div>
                <div className={`reduxskillthrift ${isHovered ? 'hovered' : ''}`}>Redux</div>
                <div className={`expressskillthrift ${isHovered ? 'hovered' : ''}`}>Express</div>
                <div className={`awsskillthrift ${isHovered ? 'hovered' : ''}`}>AWS</div>
            </div>
        </div>
    )
}