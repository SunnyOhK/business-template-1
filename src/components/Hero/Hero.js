import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import HeroVideo from '../../videos/hero-video.mp4';

function Hero() {
  const [showControls, setShowControls] = useState(false);

  const handleMouseOver = () => {
    setShowControls(true);
  }

  const handleMouseOut = () => {
    setShowControls(false);
  }

  return (
    <div
      style={{
        overflow: 'hidden',
        width: '99vw',
        height: '12em',
        position: 'relative'
      }}>
      <div
        style={{
          position: 'absolute',
          bottom: '0',
          left: '0',
          width: '100%',
          height: 'auto',
          transform: 'translateY(10%)', // Adjust this value to move the video up or down
        }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <ReactPlayer
          className='videoControls'
          url={HeroVideo}
          width='100vw'
          height='auto'
          controls={showControls}
          playing={true}
          loop={true}
          autoPlay={true}
          muted={true}
        />
      </div>
    </div>
  );
}

export default Hero;
