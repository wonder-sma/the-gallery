import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Image from '../image';
import List from './';
import { mockData } from 'mock/';

describe('List', () => {
  it('Should render all items from the items property', async () => {
    render(
      <List
        items={mockData}
        renderItem={item =>
          <Image key={item.id} url={item.url} title={item.comment} onClick={() => {}} />}
      />
    );
    expect(screen.getAllByRole('img').length).toEqual(mockData.length);
  });
  it('Should render with class equals list_mock', async () => {
    render(
      <List
        items={[]}
        renderItem={() => <React.Fragment />}
        className="mock"
      />
    );
    expect(screen.getByRole('list')).toHaveClass('list_mock');
  });
});
