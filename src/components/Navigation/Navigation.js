import React, { Component } from 'react';

import './_navigation.scss';

class Navigation extends Component {
  render() {
    return (
      <nav className='navigation'>
        {this.props.children}
      </nav>
    );
  }
}

export default Navigation;