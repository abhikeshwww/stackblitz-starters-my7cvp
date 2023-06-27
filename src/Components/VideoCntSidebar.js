import React, { useEffect, useState } from 'react';
import RELTED_VIDEO_URL from '../Utils/Constants';
import { useSearchParams } from 'react-router-dom';
import RelatedVideoCard from './RelatedVideoCard';

const VideoCntSidebar = () => {
  useEffect(() => {
    getRelatedVideos();
  }, []);

  const [relatedVideos, setRelatedVideos] = useState();
  const [searchParams] = useSearchParams();
  const getRelatedVideos = async () => {
    const data = await fetch(RELTED_VIDEO_URL + searchParams.get('v'));
    const json = await data.json();
    console.log(json);
    setRelatedVideos(json.items);

    return (
      <div>
        {relatedVideos.map((videos) => (
          <RelatedVideoCard videos={videos} />
        ))}
      </div>
    );
  };
};

export default VideoCntSidebar;
