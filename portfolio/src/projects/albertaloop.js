import React, { useState } from "react";
import {Link} from 'react-router-dom';
import albertaloopphoto from "../pages/projectimages/albertaloopphoto.png"
import AnimateHeight from 'react-animate-height';
import linkicon from '../pages/projectimages/linkicon.png'


export default function AlbertaloopProject() {
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
            <div className="albertaloopproject" onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
                <div className={`albertaloopbox ${isHovered ? 'hovered' : ''}`}/>
                <div className={`albertaloopboxcopy ${isHovered ? 'hovered' : ''}`}>
                  <AnimateHeight
                    duration={isAnimating ? 0 : 550}
                    height={isHovered ? 'auto' : 0}
                    onAnimationStart={handleAnimationStart}
                    onAnimationEnd={handleAnimationEnd}
                  >
                    {isHovered && (
                      <div>
                        <h1 className="checktestalbertaloop">ThriftAid is a platform that links homeless shelters with thrift. Thrift stores can donate 
                        excess stock by creating postings which homeless shelters may choose to accept.</h1>
                        <div className="linkiconcirclealbertaloop">
                        <Link to="https://github.com/nopunindented/ThriftAid">
                          <img src={linkicon} alt="thiftlinkicon" className="linkiconalbertaloop"/>
                          </Link>
                          </div>
                      </div>
                    )}
                  </AnimateHeight>
                </div>
                <img src={albertaloopphoto} alt='project image' className="albertaloopphoto" />
                <div className="albertaloopboxsecondary" />
                <div className={`projectnamealbertaloop ${isHovered ? 'hovered' : ''}`}>Albertaloop</div>
                <div className={`reactskillalbertaloop ${isHovered ? 'hovered' : ''}`}>React</div>
                <div className={`nodeskillalbertaloop ${isHovered ? 'hovered' : ''}`}>Node.js</div>
                <div className={`typescriptskillalbertaloop ${isHovered ? 'hovered' : ''}`}>TypeScript</div>
                <div className={`mongodbskillalbertaloop ${isHovered ? 'hovered' : ''}`}>MongoDB</div>
                <div className={`jwtauthskillalbertaloop ${isHovered ? 'hovered' : ''}`}>JWT Auth</div>
                <div className={`reduxskillalbertaloop ${isHovered ? 'hovered' : ''}`}>Redux</div>
                <div className={`expressskillalbertaloop ${isHovered ? 'hovered' : ''}`}>Express</div>
                <div className={`awsskillalbertaloop ${isHovered ? 'hovered' : ''}`}>AWS</div>
            </div>
        </div>
    )
}