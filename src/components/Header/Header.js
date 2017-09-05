import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Link from 'gatsby-link';
import Headroom from 'react-headroom';
import Logo from '../Logo/Logo';

import './_header.scss';

class Header extends Component {
  render() {
    return (
      <Headroom>
        <div className="header">
          <Logo />
          <nav style={{
            textAlign: 'right',
          }}>
            <Link to="/">Food</Link>
            <Link to="/">Tech</Link>
            <Link to="/">Find me</Link>
          </nav>
        </div>
      </Headroom>
    );
  }
}

Header.propTypes = {

};

export default Header;