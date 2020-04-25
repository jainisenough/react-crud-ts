import { combineReducers, Reducer, Action } from 'redux';
import root from './root';
import user from './user';

export default combineReducers({ root, user }) as Reducer<unknown, Action<any>>;
