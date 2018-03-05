import React, { Component } from 'react';

import classNames from 'classnames';

import Link from 'gatsby-link';

import { getRandomColourTheme } from '../utils/khromaHelpers';

import ContactForm from '../components/Containers/Contact/ContactForm';
import ContactLinks from '../components/Containers/Contact/ContactLinks';

import IntroBox from '../components/IntroBox/IntroBox';
import ContentBox from '../components/ContentBox/ContentBox';

import './_base.scss';
import '../sass/_typography.scss';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colours: {
        colourBg: '#000',
        colourFore: '#fff'
      }
    };
  }

  componentWillMount() {
    const themeColours = getRandomColourTheme();
    this.setState({
      colours: themeColours
    });
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
      backgroundColor: fore,
      color: bg,
      overflow: 'auto',
      '@media (min-width: 1140px)': {
        overflow: 'hidden'
      }
    };

    const classes = classNames('cell auto grid-x grid-margin-x', {
      'm--inverse-content': colours.type === 'bright'
    });

    return (
      <div css={containerStyles} className={classes}>
        <div className="cell small-12 large-6">
          <IntroBox
            mode="halftone"
            imgTitle="A profile picture of Juan"
            colours={colours}
            heading={`Hey, how ya doin?`}
            imgUrl={`${__PATH_PREFIX__}/images/profile-02.jpg`}
            imgHeight={613}
            imgWidth={920}
          />
        </div>
        <div className="cell small-12 large-6">
          <ContentBox className="">
            <div className="container grid-x">
              <div className="cell small-12 medium-8 large-10">
                <ContactForm />
                <ContactLinks />
              </div>
            </div>
          </ContentBox>
        </div>
      </div>
    );
  }
}

export default Contact;
