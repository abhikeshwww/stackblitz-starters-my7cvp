import React from 'react';
import SideBar from './SideBar';
import { Outlet } from 'react-router-dom';
import VideoContainer from './VideoContainer';

<VideoContainer />;
export const Body = () => {
  return (
    <div className="flex">
      // <SideBar />
      <Outlet />
    </div>
  );
};
