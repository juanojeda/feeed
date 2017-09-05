import React from "react"
import Link from "gatsby-link"
import * as PropTypes from "prop-types"

import { rhythm } from "../utils/typography"

const propTypes = {
  data: PropTypes.object.isRequired,
}

class RecipeTemplate extends React.Component {
  render() {
    const recipe = this.props.data.contentfulRecipe
    console.log(recipe)
    const {
      productName: { productName },
      productDescription,
      price,
      image,
      brand,
      categories,
    } = recipe
    return (
      <div>
        Recipe {recipe.id}
      </div>
    )
  }
}

RecipeTemplate.propTypes = propTypes

export default RecipeTemplate

