import React from 'react';

import Link from 'gatsby-link';
import IntroBox from '../components/IntroBox/IntroBox';
import ContentBox from '../components/ContentBox/ContentBox';

import './_base.scss';
import '../sass/_typography.scss';

class Index extends React.Component {
  
  render() {
    return (
      <div className="cell auto grid-x grid-margin-x">
        <div className="cell small-12 large-6">
          <IntroBox
            className=''
            heading={`Hello, my name is Juan :)`} />
        </div>
        <div className="cell small-12 large-6">
          <ContentBox
            className=''>
            <div className='container'>
              <p>Lorem ipsum dolor <a href="#">sit amet</a>, consectetur adipisicing elit. Quisquam, eius placeat dolor sapiente quod nostrum? Autem aperiam in dolores ut, tempora cumque eum itaque. A iure illum maxime eaque libero.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt inventore sit ipsam iure in quis, laudantium, ullam labore, expedita quaerat magni officiis veniam ab distinctio dolor architecto modi obcaecati ducimus!</p>
            </div>
          </ContentBox>
        </div>
      </div>
    );
  }
}

export default Index;