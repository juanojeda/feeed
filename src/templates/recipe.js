import React from "react"
import * as PropTypes from "prop-types"

import RecipeIngredients, { Ingredient } from '../components/Recipes/RecipeIngredients';
import RecipeMethod from '../components/Recipes/RecipeMethod';

const propTypes = {
  data: PropTypes.object.isRequired,
}

class RecipeTemplate extends React.Component {
  render() {
    const recipeData = this.props.data.markdownRemark;
    const { html: method, frontmatter } = recipeData;
    const { blurb, difficulty, ingredients, tags, title } = frontmatter;

    return (
      <div className="recipe">
        <div className="container container--reading-width">
          <h2>{title}</h2>
          <div className="recipe__blurb">
            <p>{blurb}</p>
          </div>
        </div>
        <div className="l-flex">
          <div className="l-flex-item--2up">
            <RecipeIngredients>
              {
                ingredients.map((ingredient) => (<Ingredient {...ingredient}/>))
              }
            </RecipeIngredients>
          </div>
          <div className="l-flex-item--2up">
            <RecipeMethod method={method} />
          </div>
          
        </div>
      </div>
    )
  }
}

RecipeTemplate.propTypes = propTypes

export default RecipeTemplate

export const pageQuery = graphql`
  query recipeById($PostID: String!) {
    markdownRemark(
      frontmatter: {
        id: {
          eq: $PostID
        }
      }
    ) {
      html
      frontmatter {
        id
        title
        blurb
        difficulty
        tags
        ingredients {
          amount
          ingredient
          preparation
          unit
        }
      }
    }
  }
`;
