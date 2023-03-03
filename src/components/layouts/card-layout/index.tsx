import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.li`
  width: 300px;
  height: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6px;
  list-style: none;
  border-radius: 8px;
  box-shadow: 0 0 20px 2px rgb(0 0 0 / 30%);

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
  image: React.ReactNode;
}

const CardLayout: React.FC<CardProps> = (props) => {

  return (
    <StyledCard className="card-layout">
      <div className="card-layout__image">{props.image}</div>
      {props.children}
    </StyledCard>
  );
};

export default CardLayout;
