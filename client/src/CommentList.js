import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);

  const fetcHData = async () => {
    const response = await axios.get(
      `http://localhost:4001/posts/${postId}/comments`
    );
    setComments(response.data);
  };

  useEffect(() => {
    fetcHData();
  }, []);

  const renderedComments = comments.map((comment) => {
    return <li>{comment.content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
