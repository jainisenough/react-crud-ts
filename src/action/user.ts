import { actionTypeCreator } from '../helper/action-helper';
import { post } from '../helper/request';

export const userActionType = actionTypeCreator('USER');
export const login = (email: string, password: string) =>
  post(`${process.env.REACT_APP_BASE_URL}/user/login`, { email, password }).toPromise();
export const getUsers = () => ({ type: userActionType.pending });
export const setUsers = (payload: unknown) => ({ type: userActionType.fulfilled, payload });
