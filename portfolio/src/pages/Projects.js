import React from "react";
import { useState } from "react";
import ThemeSong from "./themesong";
import thriftaidphoto from "./projectimages/thriftaidphoto.png"


export default function ProjectPage() {
    const [isHovered, setIsHovered] = useState(false);

    return(
        <div>
            <div
            className="thriftaidproject"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            >
            <div className={`thriftaidbox ${isHovered ? 'hovered' : ''}`} />
            <img src={thriftaidphoto} alt='project image' className="thriftaidphoto"/>
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