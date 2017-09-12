import React, { Component } from 'react';
import PropTypes from 'prop-types';

import IntroBox from '../components/IntroBox/IntroBox';
import ContentBox from '../components/ContentBox/ContentBox';
import RecipeCard from '../components/Recipes/RecipeCard';

import '../sass/_layout.scss';
import '../components/Recipes/_recipe-card.scss';

class RecipeList extends Component {

  recipeListHTML(){
  }
  
  render() {
    const { edges: recipes } = this.props.data.allMarkdownRemark;
    return (
      <div>
        <div className='allrecipes-container'>
          <IntroBox heading="Recipes" />
          <ContentBox>
            <div className='container l-flex'>
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

RecipeList.propTypes = {

};

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