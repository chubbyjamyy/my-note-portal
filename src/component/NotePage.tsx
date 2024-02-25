import React from 'react';
import { useLocation } from 'react-router-dom';
import { CommentPage } from './CommentPage';

const NotePage = () => {
  const location = useLocation();
  const note = location.state.note;

  return (
    <div>
      <h1>{note.title}</h1>
      <p>{note.body}</p>
      <CommentPage />
    </div>
  );
};

export default NotePage;