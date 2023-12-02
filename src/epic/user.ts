import { Action } from 'redux';
import { ofType, StateObservable } from 'redux-observable';
import { mergeMap, map } from 'rxjs/operators';
import { getJSON } from 'helper/request';
import { userActionType, setUsers } from 'action/user';
import { Observable } from 'rxjs';

export const usersEpic = (action$: Observable<Action<any>>, _store$: StateObservable<any>, _deps: any) =>
  action$.pipe(
    ofType(userActionType.pending),
    mergeMap(() =>
      getJSON(`https://api.github.com/users?per_page=1`).pipe(map((response: unknown) => setUsers(response)))
    )
  );
