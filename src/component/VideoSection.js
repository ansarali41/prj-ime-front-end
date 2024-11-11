import React, { useState } from "react";

const VideoSection = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handlePlayVideo = () => {
    setShowVideo(true);
  };
  return (
    <div className='w-full max-w-[94rem] h-auto mx-auto mt-40 flex justify-between items-center '>
      <div className='w-full max-w-7xl h-[50rem] p-2 mx-auto rounded-[20px] shadow-customBoxShadow'>
        <div className='video-wrapper relative w-full h-full rounded-[12px]'>
          {!showVideo && (
            <img
              src='/Images/videoPoster.png' // Replace with your poster image URL
              alt='Custom Poster'
              className='absolute top-0 left-0 w-full h-full object-cover rounded-[12px] cursor-pointer'
              onClick={handlePlayVideo}
            />
          )}

          {showVideo && (
            <iframe
              className='w-full h-full rounded-[12px]'
              src='https://www.youtube.com/embed/J_EgfY6ifgE?si=dfYdFHKpL6FFtRie&autoplay=1'
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen></iframe>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
