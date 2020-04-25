import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component<{}, { hasError: boolean }> {
  static propTypes = {
    children: PropTypes.array.isRequired
  };
  constructor(props: {}) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(err: Error) {
    console.log(err);
    return { hasError: true };
  }

  componentDidCatch(err: Error, errInfo: any) {
    console.log(err, errInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
