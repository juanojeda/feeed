import React from "react"
import Link from "gatsby-link"
import * as PropTypes from "prop-types"

import { rhythm } from "../utils/typography"

const propTypes = {
  data: PropTypes.object.isRequired,
}

class RecipeTemplate extends React.Component {
  render() {
    const recipe = this.props.data
    return (
      <div>
        Recipe {recipe}
      </div>
    )
  }
}

RecipeTemplate.propTypes = propTypes

export default RecipeTemplate

