import React, { useCallback } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  min-width: 80px;
  margin: 4px;
  padding: 0.6em 1em;
  text-align: center;
  border: transparent;
  border-radius: 6px;
  font-size: 16px;
  line-height: 1.25em;
  font-family: "Trebuchet MS", sans-serif;
  color: #fff;
  background-color: #1677ff;
  cursor: pointer;
  user-select: none;
  touch-action: manipulation;
  transition: all 0.3s;

  @media only screen and (hover: hover) {
    &:hover {
      background-color: #4096ff;
      transition: all 0.3s;
    }
  }

  &:active {
    background-color: #065dd6;
    transition: all 0.3s;
  }
`;

type ButtonProps = {
  className?: string;
  value?: string;
  type?: 'button' | 'submit';
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = (props) => {
  const onClick = useCallback(() => {
    if (props.onClick) {
      props.onClick();
    }
  }, [props.onClick]);

  return (
    <StyledButton
      className={'button' + `${props.className ? ` button_${props.className}` : ''}`}
      type={props.type || 'button'}
      onClick={onClick}
    >
      {props.value || 'button'}
    </StyledButton>
  );
};

export default Button;
