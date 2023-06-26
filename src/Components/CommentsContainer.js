import React from 'react';
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
  return (
    <div className="m-5 p-2">
      <h1 className="font-bold">Comments</h1>
      <CommentsLis data={commetnsData} />
    </div>
  );
};

export default CommentsContainer;
