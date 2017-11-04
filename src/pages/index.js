import React from 'react';

import { getRandomColourTheme } from '../utils/khromaHelpers';

import Link from 'gatsby-link';
import IntroBox from '../components/IntroBox/IntroBox';
import ContentBox from '../components/ContentBox/ContentBox';

import './_base.scss';
import '../sass/_typography.scss';

class Index extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      colours: {
        colourBg: '#000',
        colourFore: '#fff'
      }
    }
  }
  
  componentWillMount() {
    const themeColours = getRandomColourTheme();
    this.setState({
      colours: themeColours,
    });
  }
  
  render() {

    return (
      <div className="cell auto grid-x grid-margin-x">
        <div className="cell small-12 large-6">
          <IntroBox
            colours={this.state.colours}
            className=''
            heading={`Hello, my name is Juan :)`} />
        </div>
        <div className="cell small-12 large-6">
          <ContentBox
            className=''>
            <div className='container grid-x'>
              <div className="cell small-12 medium-6 large-8">
                <h2 className="heading--h2">These are some of my hobbies</h2>
                <a href="#" className="link link--block">Recipes &amp; food for thought</a>
                <a href="#" className="link link--block">Thoughts on design &amp; development</a>

              </div>
            </div>
          </ContentBox>
        </div>
      </div>
    );
  }
}

export default Index;