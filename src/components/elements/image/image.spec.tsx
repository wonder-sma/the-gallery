import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Image from './';

describe('Image', () => {
  it('Should render with onClick callback, which works correctly', async () => {
    const mockCallback = jest.fn();
    render(
      <Image url="" onClick={mockCallback} />
    );
    await userEvent.click(screen.getByRole('img'));
    expect(mockCallback).toHaveBeenCalledTimes(1);
  });
  it('Should render with the correct src attribute', async () => {
    render(
      <Image url="https://mock-site.com" />
    );
    expect(screen.getByRole('img')).toHaveAttribute('src', 'https://mock-site.com');
  });
  it('Should render with the correct alt attribute', async () => {
    render(
      <Image url="" title="Some mock description" />
    );
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'image with the description "Some mock description"');
  });
  it('Should render with class equals img_mock', async () => {
    render(
      <Image className="mock" url="" />
    );
    expect(screen.getByRole('img')).toHaveClass('img_mock');
  });
});
