/* global __PATH_PREFIX__ */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Halftone from '../Image/Halftone';

import './_intro-box.scss';
import '../../sass/_typography.scss';
import '../../pages/_base.scss';

class IntroBox extends Component {
  render() {

    const { heading, children, colours } = this.props;

    const themeStyles = {
      color: colours.colourFore,
      backgroundColor: colours.colourBg
    };

    return (
      <div className="intro-box" css={themeStyles}>
        <div className="grid-x grid-padding-x">
          <div className="cell small-9 medium-7 large-10">
            <Halftone
              css={{zIndex: -1}}
              {...colours}
              imgUrl={`${__PATH_PREFIX__}/images/profile.jpg`}
              opacity={0.75} />
              <div className="intro-box__body">
                <h1 className="heading--h1">{heading}</h1>
                {children}
              </div>
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