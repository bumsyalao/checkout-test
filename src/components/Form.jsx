import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledForm = styled.form`
  margin-top: 20px;
  margin-left: 20px;
  width: 50%;
  padding: 16px;
`;
const StyledContainer = styled.div`
  display: block;
  max-width: 500px;
  margin-right: auto;
  margin-left: auto;
`;
const StyledFormControl = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledInput = styled.input`
  height: 30px;
  margin: 5px;
  border-radius: 5px;
  border: solid thin #ccc;
  padding: 16px;
  box-sizing: border-box;
`;
const StyledSendButton = styled.button`
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 8px;
  margin: 5px;
  width: 30%;
  background-color: #007aff;
  box-sizing: border-box;
  cursor: pointer;
`;

const Form = ({ onSend }) => {
  const [newComment, setNewComment] = useState({
    name: '',
    email: '',
    comment: '',
  });

  const onChange = ({ target }) => {
    setNewComment({...newComment, [target.id]: target.value});
  };

  const onSubmit = async event => {
    event.preventDefault();
    onSend(newComment);
  };

  return (
    <StyledForm id="form" onSubmit={onSubmit} >
      <StyledContainer>
        <StyledFormControl>
          <StyledInput
            id="name"
            type="text"
            onChange={onChange}
            placeholder="Name"
            value={newComment.name}
            required
          />
          <StyledInput
            id="email"
            type="email"
            onChange={onChange}
            placeholder="Email"
            value={newComment.email}
            required
          />
          <StyledInput
            id="comment"
            type="text"
            onChange={onChange}
            placeholder="Write a comment..."
            value={newComment.comment}
            required
          />
          <StyledSendButton id="send-button" type="submit">
            Send
          </StyledSendButton>
        </StyledFormControl>
      </StyledContainer>
    </StyledForm>
  );
};

Form.propTypes = {
  onSend: PropTypes.func.isRequired
};

export default Form;
