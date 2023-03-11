import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { act, screen } from '@testing-library/react';

import { ImagesActionTypes } from 'store/images/types';
import { store } from 'store/';
import { renderWithRedux } from '../../helpers/renderWithRedux';
import Card from './';
import { mockData } from 'mock/';

describe('Card', () => {
  it('Should render with UploadIndicator, which works correctly', async () => {
    const image = mockData[0];

    act(() => {
      store.dispatch({ type: ImagesActionTypes.SET_LOADING, payload: { [image.id]: true } });
    });

    const { container } = renderWithRedux(
      <Card item={image} />
    );

    expect(container.getElementsByClassName('upload-indicator').length).toBe(1);

    act(() => {
      store.dispatch({ type: ImagesActionTypes.SET_LOADING, payload: { [image.id]: false } });
    });

    expect(screen.getByRole('img')).toHaveAttribute('alt', `image with the description "${image.comment}"`);
  });
});
