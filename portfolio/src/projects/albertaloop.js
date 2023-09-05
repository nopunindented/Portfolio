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
                        <h1 className="checktestalbertaloop">Albertaloop is a version of the hyperloop concept, created at the University of Alberta.
                        It consists of a pod that is levitated inside of a vacuum tube.</h1>
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
                <div className={`reactskillalbertaloop ${isHovered ? 'hovered' : ''}`}>C++</div>
                <div className={`nodeskillalbertaloop ${isHovered ? 'hovered' : ''}`}>PyQt</div>
                <div className={`typescriptskillalbertaloop ${isHovered ? 'hovered' : ''}`}>Python</div>
                <div className={`jwtauthskillalbertaloop ${isHovered ? 'hovered' : ''}`}>UDP Protocol</div>
            </div>
        </div>
    )
}