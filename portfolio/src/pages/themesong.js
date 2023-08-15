import React from 'react';
import mytheme from './homeimages/mytheme.mp3';
import { useState, useRef } from 'react';

export default function ThemeSong() {
    const [playing, setPlaying] = useState(false);
    const audioRef = useRef(new Audio(mytheme));
  
    const handlePlayButtonClick = () => {
      const audio = audioRef.current;
  
      if (playing) {
        audio.pause();
      } else {
        audio.play();
      }
      setPlaying(!playing);
    };
  
    return (
      <div>
        <button onClick={handlePlayButtonClick} />
      </div>
    );
  }