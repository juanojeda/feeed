import React from "react"
import Link from "gatsby-link"
import * as PropTypes from "prop-types"

import { rhythm } from "../utils/typography"

const propTypes = {
  data: PropTypes.object.isRequired,
}

class NoteTemplate extends React.Component {
  render() {
    const note = this.props.data.contentfulNotes
    const { title, tags, content } = note
    const {  content: noteBody } = content
    return (
      <div dangerouslySetInnerHTML={{__html__: noteBody }} />
    )
  }
}

NoteTemplate.propTypes = propTypes

export default NoteTemplate

export const pageQuery = graphql`
  query noteQuery($id: String!) {
    contentfulNotes(id:{eq: $id}) {
      id,
      title,
      tags,
      content {
        content
      }
    }
  }
`