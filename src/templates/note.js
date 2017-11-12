import React from "react"
import Link from "gatsby-link"
import * as PropTypes from "prop-types"

const propTypes = {
  data: PropTypes.object.isRequired,
}

class NoteTemplate extends React.Component {
  render() {
    const {markdownRemark: note} = this.props.data;
    const { html, frontmatter } = note;
    const { date, id, tags, title } = frontmatter;
    return (
      <div>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{__html: html }} />
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

export const pageQuery = graphql`
  query noteById($PostID: String!) {
    markdownRemark(
      frontmatter: {
        id: {
          eq: $PostID
        }
      }
    ) {
      html
      frontmatter {
        title
        id
        tags
        date
      }
    }
  }
`