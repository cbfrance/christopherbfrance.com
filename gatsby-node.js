const _ = require('lodash')
const path = require('path')

// Convenience helper for import syntax
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  })
}

// graphql function returns a promise so we can use this little promise helper to have a nice result/error state
const wrapper = promise =>
  promise
    .then(result => {
      if (result.errors) {
        throw result.errors
      }
      return { result, error: null }
    })
    .catch(error => ({ error, result: null }))

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  let slug

  if (node.internal.type === 'Mdx') {
    if (
      Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, 'slug')
    ) {
      slug = `/${_.kebabCase(node.frontmatter.slug)}`
    }
    if (
      Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, 'title')
    ) {
      slug = `/${_.kebabCase(node.frontmatter.title)}`
    }
    createNodeField({ node, name: 'slug', value: slug })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const postTemplate = require.resolve('./src/templates/post.js')

  const { error, result } = await wrapper(
    graphql(`
      {
        allMdx {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                order
              }
            }
          }
        }
      }
    `)
  )

  if (!error) {
    const posts = result.data.allMdx.edges

    const sortedPosts = posts.sort(
      (a, b) =>
        Number(b.node.frontmatter.order) - Number(a.node.frontmatter.order)
    )

    sortedPosts.forEach((edge, index) => {
      const next = index === 0 ? null : posts[index - 1].node
      const prev = index === posts.length - 1 ? null : posts[index + 1].node

      createPage({
        path: edge.node.fields.slug,
        component: postTemplate,
        context: {
          slug: edge.node.fields.slug,
          prev,
          next,
        },
      })
    })

    return
  }

  console.log(error)
}
