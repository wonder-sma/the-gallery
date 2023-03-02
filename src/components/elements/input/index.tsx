import React, { ChangeEventHandler, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
  margin: 6px;
  padding: 6px;
  font-size: 16px;
  line-height: 1.25em;
  font-family: "Trebuchet MS", sans-serif;
  border: 1px solid darkgray;
  border-radius: 8px;
  box-shadow: 0 0 8px 2px rgb(0 0 0 / 10%);
  outline: none;
  transition: all 0.3s;

  @media only screen and (hover: hover) {
    &:hover {
      box-shadow: 0 0 8px 4px rgb(0 0 0 / 20%);
      transition: all 0.3s;
    }
  }

  &:focus {
    border: 1px solid gray;
    box-shadow: 0 0 8px 4px rgb(0 0 0 / 25%);
    transition: all 0.3s;
  }
`;

type InputProps = {
  className?: string;
  name?: string;
  value?: string | number;
  placeholder?: string;
  onChange?: (value: string) => void;
}

const Input: React.FC<InputProps> = (props) => {
  // Внутренний стейт по умолчанию с переданным value
  const [value, change] = useState(`${props.value || ''}`);

  // Обработчик изменений в поле
  const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(e => {
    change(e.target.value);
    if (props.onChange) {
      props.onChange(e.target.value);
    }
  }, [change, props.onChange]);

  // Обновление стейта, если передан новый value
  useEffect(() => {
    change(`${props.value || ''}`);
  }, [props.value]);

  return (
    <StyledInput
      className={'input' + `${props.className ? ` input_${props.className}` : ''}`}
      name={props.name || 'input'}
      value={value}
      type="text"
      placeholder={props.placeholder || ''}
      onChange={onChange}
    />
  );
};

export default Input;
