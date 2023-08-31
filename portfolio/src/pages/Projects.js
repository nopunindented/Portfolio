import React, { useState } from "react";
import thriftaidphoto from "./projectimages/thriftaidphoto.png"
import AnimateHeight from 'react-animate-height';

export default function ProjectPage() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleAnimationStart = () => {
    setIsAnimating(true);
  };

  const handleAnimationEnd = () => {
    setIsAnimating(false);
  };

  const handleMouseEnter = () => {
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
  };

  return (
    <div
      className="thriftaidbox"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <AnimateHeight
        duration={isAnimating ? 0 : 500}
        height={isExpanded ? 'auto' : 0}
        onAnimationStart={handleAnimationStart}
        onAnimationEnd={handleAnimationEnd}
      >
        <h1>
          hello, hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello
        </h1>
      </AnimateHeight>
    </div>
  );
};
