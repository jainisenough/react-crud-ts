import { catchError } from 'rxjs/operators';
import { combineEpics, StateObservable } from 'redux-observable';
import { Action } from 'redux';
import { usersEpic } from './user';
import { Observable } from 'rxjs';

export default (action$: Observable<Action<any>>, store$: StateObservable<any>, deps: any) =>
  combineEpics(usersEpic)(action$, store$, deps).pipe(
    catchError((error, source) => {
      console.error(error);
      return source;
    })
  );
