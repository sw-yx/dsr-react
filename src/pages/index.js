import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({ data }) => {
  // console.log('data.all', data.allMarkdownRemark.edges)
  return (
    <div className="post post-home">
      <header className="post-header clearfix">
        {' '}
        <div className="post-head-wrap">
          {' '}
          <div className="post-head-content">
            {' '}
            <h1 className="post-title">
              A frequently updated collection of Design System{' '}
              <a href="/design-systems/">examples</a>,{' '}
              <a href="/articles/">articles</a>, <a href="/tools/">tools</a> and{' '}
              <a href="/talks/">talks</a>.
            </h1>{' '}
          </div>{' '}
        </div>{' '}
      </header>

      <section className="post-content content-ds">
        <a
          className="block title"
          href="/design-systems/recent/"
          title="Design Systems Gallery"
        >
          <div className="content">
            <img
              src="https://d33wubrfki0l68.cloudfront.net/c212c67984cc23c7dc3ebb51b9798db3af6c435f/f3cdb/images/illustration-ds.svg"
              width="94"
              height="86"
              alt="Design System Legos"
            />
            <h1>Latest Design Systems</h1>
            <p className="button">View all</p>
          </div>
        </a>
        {data.allMarkdownRemark.edges.map(({ node }, i) => {
          return (
            <a
              className="block block-home"
              href={`${node.frontmatter.link}`}
              title={`${node.frontmatter.title}`}
              target="_blank"
            >
              <div className="img-wrap">
                <img
                  src={`${node.frontmatter.image}`}
                  alt={`${node.frontmatter.title}`}
                  width="800"
                  height="400"
                />{' '}
              </div>
              <div className="content">
                <h3>{node.frontmatter.compay}</h3>
                <h2>{node.frontmatter.title}</h2>
              </div>
            </a>
          )
        })}
      </section>
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
    allMarkdownRemark(limit: 3) {
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
