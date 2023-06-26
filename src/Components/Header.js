import React from 'react';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

function Header() {
  return (
    <div>
      <MenuRoundedIcon />
      <h1 className="text-4xl font-bold underline">Hello world!</h1>
      <img
        className="w-40"
        src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg"
      />
    </div>
  );
}

export default Header;
