import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import GalleryLayout from './';

describe('ModalLayout', () => {
  it('Should render with onEscape callback, which works correctly', async () => {
    const mockCallback = jest.fn(() => {});
    const { container } = render(
      <GalleryLayout onEscape={mockCallback}>
        <div className="mockChild" tabIndex={-1}></div>
      </GalleryLayout>
    );
    const mockChild = container.getElementsByClassName('mockChild')[0];
    (mockChild as HTMLDivElement).focus();
    await userEvent.keyboard('[Space]');
    await userEvent.keyboard('[Escape]');
    expect(mockCallback).toHaveBeenCalledTimes(1);
  });
});
