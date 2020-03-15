import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AnimatedImage from './components/AnimatedImage';
import CommentSection from "./components/CommentSection";
import Form from './components/Form';

const StyledApp = styled.div`
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  font-family: Arial, Helvetica, sans-serif;
`;

const App = () => {
  const [comments, setComments] = useState([]);

  const onSend = comment => {
    fetch("http://localhost:3001/comments", {
      method: "POST",
      body: JSON.stringify({
        name: comment.name,
        email: comment.email,
        comment: comment.comment
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then(response => response.json())
      .then(comment =>
        setComments([
          ...comments,
          comment
        ])
      );
  };

  useEffect(() => {
    let url = "http://localhost:3001/comments"
    window
      .fetch(url)
      .then(result => result.json())
      .then(data => setComments(data));
  }, []);

  return (
    <StyledApp id="app">
      <AnimatedImage />
      <Form onSend={onSend} />
      <CommentSection comments={comments} />
    </StyledApp>
  );
};

export default App;
