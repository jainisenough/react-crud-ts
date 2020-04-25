import Redux from 'redux';
import ReactRouterDom from 'react-router-dom';

/// <reference types="react-scripts" />

export namespace Redux {
  interface State {
    _persist: {
      version: number;
      rehydrated: boolean;
    };
  }

  interface PromiseState {
    isPending: boolean;
    isFulfilled: boolean;
    isRejected: boolean;
    data?: any;
  }

  interface Action extends Redux.Action {
    payload?: any;
  }
}

export namespace Route {
  interface RouteProps extends ReactRouterDom.RouteProps {
    private?: boolean;
  }
}
