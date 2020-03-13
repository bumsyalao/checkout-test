import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";


const StyledCommentSection = styled.div`
  padding: 10%;
  padding-top: 5%;
  overflow: auto;
`;

const StyledContainer = styled.div`
  // display: block;
  // max-width: 500px;
  // margin-right: auto;
  // margin-left: auto;
`;
const StyledHeader = styled.h2`
  margin-bottom: 20px;
`;

const StyledComment = styled.div`
  display: flex;
  flex-direction: row;
`;
const StyledAvatar = styled.img`
  margin: 20px;
  margin-left: 0px;
  width: 2rem;
  height: 2rem;
`;
const StyledCommentContent = styled.div`
  // margin-top: -20px;
`;
const StyledHeading = styled.div`
  display: flex;
  flex-direction: row;
`;
const StyledName = styled.h3`
  font-size: 20px;
  font-weight: lighter;
}
`;
const StyledEmail = styled.h5`
  padding-left: 10px;
  padding: 5px;
  font-size: 12px;
  font-weight: 100;
  color: #7a7a7a;
`;

const StyledContent = styled.div`
  font-size: 16px;
  line-height: 24px;
  margin-top: -12px;
`;


const CommentSection = ({ comments }) => {
  const elementRef = useRef();

  useEffect(() => {
    const { current } = elementRef;
    current.scrollTop = current.children[0].clientHeight;
  }, [comments]);

  return (
    <StyledCommentSection id="comment-section" ref={elementRef}>
      <StyledContainer>
        <StyledHeader>Latest Comments</StyledHeader>
        {comments.map(({ id, name, email, comment }) => (
          <StyledComment key={id}>
            <StyledAvatar src="https://api.adorable.io/avatars/41/abott@adorable.png"  alt="user avatar"/>
            <StyledCommentContent>
              <StyledHeading>
                <StyledName>
                  {name}
                </StyledName>
                <StyledEmail>
                  {email}
                </StyledEmail>
              </StyledHeading>
              <StyledContent>{comment}</StyledContent>
            </StyledCommentContent>
          </StyledComment>
        ))}
      </StyledContainer>
    </StyledCommentSection>
  );
};

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      comment: PropTypes.string.isRequired
    })
  ).isRequired
};

CommentSection.defaultProps = {
  comments: []
};

export default CommentSection;
