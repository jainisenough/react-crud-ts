import { catchError } from 'rxjs/operators';
import { combineEpics, StateObservable, ActionsObservable } from 'redux-observable';
import { Action } from 'redux';
import { usersEpic } from './user';

export default (action$: ActionsObservable<Action>, store$: StateObservable<any>, deps: any) =>
  combineEpics(usersEpic)(action$, store$, deps).pipe(
    catchError((error, source) => {
      console.error(error);
      return source;
    })
  );
