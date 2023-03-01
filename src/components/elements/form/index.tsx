import React, { FormEvent, FormEventHandler, useCallback } from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

type FormProps = {
  children?: React.ReactNode;
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
  className?: string;
}

const Form: React.FC<FormProps> = (props) => {
  const onSubmit: FormEventHandler<HTMLFormElement> = useCallback(e => {
    e.preventDefault();
    if (props.onSubmit) {
      props.onSubmit(e);
    }
  }, [props.onSubmit]);

  return (
    <StyledForm
      className={'form' + `${props.className ? ` form_${props.className}` : ''}`}
      name={`${props.className ? ` form_${props.className}` : 'form'}`}
      onSubmit={onSubmit}
    >
      {props.children}
    </StyledForm>
  );
};

export default Form;
