import React, { useState, useRef } from 'react';
import mytheme from './homeimages/mytheme.mp3';
import music from './homeimages/music.svg';
import Zoom from '@mui/material/Zoom'

function ClickIcon() {
  return <div key={Date.now()} className="circle pulse"></div>;
}

export default function ThemeSong() {
  const [playing, setPlaying] = useState(false);
  const [clicked, SetClicked]= useState(false);
  const audioRef = useRef(new Audio(mytheme));

  const handlePlayButtonClick = () => {
    const audio = audioRef.current;

    if (playing) {
      audio.pause();
    } else {
      audio.play();
    }

    setPlaying(!playing);
    SetClicked(true)
  };

  return (
    <div>
      <div onClick={handlePlayButtonClick}>
        {clicked && <ClickIcon />}
        <Zoom 
          in={true}
          timeout={1000}>
          <img src={music} className='musicicon' alt="hello" />
        </Zoom>
      </div>
    </div>
  );
}
