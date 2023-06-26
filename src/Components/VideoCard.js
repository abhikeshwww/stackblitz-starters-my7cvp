import React from 'react';

const VideoCard = ({ info }) => {
  console.log(info);
  const { snippet, statistics } = info;
  const { publishedAt, thumbnails, title, channelTitle } = snippet;
  const { likeCount, viewCount } = statistics;

  /**
   * Tumbnail
   * Channel Name
   * View Count   posted date
   *
   *
   *
   */

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

export const AdCardHigherOrderComponent = ({ info }) => {
  return (
    <div className="m-1 p-1 border border-red-600">
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;
