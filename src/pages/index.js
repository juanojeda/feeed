import React, { Component } from 'react';

import classNames from 'classnames';

import Link from 'gatsby-link';

import { getRandomColourTheme } from '../utils/khromaHelpers';

import IntroBox from '../components/IntroBox/IntroBox';
import ContentBox from '../components/ContentBox/ContentBox';

import './_base.scss';
import '../sass/_typography.scss';

class Index extends Component {

  constructor(props) {
    super(props);

    this.state = {
      colours: {
        colourBg: '#000',
        colourFore: '#fff'
      }
    }
  }
  
  componentDidMount() {
    if (typeof window !== 'undefined'){
      const themeColours = getRandomColourTheme();
      this.setState({
        colours: themeColours,
      });
    }
  }
  
  render() {

    const { colours } = this.state;
    const { colourFore, colourBg } = colours;
    let bg = colourBg;
    let fore = colourFore;

    if (colours.type === 'bright') {
      bg = colourFore;
      fore = colourBg;
    }

    const containerStyles = {
      transitionDuration: '1s',
      transitionProperty: 'background, color',
      backgroundColor: bg,
      color: fore,
      overflow: 'auto',
      '@media (min-width: 1140px)': {
        overflow: 'hidden',
      },
    };

    const classes = classNames('cell auto grid-x grid-margin-x', {
      'm--inverse-content': colours.type !== 'bright'
    })

    return (
      <div css={containerStyles} className={classes}>
        <div className="cell small-12 large-6">
          <IntroBox
            mode='halftone'
            imgTitle='A profile picture of Juan'
            colours={colours}
            heading={`Hello, my name is Juan :)`}
            imgUrl={`${__PATH_PREFIX__}/images/profile-01.jpg`}
            imgHeight={613}
            imgWidth={920} />
        </div>
        <div className="cell small-12 large-6">
          <ContentBox
            className=''>
            <div className='container grid-x'>
              <div className="cell small-12 medium-6 large-8">
                <h2 className="heading--h2">These are some of my hobbies</h2>
                <Link to="/recipes" className="link link--block">Recipes &amp; food for thought</Link>
                <Link to="/notes" className="link link--block">Thoughts on design &amp; development</Link>

              </div>
            </div>
          </ContentBox>
        </div>
      </div>
    );
  }
}

export default Index;