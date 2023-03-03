import React, { MouseEventHandler, useCallback, forwardRef, useImperativeHandle, useRef, Ref } from 'react';
import styled from 'styled-components';

const StyledImage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .img {
    max-width: 100%;
    max-height: 100%;
    display: block;
    border-radius: 8px;
    cursor: pointer;
    user-select: none;
    opacity: 1;
    transform: scale(1);
    transition: all 0.4s;

    @media only screen and (hover: hover) {
      &:not(.img_full-size):hover {
        opacity: 0.9;
        transform: scale(1.03);
        transition: all 0.2s;
      }
    }

    &:not(.img_full-size):active {
      opacity: 0.9;
      transform: scale(1.03);
      transition: all 0.2s;
    }

    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  .img_full-size {
    cursor: auto;
  }
`;

type ImageProps = {
  url: string;
  title?: string;
  onClick?: (url: string) => void;
  className?: string;
}

const Image = forwardRef((props: ImageProps, ref: Ref<HTMLImageElement | null>) => {
  const imageRef = useRef<HTMLImageElement | null>(null);

  useImperativeHandle(ref, () => imageRef.current, [ref, imageRef.current]);

  const clickHandler: MouseEventHandler<HTMLImageElement> = useCallback(e => {
    if (props.onClick) {
      props.onClick((e.target as HTMLImageElement).currentSrc);
    }
  }, []);

  return (
    <StyledImage className="image">
      <img
        ref={imageRef}
        src={props.url}
        alt={props.title ? `image with the description "${props.title}"` : 'image'}
        onClick={clickHandler}
        className={'img' + `${props.className ? ` img_${props.className}` : ''}`}
      />
    </StyledImage>
  );
});

export default Image;
