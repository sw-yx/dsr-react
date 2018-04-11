import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({ data }) => {
  // console.log('data.all', data.allMarkdownRemark.edges)
  return (
    <div>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
      <ul>
        {data.allMarkdownRemark.edges.map(({ node }, i) => {
          return (
            <li key={i}>
              <Link to={`${node.fields.slug}`}>
                {node.frontmatter.title} by {node.frontmatter.company}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query AllQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date
            company
            link
            image
            description
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
