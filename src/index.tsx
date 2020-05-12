import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
import configureStore from './store';
import Loading from 'component/loading';
import App from './App';

(async () => {
  const { store, persistor } = await configureStore();

  ReactDOM.render(
    <StrictMode>
      <Provider store={store}>
        <PersistGate loading={<Loading />} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </StrictMode>,
    document.getElementById('app')
  );
})();
