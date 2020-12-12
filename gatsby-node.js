const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/template/blog-post.js`)

  
  return graphql(`
  {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          fields {
              slug
          }
          frontmatter {
            title
            date
            description
            tags
          }
        }
      }
    }
  }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges
    posts.forEach((post, i) => {
      const previous = i === posts.length - 1 ? null : posts[i + 1].node
      const next = i === 0 ? null : posts[i - 1].node
      createPage({
        path: post.node.fields.slug,
        component: blogPostTemplate,
        context: {
            slug: post.node.fields.slug,
            previous,
            next,},
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions
  
    if (node.internal.type === `MarkdownRemark`) {
      const value = createFilePath({ node, getNode })
  
      createNodeField({
        name: `slug`,
        node,
        value,
      })
    }
  }
