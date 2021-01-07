/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
exports.createPages = async ({ actions, graphql }) => {
  // query for WordPress page data
  const result = await graphql(`
    {
      allWpPage(sort: { fields: [date] }) {
        edges {
          node {
            id
            uri
          }
        }
      }
    }
  `)

  // pull the page data out of the query response
  const pages = result.data.allWpPage.edges

  // loop through WordPress pages and create a Gatsby page for each one
  pages.forEach(page => {
    actions.createPage({
      path: page.node.uri,
      component: require.resolve("./src/templates/page-template.js"),
      context: {
        id: page.node.id,
      },
    })
  })
}
