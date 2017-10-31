import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './_intro-box.scss';
import '../../sass/_typography.scss';
import '../../pages/_base.scss';

class IntroBox extends Component {
  render() {

    const { heading, children } = this.props;

    return (
      <div className="intro-box">
        <div className="grid-x grid-padding-x">
          <div className="cell small-9 medium-7 large-11">
            <h1 className="heading--h1">{heading}</h1>
            {children}
          </div>
        </div>
      </div>
    );
  }
}

IntroBox.propTypes = {
  heading: PropTypes.string.isRequired
};

export default IntroBox;