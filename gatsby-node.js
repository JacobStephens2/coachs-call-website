/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)
const { paginate } = require(`gatsby-awesome-pagination`)

/**
 * Generate pages
 */

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  // Query all the data
  const queryResult = await graphql(`
    {
      pageQuery: allWpPage {
        nodes {
          databaseId
          uri
        }
      }
      postQuery: allWpPost(sort: { fields: date, order: ASC }) {
        edges {
          node {
            databaseId
            uri
          }
          next {
            databaseId
          }
          previous {
            databaseId
          }
        }
      }
      catQuery: allWpCategory {
        nodes {
          databaseId
          uri
          name
          posts {
            nodes {
              id
            }
          }
        }
      }
      tagQuery: allWpTag {
        nodes {
          databaseId
          uri
          name
          posts {
            nodes {
              id
            }
          }
        }
      }
    }
  `)
  if (queryResult.errors) {
    reporter.panic("error loading events", queryResult.errors)
    return
  }

  // Generate single page pages
  const pages = queryResult.data.pageQuery.nodes
  pages.forEach(page => {
    if (page.uri == "/") {
      createPage({
        path: page.uri,
        component: path.resolve(`./src/templates/home.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          databaseId: page.databaseId,
        },
      })
    } else {
      createPage({
        path: page.uri,
        component: path.resolve(`./src/templates/page.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          databaseId: page.databaseId,
        },
      })
    }
  })

  // Create your paginated pages
  paginate({
    createPage, // The Gatsby `createPage` function
    items: posts, // An array of objects
    itemsPerPage: 4, // How many items you want per page
    pathPrefix: "/posts", // Creates pages like `/blog`, `/blog/2`, etc
    component: path.resolve(`./src/templates/posts.js`), // Just like `createPage()`
  })

  // Create your paginated category indexes
  const categories = queryResult.data.catQuery.nodes
  categories.map(category => {
    paginate({
      createPage, // The Gatsby `createPage` function
      items: category.posts.nodes, // An array of objects
      itemsPerPage: 10, // How many items you want per page
      pathPrefix: category.uri, // Creates pages like `/blog`, `/blog/2`, etc
      component: path.resolve(`./src/templates/categories.js`), // Just like `createPage()`
      context: {
        catId: category.databaseId,
        catName: category.name,
      },
    })
  })  

  
}
