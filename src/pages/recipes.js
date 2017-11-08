import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getRandomColourTheme } from '../utils/khromaHelpers';

import IntroBox from '../components/IntroBox/IntroBox';
import ContentBox from '../components/ContentBox/ContentBox';
import RecipeCard from '../components/Recipes/RecipeCard';

import '../sass/_layout.scss';
import '../components/Recipes/_recipe-card.scss';

class RecipeList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      colours: {
        colourBg: '#000',
        colourFore: '#fff',
      }
    };
  }

  
  componentWillMount() {
    const themeColours = getRandomColourTheme();
    this.setState({
      colours: themeColours,
    });
  }
  
  
  render() {
    const { edges: recipes } = this.props.data.allMarkdownRemark;

    const { colours } = this.state;
    const { colourFore, colourBg } = colours;

    return (
      <div>
        <div className='allrecipes-container'>
          <IntroBox
            mode='original'
            heading='Recipes'
            imgTitle='a food'
            colours={colours}
            imgUrl='https://instagram.fmel1-1.fna.fbcdn.net/t51.2885-15/e35/23099371_183012405608931_6835520879141584896_n.jpg'
            imgHeight={1080}
            imgWidth={1080}
          />
          <ContentBox>
            <div className='container grid-x grid-margin-x'>
            {
                recipes.map((recipeData) => (
                  <RecipeCard key={recipeData.node.id} data={recipeData.node} />
                ))
              }
            </div>
          </ContentBox>

        </div>
      </div>
    );
  }
}

export default RecipeList;

export const pageQuery = graphql`
  query allRecipes($Type: String = "recipe") {
    allMarkdownRemark (
      filter: {
        frontmatter:{
          type:{
            eq: $Type
          }
        }
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            blurb
            date
            difficulty
            id
            tags
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;