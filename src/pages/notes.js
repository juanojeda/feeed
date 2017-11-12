import React, { Component } from 'react';

import Link from 'gatsby-link';

class NotesList extends Component {
  render() {
    const { edges: notes } = this.props.data.allMarkdownRemark;

    return (
      <div>
        {
          notes.map((note) => {
            const { frontmatter, fields } = note.node;
            const { title, id, blurb, tags, date } = frontmatter;
            const { slug } = fields;

            return (
              <Link to={`notes/${slug}`}>
                {title}
                {blurb}
              </Link>
            )
          })
        }
      </div>
    );
  }
}

export default NotesList;

export const pageQuery = graphql`
  query allNotes($Type: String = "note") {
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
            title
            id
            blurb
            tags
            date
            
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;