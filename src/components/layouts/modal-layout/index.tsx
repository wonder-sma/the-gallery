import React, { MouseEventHandler, useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';

const StyledModal = styled.div`
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: fixed;
  display: flex;
  padding: 10px;
  background: rgba(0, 0, 0, 0.5);

  .modal-layout__content {
    @media only screen and (min-width: 480px) {
      min-height: 200px;
      min-width: 400px;
    }

    max-height: 85%;
    max-width: 85%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
    padding: 10px;
    border-radius: 8px;
    background: white;
    outline: none;
  }

  .modal-layout__content_full-size {
    height: 85%;
    width: 85%;
  }
`;

type ModalProps = {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const ModalLayout: React.FC<ModalProps> = (props) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const onClick: MouseEventHandler<HTMLDivElement> = useCallback(e => {
    if (props.onClick && e.target instanceof HTMLElement && e.target.className.endsWith('modal-layout')) {
      props.onClick();
    }
  }, [props.onClick]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, [ref]);

  return (
    <StyledModal className="modal-layout" onClick={onClick}>
      <div
        ref={ref}
        tabIndex={-1}
        className={'modal-layout__content' + `${props.className ? ` modal-layout__content_${props.className}` : ''}`}
      >
        {props.children}
      </div>
    </StyledModal>
  );
};

export default ModalLayout;
