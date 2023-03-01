import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from './';

describe('Form', () => {
  it('Should render with onSubmit callback, which works correctly', async () => {
    const mockCallback = jest.fn();
    render(
      <Form onSubmit={mockCallback}>
        <input type="submit" />
      </Form>
    );
    await userEvent.click(screen.getByRole('button', { name: 'Submit' }));
    expect(mockCallback).toHaveBeenCalledTimes(1);
  });
  it('Should render with class equals form_mock', async () => {
    render(
      <Form className="mock" />
    );
    expect(screen.getByRole('form')).toHaveClass('form_mock');
  });
});
