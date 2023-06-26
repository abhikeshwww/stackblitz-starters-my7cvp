import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg w-48 ">
      <ul>
        <Link to={'/'}>
          <li>Home</li>{' '}
        </Link>
        <li>Shorts</li>
        <li>SubSciptions</li>
        <li>Originals</li>
        <li>Youtube Music</li>
        <li>Playlist</li>
      </ul>
    </div>
  );
};
export default SideBar;
