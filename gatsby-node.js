const path = require('path')
const _ = require('lodash')

// The main purpose of this file is to exercise this
// createPages function, which builds pages from graphql data sources ...
// It expects an object with boundActionCreators and graphql
exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  // We define two types of pages that are derived from this node process ..
  // (other types of pages can be built by adding files to src/pages directory)
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
  const tagTemplate = path.resolve('src/templates/tags.js')

  // createPages returns a graphql promise as `result.data`
  return graphql(`
    {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___created_at] }, limit: 1000) {
        edges {
          node {
            excerpt(pruneLength: 1250)
            html
            id
            frontmatter {
              created_at
              path
              title
              tags
            }
          }
        }
      }
    }
  `).then(result => {
    // If there are errors return the promise rejected
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    // -------------------------------------------------
    // Build post pages
    // If there are not errors, gather the edges of the markdown-parsed data
    const posts = result.data.allMarkdownRemark.edges

    // Build all of the post using individual `createPage` gatsby API
    posts.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {}, // additional data can be passed via context
      })
    })

    // -------------------------------------------------
    // Build tag pages
    let tags = []
    // Iterate through each post, putting all found tags into `tags`
    _.each(posts, edge => {
      if (_.get(edge, 'node.frontmatter.tags')) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    })
    // Eliminate duplicate tags
    tags = _.uniq(tags)

    // Make tag pages
    tags.forEach(tag => {
      createPage({
        path: `/tags/${_.kebabCase(tag)}/`,
        component: tagTemplate,
        context: {
          tag,
        },
      })
    })
  })
}
