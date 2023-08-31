import React, { useState } from "react";
import thriftaidphoto from "./projectimages/thriftaidphoto.png"
import AnimateHeight from 'react-animate-height';

export default function ProjectPage() {
    const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpansion = () => {
    setIsExpanded(prevExpanded => !prevExpanded);
  };

  return (
    <div className="thriftaidbox">
      <AnimateHeight duration={500} height={isExpanded ? 'auto' : 0}>
        <h1>
          hello, hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello
        </h1>
      </AnimateHeight>
      <button onClick={toggleExpansion}>Toggle Box</button>
    </div>
  );
};