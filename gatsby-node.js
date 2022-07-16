const path = require('path')

exports.createPages = async ({ graphql, actions }) => {

  const { data } = await graphql(`
    query Articles {
      allStrapiArticle {
        nodes {
          Slug
        }
      }
    }
  `)

  data.allStrapiArticle.nodes.forEach(node => {
    actions.createPage({
      path: '/blog/' + node.Slug,
      component: path.resolve('./src/templates/article.js'),
      context: { Slug: node.Slug }
    })
  })
}
