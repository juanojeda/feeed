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

// exports.createPages = ({ graphql, boundActionCreators }) => {
//   const { createPage } = boundActionCreators;

//   return new Promise((resolve, reject) => {
//     const postPage = path.resolve('src/templates/post.jsx');
//     const tagPage = path.resolve('src/templates/tag.jsx');
//     const categoryPage = path.resolve('src/templates/category.jsx');
//     resolve(
//       graphql(
//         `
//         {
//           allMarkdownRemark {
//             edges {
//               node {
//                 frontmatter {
//                   tags
//                   category
//                 }
//                 fields {
//                   slug
//                 }
//               }
//             }
//           }
//         }
//       `
//       ).then(result => {
//         if (result.errors) {
//           /* eslint no-console: 'off'*/
//           console.log(result.errors);
//           reject(result.errors);
//         }

//         const tagSet = new Set();
//         const categorySet = new Set();
//         result.data.allMarkdownRemark.edges.forEach(edge => {
//           if (edge.node.frontmatter.tags) {
//             edge.node.frontmatter.tags.forEach(tag => {
//               tagSet.add(tag);
//             });
//           }

//           if (edge.node.frontmatter.category) {
//             categorySet.add(edge.node.frontmatter.category);
//           }

//           createPage({
//             path: edge.node.fields.slug,
//             component: postPage,
//             context: {
//               slug: edge.node.fields.slug
//             }
//           });
//         });

//         const tagList = Array.from(tagSet);
//         tagList.forEach(tag => {
//           createPage({
//             path: `/tags/${_.kebabCase(tag)}/`,
//             component: tagPage,
//             context: {
//               tag
//             }
//           });
//         });

//         const categoryList = Array.from(categorySet);
//         categoryList.forEach(category => {
//           createPage({
//             path: `/categories/${_.kebabCase(category)}/`,
//             component: categoryPage,
//             context: {
//               category
//             }
//           });
//         });
//       })
//     );
//   });
// };

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

exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === 'build-javascript') {
    config.plugin('Lodash', webpackLodashPlugin, null);
  }
};