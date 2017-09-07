const path                = require('path');
const _                   = require('lodash');
const Promise             = require('bluebird');
const slash               = require('slash');
const webpackLodashPlugin = require('lodash-webpack-plugin');
const fs                  = require('fs');
const nodeHelpers         = require('./src/utils/nodeHelpers');

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {

  const { createNodeField } = boundActionCreators;

  if (node.internal.type === 'MarkdownRemark') {
    const fileNode = getNode(node.parent);
    const slug = nodeHelpers.getSlugName(fileNode, node);
    createNodeField({ node, name: 'slug', value: slug });
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const notePage   = path.resolve('src/templates/note.js');
    const recipePage = path.resolve('src/templates/recipe.js');
    const tagPage = path.resolve('src/templates/tag.js');
    resolve(
      graphql(
        `
        {
          allMarkdownRemark {
            edges {
              node {
                frontmatter {
                  type
                  id
                  tags
                }
                fields {
                  slug
                }
              }
            }
          }
        }
      `
      ).then(result => {
        if (result.errors) {
          /* eslint no-console: 'off'*/
          console.log(result.errors);
          reject(result.errors);
        }

        const tagSet = new Set();
        
        result.data.allMarkdownRemark.edges.forEach(edge => {
          const slug = edge.node.fields.slug;
          const type = edge.node.frontmatter.type;
          let component;
  
          if (type === 'recipe') {
            component = recipePage;
          }
          if (type === 'note') {
            component = notePage;
          }
          if (edge.node.frontmatter.tags) {
            edge.node.frontmatter.tags.forEach(tag => {
              tagSet.add(tag);
            });
          }
          
          createPage({
            path: `/${type}s/${slug}`, // pluralise the type
            component,
            context: {
              slug
            }
          });
        });

        const tagList = Array.from(tagSet);
        tagList.forEach(tag => {
          createPage({
            path: `/tags/${_.kebabCase(tag)}/`,
            component: tagPage,
            context: {
              tag
            }
          });
        });
      })
    );
  });
};

// exports.createPages = ({ graphql, boundActionCreators }) => {
//   const { createPage } = boundActionCreators
//   return new Promise((resolve, reject) => {
//     graphql(
//       `
//       {
//         allContentfulRecipes(limit: 1000) {
//           edges {
//             node {
//               id
//             }
//           }
//         }
//       }
//     `
//     )
//       .then(result => {
//         if (result.errors) {
//           reject(result.errors)
//         }

//         // Create Recipe pages
//         const recipesTemplate = path.resolve(`./src/templates/recipe.js`)
//         _.each(result.data.allContentfulRecipes.edges, edge => {
//           createPage({
//             path: `/recipes/${edge.node.id}/`,
//             component: slash(recipesTemplate),
//             context: {
//               id: edge.node.id,
//             },
//           })
//         })
//       })
//       .then(() => {
//         graphql(
//           `
//         {
//           allContentfulNotes(limit: 1000) {
//             edges {
//               node {
//                 id
//               }
//             }
//           }
//         }
//         `
//         ).then(result => {
//           if (result.errors) {
//             reject(result.errors)
//           }

//           // Create Notes pages
//           const notesTemplate = path.resolve(`./src/templates/note.js`)
//           _.each(result.data.allContentfulNotes.edges, edge => {
//             createPage({
//               path: `/notes/${edge.node.id}/`,
//               component: slash(notesTemplate),
//               context: {
//                 id: edge.node.id,
//               },
//             })
//           })

//           resolve()
//         })
//       })
//   })
// }

exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === 'build-javascript') {
    config.plugin('Lodash', webpackLodashPlugin, null);
  }
};