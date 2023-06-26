import { SupervisedUserCircleRounded } from '@mui/icons-material';
import React from 'react';
const image =
  'https://www.google.com/url?sa=i&url=https%3A%2F%2Ffreeicons.io%2Fessential-web-2%2Fuser-ciecle-round-account-person-icon-40275&psig=AOvVaw1PJHbIgN-rIMzZQDwj5Lcp&ust=1687827738423000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCIj3l73e3_8CFQAAAAAdAAAAABAD';

const Comment = ({ comment }) => {
  return (
    <div className="flex shadow-lg rounded-lg">
      <img className="h-10 w-10 mx-2 mt-1" src={image}></img>
      <div className="px-3">
        <p className="font-bold">
          Name: {comments?.snippet?.topLevelComment?.snippet?.authorDisplayName}
        </p>
        <p>
          Comment: {comments?.snippet?.topLevelComment?.snippet?.textDisplay}
        </p>
      </div>
    </div>
  );
};

export default Comment;
