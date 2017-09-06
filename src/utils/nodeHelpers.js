const path = require('path');
const _    = require('lodash');

const hasFrontMatterProperty = (node, property) => {
  return Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
  Object.prototype.hasOwnProperty.call(node.frontmatter, property);
};

exports.getSlugName = (fileNode, node) => {
  let slug;
  const parsedFilePath = path.parse(fileNode.relativePath);
  if (
    hasFrontMatterProperty(node, 'slug')
  ) {
    slug = `/${_.kebabCase(node.frontmatter.slug)}`;
  }
  if (
    hasFrontMatterProperty(node, 'title')
  ) {
    slug = `/${_.kebabCase(node.frontmatter.title)}`;
  } else if (parsedFilePath.name !== 'index' && parsedFilePath.dir !== '') {
    slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`;
  } else if (parsedFilePath.dir === '') {
    slug = `/${parsedFilePath.name}/`;
  } else {
    slug = `/${parsedFilePath.dir}/`;
  }
  return slug;
};