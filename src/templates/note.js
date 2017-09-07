import React from "react"
import Link from "gatsby-link"
import * as PropTypes from "prop-types"

const propTypes = {
  data: PropTypes.object.isRequired,
}

class NoteTemplate extends React.Component {
  render() {
    const {markdownRemark: note} = this.props.data;
    const { title, tags, content } = note;
    const {  content: noteBody } = content;
    return (
      <div>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{__html__: noteBody }} />
        <div>
          {
            tags.forEach((tag) => (<span>{tag}</span>))
          }
        </div>
      </div>
    )
  }
}

NoteTemplate.propTypes = propTypes

export default NoteTemplate

// export const pageQuery = graphql`
//   query noteByPath($path: String!) {
//     markdownRemark(fields: { slug: {} })
//   }
// `