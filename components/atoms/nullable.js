import React, { Component } from 'react';

class Nullable extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { test, children } = this.props;
    if (test) {
      return children;
    }
    return null;
  }
}

export default Nullable;