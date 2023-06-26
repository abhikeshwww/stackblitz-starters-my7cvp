import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../Utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import VideoCntSidebar from './VideoCntSidebar';
import CommentsContainer from './CommentsContainer';
import ChannelDetails from './ChannelDetails';

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get('v'));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <>
      <div className="p-5 ">
        <iframe
          width="640"
          height="360"
          src={
            'https://www.youtube.com/embed/' +
            searchParams.get('v') +
            '?&autoplay=1'
          }
          title="MODIFYING MY NEW TOYOTA SUPRA INTO A DRIFT MACHINE"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          autoPlay="1"
        ></iframe>
        <ChannelDetails />
        <CommentsContainer />
      </div>

      <div>
        {' '}
        <VideoCntSidebar />
      </div>
    </>
  );
};

export default WatchPage;
