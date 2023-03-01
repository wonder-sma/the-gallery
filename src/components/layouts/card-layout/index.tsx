import React from 'react';
import styled from 'styled-components';
import Comment from './../../elements/comment';

const StyledCard = styled.li`
  width: 300px;
  height: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6px;
  list-style: none;
  border: 2px solid white;
  border-radius: 8px;
  box-shadow: 0 0 20px rgb(0 0 0 / 60%);

  .card-layout__image {
    width: 280px;
    height: 280px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

type CardProps = {
  children?: React.ReactNode;
  comment?: string;
  onChange?: (id: string, comment: string) => void;
  id: string;
}

const CardLayout: React.FC<CardProps> = (props) => {

  return (
    <StyledCard className="card-layout">
      <div className="card-layout__image">
        {props.children}
      </div>
      <Comment
        value={props.comment}
        onChange={props.onChange}
        id={props.id}
        maxLength={38}
        className="card-layout-comment"
      />
    </StyledCard>
  );
};

export default CardLayout;
