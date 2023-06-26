import React, { useEffect, useState } from 'react';
import Comment from './Comment';
import { useParams, useSearchParams } from 'react-router-dom';

const COMMENT_API =
  'https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=_VB39Jo8mAQ&key=AIzaSyC3oHmoZpZ7GWo6V5iZHgOJ6cQRecy4NtY&videoId=';

const CommentsContainer = () => {
  useEffect(() => {
    getComments();
  }, []);

  const [comments, setComments] = useState([]);
  const [searchParams] = useSearchParams();
  const getComments = async () => {
    const data = await fetch(COMMENT_API + searchParams.get('v'));
    const json = await data.json();
    setComments(json?.items);
  };

  return (
    <div className="m-5 p-2">
      <h1 className="font-bold">Comments</h1>
      {comments?.map((comments) => (
        <Comment comments={comments} />
      ))}
    </div>
  );
};

export default CommentsContainer;
