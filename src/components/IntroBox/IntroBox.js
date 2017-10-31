import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './_intro-box.scss';
import '../../sass/_typography.scss';

class IntroBox extends Component {
  render() {

    const { heading, body, children } = this.props;

    return (
      <div className="intro-box">
        <div className="container">
          <h1 className="heading--h1">{heading}</h1>
          {children}
        </div>
      </div>
    );
  }
}

IntroBox.propTypes = {
  heading: PropTypes.string.isRequired
};

export default IntroBox;