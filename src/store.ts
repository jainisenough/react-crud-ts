import { createStore, applyMiddleware, compose, StoreEnhancer } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'localforage';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import epic from './epic';
import reducer from './reducer';
import { Redux } from './react-app-env';

const epicMiddleware = createEpicMiddleware();
const enhancers = [applyMiddleware(epicMiddleware)];
const persistedReducer = persistReducer(
  {
    key: process.env.REACT_APP_STORE_KEY!,
    stateReconciler: hardSet,
    debug: process.env.NODE_ENV === 'development',
    storage
  },
  reducer
);

export default async (preloadedState?: Redux.State) => {
  let composedEnhacer: StoreEnhancer<unknown>;
  if (process.env.NODE_ENV === 'development') {
    const { composeWithDevTools } = await import('@redux-devtools/extension');
    composedEnhacer = composeWithDevTools(...enhancers);
  } else {
    composedEnhacer = compose(...enhancers);
  }
  const store = createStore(persistedReducer, preloadedState, composedEnhacer);
  const persistor = persistStore(store);

  epicMiddleware.run(epic);
  return { store, persistor };
};
