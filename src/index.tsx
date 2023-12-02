import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@emotion/react';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
import theme from './theme';
import configureStore from './store';
import Loading from 'component/loading';
import App from './App';

(async () => {
  const { store, persistor } = await configureStore();

  ReactDOM.render(
    <StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <PersistGate loading={<Loading />} persistor={persistor}>
            <App />
          </PersistGate>
        </ThemeProvider>
      </Provider>
    </StrictMode>,
    document.getElementById('app')
  );
})();
