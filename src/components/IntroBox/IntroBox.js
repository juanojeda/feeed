/* global __PATH_PREFIX__ */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Halftone from '../Image/Halftone';

import isUndefined from 'lodash/isUndefined';

import './_intro-box.scss';
import '../../sass/_typography.scss';
import '../../pages/_base.scss';

class IntroBox extends Component {

  getImageType(mode, imgOpts){
    
    const {imgUrl, imgTitle, imgHeight, imgWidth,colours} = imgOpts;

    switch(mode) {
      case 'halftone': {
        return (
          <Halftone
            css={{zIndex: -1}}
            {...colours}
            imgUrl={imgUrl}
            height={imgHeight}
            width={imgWidth}
            opacity={0.75}
          />
        );
      }
      case 'original': {
        return (
          <div className="image image--original">
            <img src={imgUrl} alt={imgTitle} />
          </div>
        );
      }

      default: {
        return null;
      }
    }
  }

  render() {

    const { heading, children, colours, imgUrl, imgHeight, imgWidth, mode } = this.props;

    const hasImg = !isUndefined(imgUrl);

    const themeStyles = {
      color: colours.colourFore,
      backgroundColor: colours.colourBg
    };

    return (
      <div className="intro-box grid-x grid-padding-x" css={themeStyles}>
        <div className="cell small-9 medium-7 large-10">
          {
            hasImg ?
              this.getImageType(mode, this.props) :
                null
          }
          <div className="intro-box__body">
            <h1 className="heading--h1">{heading}</h1>
            {children}
          </div>
        </div>
      </div>
    );
  }
}

IntroBox.propTypes = {
  colours: PropTypes.shape({
    colourBg: PropTypes.string.isRequired,
    colourFore: PropTypes.string.isRequired
  }),
  heading: PropTypes.string.isRequired,
  imgTitle: PropTypes.string,
  mode: PropTypes.oneOf(['original', 'halftone'])
};

IntroBox.defaultProps = {
  mode: 'original',
  colours: {
    colourBg: '#fff',
    colourFore: '#000'
  }
}

export default IntroBox;