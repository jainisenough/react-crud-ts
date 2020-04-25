import { Redux } from '../react-app-env';
import { Action } from 'redux';
import { promiseState } from '../helper/action-helper';

const initialState: Redux.PromiseState = { ...promiseState(false, false, false, null) };
export default (state = initialState, action: Action): Redux.PromiseState => {
  switch (action.type) {
    case 'persist/PURGE': {
      return initialState;
    }
    default:
      return state;
  }
};
