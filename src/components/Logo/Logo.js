import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './_logo.scss';

class Logo extends Component {
  render() {
    return (
      <h1 className="logo">
        <div className="logo__background">
          <div className="logo__logotype">
            Juan Ojeda
          </div>
        </div>
      </h1>
    );
  }
}

Logo.propTypes = {

};

export default Logo;