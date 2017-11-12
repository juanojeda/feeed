import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';

import './_image.scss';

class Halftone extends Component {
  render() {

    const { colourBg, colourFore, imgUrl, opacity, width, height } = this.props;

    return (
      <div className='image image--halftone'>
        <svg
          viewBox={`0 0 ${width} ${height}`}
          preserveAspectRatio='xMidYMin slice'
          className='image__bg'
          css={{
            backgroundColor: colourBg,
            opacity
          }}>
          <defs>
            <mask id='svgImage'>
              <image xlinkHref={imgUrl} />
            </mask>
          </defs>
          <rect className='image__fill' width='100%' height='100%' transform={`translate(${width}, ${height})`} fill={colourFore} mask='url(#svgImage)' />
        </svg>
      </div>
    );
  }
}

Halftone.propTypes = {
  colourBg: PropTypes.string.isRequired,
  colourFore: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  opacity: PropTypes.number
};

export default Halftone;