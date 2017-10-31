import React from "react"
import Link from "gatsby-link"
import * as PropTypes from "prop-types"

const propTypes = {
  data: PropTypes.object.isRequired,
}

class TagTemplate extends React.Component {
  render() {
    return (
      <div>tags</div>
    )
  }
}

TagTemplate.propTypes = propTypes

export default TagTemplate