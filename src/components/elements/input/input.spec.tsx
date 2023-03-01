import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from './';

describe('Input', () => {
  it('Should be displayed with the passed text value', async () => {
    render(
      <Input value="Some mock text" />
    );
    expect(screen.getByRole('textbox')).toHaveAttribute('value', 'Some mock text');
  });
  it('Should render with the correct name and placeholder attributes', async () => {
    render(
      <Input name="mock" placeholder="Some mock text" />
    );
    expect(screen.getByRole('textbox')).toHaveAttribute('name', 'mock');
    expect(screen.getByRole('textbox')).toHaveAttribute('placeholder', 'Some mock text');
  });
  it('Should render with onChange callback, which works correctly', async () => {
    let returnValue = '';
    const mockCallback = jest.fn(value => (returnValue = value));
    render(
      <Input onChange={mockCallback} />
    );
    const textarea = screen.getByRole('textbox');
    await userEvent.type(textarea, 'Some mock text');
    expect(mockCallback).toHaveBeenCalledTimes('Some mock text'.length);
    expect(returnValue).toBe('Some mock text');
  });
  it('Should render with class equals input_mock', async () => {
    render(
      <Input className="mock" />
    );
    expect(screen.getByRole('textbox')).toHaveClass('input_mock');
  });
});
