import { Redux } from '../react-app-env';
export const actionTypeCreator = (actionName: string, custom?: {}, defaultAction?: boolean) => {
  let obj: any = {};

  if (custom) {
    Object.entries(custom).forEach(([k, v]: [string, unknown]) => {
      obj[k] = `${actionName}_${String(v).toUpperCase()}`;
    });
  }

  if (defaultAction === undefined || defaultAction) {
    obj.pending = `${actionName}_PENDING`;
    obj.fulfilled = `${actionName}_FULFILLED`;
    obj.rejected = `${actionName}_REJECTED`;
  }

  return obj;
};

export const promiseState = (
  isPending: boolean,
  isFulfilled: boolean,
  isRejected: boolean,
  data?: any
): Redux.PromiseState => {
  const obj: Redux.PromiseState = {
    isPending,
    isFulfilled,
    isRejected
  };

  if (data) {
    obj.data = data;
  }
  return obj;
};
