import React, { useEffect } from 'react';
import Gallery from '../container/gallery';
import { loadImageAction } from '../store/images/actions';
import { useActions } from '../hooks/useActions';

function App() {
  const { loadImageAction } = useActions();

  useEffect(() => {
    for (let i = 0; i < localStorage.length; ++i) {
      const key = localStorage.key(i);
      if (key !== null && key.length) {
        const value = JSON.parse(localStorage.getItem(key) as string);
        loadImageAction({ id: value.id, url: value.url, comment: value.comment || '' });
      }
    }
  }, []);

  return (
    <Gallery />
  );
}

export default App;
