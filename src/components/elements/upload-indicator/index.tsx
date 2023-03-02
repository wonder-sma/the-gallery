import React from 'react';
import styled from 'styled-components';

const StyledUploadIndicator = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  .upload-indicator__image {
    width: 80%;
    height: 80%;
  }
`;

type UploadIndicatorProps = {
  color?: string;
  type?: string;
  dur?: string;
  className?: string;
}

const UploadIndicator: React.FC<UploadIndicatorProps> = (props) => {

  return (
    <StyledUploadIndicator
      className={'upload-indicator' + `${props.className ? ` upload-indicator_${props.className}` : ''}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className={'upload-indicator__image' + `${props.className ? ` upload-indicator__image_${props.className}` : ''}`}
      >
        <path
          fill={props.color || 'black'}
          d="M73 50c0-12.7-10.3-23-23-23S27 37.3 27 50m3.9 0c0-10.5 8.5-19.1 19.1-19.1S69.1 39.5 69.1 50"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type={props.type || 'rotate'}
            dur={props.dur || '1s'}
            from="0 50 50"
            to="360 50 50"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </StyledUploadIndicator>
  );
};

export default UploadIndicator;
