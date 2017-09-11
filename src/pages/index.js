import React from 'react';

import Link from 'gatsby-link';
import IntroBox from '../components/IntroBox/IntroBox';
import ContentBox from '../components/ContentBox/ContentBox';

import './_base.scss';
import '../sass/_layout.scss';

class Index extends React.Component {

  introBoxBodyHtml(){
    return (
      <p>
        Welcome to my corner of the internets! If you like things like <Link to='/'>food photography</Link> (and puns!), <Link to='/'>recipes</Link>, <Link to='/'>web development</Link>, and <Link to='/'>general banter</Link>, you've come to the right place.
      </p>
    )
  }
  
  render() {
    return (
      <div className='l-full-height'>
        <div className='l-flex'>
          <div className="l-flex-item--2up">
            <IntroBox
              className='l-flex-item'
              heading={`Hello, I'm Juan :)`}>
              {this.introBoxBodyHtml()}
            </IntroBox>
          </div>
          <div className="l-flex-item--2up">
            <ContentBox
              className='l-flex-item'>
              <div className='container'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, eius placeat dolor sapiente quod nostrum? Autem aperiam in dolores ut, tempora cumque eum itaque. A iure illum maxime eaque libero.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt inventore sit ipsam iure in quis, laudantium, ullam labore, expedita quaerat magni officiis veniam ab distinctio dolor architecto modi obcaecati ducimus!</p>
              </div>
            </ContentBox>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;