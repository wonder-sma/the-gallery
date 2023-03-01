import React from 'react';
import styled from 'styled-components';
import { Image } from '../../../store/images/types';

const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 8px 8px;
  gap: 8px;
`;

type ListProps<T> = {
  items?: Array<T>;
  renderItem: (item: T) => React.ReactNode;
  className?: string;
}

const List: React.FC<ListProps<Image>> = ({ items = [], renderItem, className }) => {

  return (
    <StyledList className={'list' + `${className ? ` list_${className}` : ''}`}>
      {items.map(item => renderItem(item))}
    </StyledList>
  );
};

export default List;
