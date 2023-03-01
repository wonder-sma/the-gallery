import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Comment from './';

describe('Comment', () => {
  it('Should be displayed with the passed text value', async () => {
    render(
      <Comment id="42" value="Some mock text" />
    );
    expect(screen.getByRole('textbox').textContent).toBe('Some mock text');
  });
  it('Should render with the correct maxLength attribute', async () => {
    render(
      <Comment id="42" maxLength={38} />
    );
    expect(screen.getByRole('textbox')).toHaveAttribute('maxLength', '38');
  });
  it('Should render with onBlur and onKeyDown callback, that work correctly', async () => {
    const mockCallback = jest.fn();
    render(
      <Comment id="42" onChange={mockCallback} />
    );
    await userEvent.click(screen.getByRole('textbox'));
    await userEvent.click(screen.getByRole('form'));
    await userEvent.click(screen.getByRole('textbox'));
    await userEvent.keyboard('[Enter]');
    expect(mockCallback).toHaveBeenCalledTimes(2);
  });
  it('Should render with onChange callback, which works correctly', async () => {
    let returnValue = {};
    const mockCallback = jest.fn((id, value) => (returnValue = { [id]: value }));
    render(
      <Comment id="42" onChange={mockCallback} />
    );
    const textarea = screen.getByRole('textbox');
    await userEvent.type(textarea, 'Some mock text');
    await userEvent.keyboard('[Enter]');
    expect(mockCallback).toHaveBeenCalledTimes(1);
    expect(Object.keys(returnValue)[0]).toBe('42');
    expect(Object.values(returnValue)[0]).toBe('Some mock text');
  });
  it('Should render with class equals comment_mock', async () => {
    render(
      <Comment id="42" className="mock" />
    );
    expect(screen.getByRole('textbox')).toHaveClass('comment_mock');
  });
});
