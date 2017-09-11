import React, { Component } from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';

import IntroBox from '../components/IntroBox/IntroBox';
import ContentBox from '../components/ContentBox/ContentBox';

import '../sass/_layout.scss';

class RecipeList extends Component {

  recipeListHTML(){
    const { edges: recipes } = this.props.data.allMarkdownRemark;
    return recipes.map((recipeData) => {
      const { node: recipe } = recipeData;
      const {
        title,
        blurb,
        date,
        difficulty,
        tags,
        id: postId } = recipe.frontmatter;

      return (
        <div className="recipe-card" key={postId}>
          <h2>{title}</h2>
          <p>published on { moment(date).format('dddd, MMMM Do YYYY') }</p>
          <p>difficulty: {difficulty} / 5</p>
          <p>{blurb}</p>
          <div>
            <ul>
              {
                tags.map((tag)=>{
                  return (
                    <li key={tag}>{tag}</li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <div className='allrecipes-container'>
          <div className='l-flex'>
            <div className="l-flex-item">
              <IntroBox
                className='l-flex-item'
                heading="Recipes">
                Some recipes
              </IntroBox>
            </div>
            <div className="l-flex-item">
              <ContentBox
                className='l-flex-item'>
                <div className='container'>
                  {
                    this.recipeListHTML()
                  }
                </div>
              </ContentBox>
            </div>

          </div>


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
          timeToRead
          frontmatter {
            blurb
            date
            difficulty
            id
            tags
            title
          }
        }
      }
    }
  }
`