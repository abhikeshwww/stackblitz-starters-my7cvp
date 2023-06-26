import React, { useEffect, useState } from 'react';
import { YOUTUBE_API } from '../Utils/Constants';
import VideoCard, { AdCardHigherOrderComponent } from './VideoCard';
import { Link } from 'react-router-dom';
import VideoCntSidebar from './VideoCntSidebar';
export const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    setVideos(json.items);
    console.log(videos);
  };

  return (
    <>
      <div className="flex flex-wrap">
        {videos[0] && <AdCardHigherOrderComponent info={videos[0]} />}
        {videos.map((video) => (
          <Link to={'watch?v=' + video.id}>
            <VideoCard key={video.id} info={video} />
          </Link>
        ))}
      </div>
    </>
  );
};
