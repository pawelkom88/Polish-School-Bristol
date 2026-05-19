import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const VideoContainer = ({ srcMp4, srcWebm, poster }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    if (!hasPlayed) {
      setIsPlaying(true);
      setHasPlayed(true);
    }
  }, [hasPlayed]);

  return (
    <div className="relative w-full overflow-hidden rounded-lg shadow-lg" style={{ paddingTop: '177.78%' }}>
      {/* Poster Layer */}
      <div
        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
          isPlaying ? 'opacity-0' : 'opacity-100'
        }`}
        onClick={() => setIsPlaying(true)}
      >
        <Image
          src={poster}
          alt="Poster"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* Video Layer */}
      <video
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
          isPlaying ? 'opacity-100' : 'opacity-0'
        }`}
        autoPlay
        muted
        playsInline
        onEnded={() => setIsPlaying(false)}
      >
        <source src={srcWebm} type="video/webm" />
        <source src={srcMp4} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoContainer;
