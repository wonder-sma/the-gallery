import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { act, screen } from '@testing-library/react';
import { renderWithRedux } from 'helpers/renderWithRedux';
import { ImagesActionTypes } from 'store/images/types';
import { store } from 'store/';
import Card from './';

describe('Card', () => {
  it('Should render with UploadIndicator, which works correctly', async () => {
    const image = {
      id: '42',
      url: 'https://via.placeholder.com/100x100&text=image1',
      comment: 'Some mock image'
    };
    act(() => {
      store.dispatch({ type: ImagesActionTypes.SET_LOADING, payload: { '42': true } });
    });
    const { container } = renderWithRedux(
      <Card item={image} />
    );
    expect(container.getElementsByClassName('upload-indicator').length).toBe(1);
    act(() => {
      store.dispatch({ type: ImagesActionTypes.SET_LOADING, payload: { '42': false } });
    });
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'image with the description "Some mock image"');
  });
});
