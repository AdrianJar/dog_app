import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './core/App';
import reportWebVitals from './reportWebVitals';
import { Normalize } from 'styled-normalize';
import { GlobalStyles } from './common/GlobalStyled';
import { ThemeProvider } from 'styled-components';
import { theme } from './common/theme';
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <React.StrictMode>
        <GlobalStyles />
        <Normalize />
        <App />
      </React.StrictMode>
    </ThemeProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
