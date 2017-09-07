import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Link from 'gatsby-link';

import './_logo.scss';

class Logo extends Component {
  render() {
    return (
      <h1 className="logo">
        <div className="logo__background">
          <Link to="/">
            <div className="logo__logotype">
              Juan Ojeda
            </div>
          </Link>
        </div>
      </h1>
    );
  }
}

Logo.propTypes = {

};

export default Logo;