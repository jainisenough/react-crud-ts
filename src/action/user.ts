import { actionTypeCreator } from '../helper/action-helper';
import { getJSON } from '../helper/request';

export const userActionType = actionTypeCreator('USER');
export const login = (username: string, password: string) =>
  getJSON('https://api.github.com/users?per_page=1').toPromise();
export const getUsers = () => ({ type: userActionType.pending });
export const setUsers = (payload: unknown) => ({ type: userActionType.fulfilled, payload });
