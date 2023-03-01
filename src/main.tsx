import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import App from './app';
import { store } from './store';

const Global = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  body {
    background: #e9ebeb;
  }
`;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <Global />
    <App />
  </Provider>
);
