import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ModalLayout from './';

describe('ModalLayout', () => {
  it('Should render with focus on a child element with class equals modal-layout__content', async () => {
    const { container } = render(
      <ModalLayout />
    );
    const modal = container.getElementsByClassName('modal-layout__content')[0];
    expect(modal).toHaveFocus();
  });
  it('Should render with onClick callback, which works correctly', async () => {
    const mockCallback = jest.fn(() => {});
    const { container } = render(
      <ModalLayout onClick={mockCallback} />
    );
    const modal = container.getElementsByClassName('modal-layout')[0];
    await userEvent.click(modal);
    expect(mockCallback).toHaveBeenCalledTimes(1);
  });
  it('Should render child element with class equals modal-layout__content_mock', async () => {
    const { container } = render(
      <ModalLayout className="mock" />
    );
    expect(container.getElementsByClassName('modal-layout__content_mock').length).toBe(1);
  });
});
