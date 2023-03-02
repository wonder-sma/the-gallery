import React, { KeyboardEventHandler, useCallback } from 'react';
import styled from 'styled-components';

const StyledGallery = styled.div`
  max-width: 1024px;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  .gallery-layout__head {
    text-align: center;

    h1 {
      margin: 4px;
      font-size: 36px;
      line-height: 1.25em;
      font-family: "Trebuchet MS", sans-serif;
      color: #e83e8c;
      user-select: none;
    }
  }

  .gallery-layout__content {
    width: 100%;
  }
`;

type GalleryProps = {
  children?: React.ReactNode;
  head?: React.ReactNode;
  onEscape?: () => void;
}

const GalleryLayout: React.FC<GalleryProps> = (props) => {
  const onEscPress: KeyboardEventHandler<HTMLDivElement> = useCallback(e => {
    if (e.key === 'Escape' && props.onEscape) {
      e.preventDefault();
      props.onEscape();
    }
  }, [props.onEscape]);

  return (
    <StyledGallery className="gallery-layout" onKeyDown={onEscPress}>
      <div className="gallery-layout__head">
        {props.head}
      </div>
      <div className="gallery-layout__content">
        {props.children}
      </div>
    </StyledGallery>
  );
};

export default GalleryLayout;
