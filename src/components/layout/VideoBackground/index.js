import React from 'react';
import { VideoContainer } from './styles';
import backgroundVideo from '../../../assets/videos/background.mp4';

const VideoBackground = () => {
  return (
    <VideoContainer>
      <video autoPlay muted loop playsInline>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </VideoContainer>
  );
};

export default VideoBackground;