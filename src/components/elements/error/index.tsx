import React from 'react';
import styled from 'styled-components';

const StyledError = styled.div`
  text-align: center;
  font-size: 16px;
  line-height: 1.25em;
  font-family: "Trebuchet MS", sans-serif;
  color: red;
`;

type ErrorProps = {
  children?: string;
  className?: string;
}

const Error: React.FC<ErrorProps> = (props) => {

  return (
    <StyledError className={'error' + `${props.className ? ` error_${props.className}` : ''}`}>
      {props.children}
    </StyledError>
  );
};

export default Error;
