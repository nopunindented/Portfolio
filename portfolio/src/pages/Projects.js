import React, { useState } from "react";
import thriftaidphoto from "./projectimages/thriftaidphoto.png"

export default function ProjectPage() {
    const [isHovered, setIsHovered] = useState(false);
    const [showHello, setShowHello] = useState(false);

    const handleHover = () => {
        setIsHovered(true);
        setTimeout(() => {
            setShowHello(true);
        }, 200);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setShowHello(false);
    };

    return (
        <div className="projectspage">
            <div
                className="thriftaidproject"
                onMouseEnter={handleHover}
                onMouseLeave={handleMouseLeave}
            >
                <div className={`thriftaidbox ${isHovered ? 'hovered' : ''}`}/>
                {isHovered && <h1 className="check">ThriftAid is a platform that links homeless shelters with thrift. Thrift stores can donate 
                    excess stock by creating postings which homeless shelters may choose to accept.</h1>}
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