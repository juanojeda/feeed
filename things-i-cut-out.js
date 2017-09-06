exports.onCreateNode = () => {

  if (node.internal.mediaType === 'text/markdown'){
    let contentTypeNode;
    let writeFile = true;

    switch (node.internal.type){
      case 'contentfulNotesContentTextNode': {
        contentTypeNode = 'content';
        break;
      }
      case 'contentfulNotesPreviewTextNode': {
        contentTypeNode = 'preview';
        break;
      }
      case 'contentfulRecipesBlurbTextNode': {
        contentTypeNode = 'blurb';
      break;
      }
      case 'contentfulRecipesMethodTextNode': {
        contentTypeNode = 'method';
        break;
      }
      default: {
        writeFile = false;
      }
    }

    const fileTemplate = `
  ---
  title: ""
  id: "${node.id}"
  ---

  ${node[contentTypeNode]}
  `;
    if (writeFile) {
      fs.writeFile(`${contentfulPostsPath}${node.id}.markdown`, fileTemplate, {flag: 'w', encoding: 'utf8'}, (err)=> {
        console.log(err);
      });
    }
  }
}

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(
      `
      {
        allContentfulRecipes(limit: 1000) {
          edges {
            node {
              id
            }
          }
        }
      }
    `
    )
      .then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        // Create Recipe pages
        const recipesTemplate = path.resolve(`./src/templates/recipe.js`)
        _.each(result.data.allContentfulRecipes.edges, edge => {
          createPage({
            path: `/recipes/${edge.node.id}/`,
            component: slash(recipesTemplate),
            context: {
              id: edge.node.id,
            },
          })
        })
      })
      .then(() => {
        graphql(
          `
        {
          allContentfulNotes(limit: 1000) {
            edges {
              node {
                id
              }
            }
          }
        }
        `
        ).then(result => {
          if (result.errors) {
            reject(result.errors)
          }

          // Create Notes pages
          const notesTemplate = path.resolve(`./src/templates/note.js`)
          _.each(result.data.allContentfulNotes.edges, edge => {
            createPage({
              path: `/notes/${edge.node.id}/`,
              component: slash(notesTemplate),
              context: {
                id: edge.node.id,
              },
            })
          })

          resolve()
        })
      })
  })
}