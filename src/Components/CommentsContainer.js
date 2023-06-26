import React, { useState, useEffect } from 'react';

import { useSearchParams } from 'react-router-dom';
import Comment from './Comment';

const commetnsData = [
  {
    name: 'Abhikesh',
    text: 'lorem unasfsdfg ad ',
    replies: [],
  },
  {
    name: 'Abhikesh',
    text: 'lorem unasfsdfg ad ',
    replies: [],
  },
  {
    name: 'Abhikesh1',
    text: 'lorem unasfsdfg ad ',
    replies: [
      {
        name: 'Abhikesh12',
        text: 'lorem unasfsdfg ad ',
        replies: [],
      },
      {
        name: 'Abhikesh122',
        text: 'lorem unasfsdfg ad ',
        replies: [],
      },
      {
        name: 'Abhikesh11',
        text: 'lorem unasfsdfg ad ',
        replies: [
          {
            name: 'Abhikesh111',
            text: 'lorem unasfsdfg ad ',
            replies: [],
          },
        ],
      },
    ],
  },
];

const CommentsLis = ({ data }) => {
  return data.map((data, index) => (
    <div>
      <Comment key={index} data={data} />
      <div className="pl-5 border-l-2">
        <CommentsLis data={data.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  const [comments, setComments] = useState({});
  const COMMENTS_API =
    'https://www.googleapis.com/youtube/v3/commentThreads?key=AIzaSyC3oHmoZpZ7GWo6V5iZHgOJ6cQRecy4NtY&textFormat=plainText&part=snippet&videoId=';

  const [searchParams] = useSearchParams();
  useEffect(() => {
    getComments();
  }, []);

  const getComments = async () => {
    const data = await fetch(
      'https://www.googleapis.com/youtube/v3/commentThreads?key=AIzaSyC3oHmoZpZ7GWo6V5iZHgOJ6cQRecy4NtY&textFormat=plainText&part=snippet&videoId=' +
        searchParams.get('v')
    );
    const json = await data.json();

    setComments(json.items);
  };

  return (
    <div className="m-5 p-2">
      <h1 className="font-bold">Comments</h1>

      {comments?.map((comments) => (
        <Comment comment={comments} />
      ))}



    </div>
  );
};

export default CommentsContainer;
