import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './';

describe('Button', () => {
  it('Should render with onClick callback, which works correctly', async () => {
    const mockCallback = jest.fn();
    render(
      <Button onClick={mockCallback} type="button" />
    );
    await userEvent.click(screen.getByRole('button'));
    expect(mockCallback).toHaveBeenCalledTimes(1);
  });
  it('Should render with value equals OK and type equals button', async () => {
    render(
      <Button value="OK" />
    );
    expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
    expect(screen.getByRole('button')).toHaveTextContent('OK');
  });
  it('Should render with class equals button_mock', async () => {
    render(
      <Button className="mock" />
    );
    expect(screen.getByRole('button')).toHaveClass('button_mock');
  });
});
