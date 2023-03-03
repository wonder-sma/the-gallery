import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { renderWithRedux } from '../../helpers/renderWithRedux';
import Card from './';

describe('Image', () => {
  it('Should render with UploadIndicator, which works correctly', async () => {
    const image = {
      id: '42',
      url: 'https://via.placeholder.com/100x100&text=image1',
      comment: 'Some mock image'
    };
    const { container } = renderWithRedux(
      <Card item={image} />
    );
    expect(container.getElementsByClassName('upload-indicator').length).toBe(1);
  });
});
