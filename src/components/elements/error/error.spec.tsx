import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Error from './';

describe('Error', () => {
  it('Should be displayed with the passed text value', async () => {
    render(
      <Error>Mock error</Error>
    );
    expect(screen.getByText('Mock error')).toBeInTheDocument();
  });
  it('Should render with class equals error_mock', async () => {
    const { container } = render(
      <Error className="mock" />
    );
    expect(container.getElementsByClassName('error_mock').length).toBe(1);
  });
});
