import React from 'react';

const RelatedVideoCard = ({ info }) => {
  const { snippet } = info;
  const { title, thumbnails, channelTitle, publishTime } = snippet;

  return (
    <div className="shadow-lg p-2 m-2 w-72 ">
      <img
        className="rounded-lg"
        alt="thumbnail"
        src={thumbnails.medium.url}
      ></img>

      <ul>
        <li className="font-bold py-2"> {title} </li>
        <li> {viewCount} Views </li>
        <li> {channelTitle}</li>
      </ul>
    </div>
  );
};

export default RelatedVideoCard;
