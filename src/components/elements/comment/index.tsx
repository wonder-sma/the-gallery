import React, { FocusEventHandler, KeyboardEventHandler, useCallback } from 'react';
import styled from 'styled-components';
import Form from '../form';

const StyledComment = styled.div`
  width: 100%;
  display: flex;
  padding-top: 6px;

  .comment {
    width: 100%;
    text-align: center;
    padding: 8px;
    font-size: 16px;
    line-height: 1.25em;
    font-family: "Trebuchet MS", sans-serif;
    background: #e9ebeb;
    resize: none;
    overflow: hidden;
    border: none;
    border-radius: 8px;
    outline: none;
    transition: border 0.1s, box-shadow 0.2s;

    @media only screen and (hover: hover) {
      &:hover {
        border: 1px solid darkgray;
        border-radius: 8px;
        box-shadow: 0 0 8px 4px rgb(0 0 0 / 10%);
        transition: border 0.1s, box-shadow 0.2s;
      }
    }

    &:focus {
      border: 1px solid gray;
      border-radius: 8px;
      box-shadow: 0 0 8px 4px rgb(0 0 0 / 20%);
      transition: border 0.1s, box-shadow 0.2s;
    }

    &:not(:active, :focus, :hover)::placeholder {
      font-size: 48px;
      color: darkgray;
      transition: all 0.1s;
    }

    &::placeholder {
      color: transparent;
      transition: all 0.1s;
    }
  }
`;

type CommentProps = {
  value?: string;
  onChange?: (id: string, comment: string) => void;
  id: string;
  maxLength?: number;
  className?: string;
}

const Comment: React.FC<CommentProps> = (props) => {
  const onChange: FocusEventHandler<HTMLTextAreaElement> = useCallback(e => {
    if (props.onChange) {
      props.onChange(props.id, e.target.value);
    }
  }, [props.onChange, props.id]);

  const onEnterPress: KeyboardEventHandler<HTMLTextAreaElement> = useCallback(e => {
    if (props.onChange && e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      (e.target as HTMLTextAreaElement).blur();
    }
  }, [props.onChange, props.id]);

  return (
    <StyledComment>
      <Form className={props.className}>
        <textarea
          name="comment"
          id="comment"
          defaultValue={props.value}
          className={'comment' + `${props.className ? ` comment_${props.className}` : ''}`}
          maxLength={props.maxLength}
          onBlur={onChange}
          onKeyDown={onEnterPress}
          placeholder="+"
        />
      </Form>
    </StyledComment>
  );
};

export default Comment;
