import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({ data }) => {
  // console.log('data.all', data.allMarkdownRemark.edges)
  const { DSes, Articles } = data
  console.log({ Articles })
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
        {DSes.edges.map(({ node }, i) => {
          return (
            <a
              key={i}
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
                <h3>{node.frontmatter.company}</h3>
                <h2>{node.frontmatter.title}</h2>
              </div>
            </a>
          )
        })}
      </section>
      <section className="post-content content-articles">
        <a
          className="block title"
          href="/articles/recent/"
          title="Articles Gallery"
        >
          <div className="content">
            <img
              src="https://d33wubrfki0l68.cloudfront.net/654d85cd22b82f034dfd52f00254871b2e2ea245/5947f/images/illustration-articles.svg"
              width="94"
              height="86"
              alt="Design System Articles"
            />
            <h1>Latest Articles</h1>
            <p className="button">View all</p>
          </div>
        </a>
        {Articles.edges.map(({ node }, i) => {
          return (
            <a
              key={i}
              className="block block-home"
              href={`${node.frontmatter.link}`}
              title={`${node.frontmatter.title}`}
              target="_blank"
            >
              <div className="content">
                <h3>{node.frontmatter.author}</h3>
                <h2>{node.frontmatter.title}</h2>
                <span className="date">{node.frontmatter.date}</span>
              </div>
            </a>
          )
        })}
      </section>
      {/* <Link to="/page-2/">Go to page 2</Link> */}
      <div className="home-secondary-wrap">
        {' '}
        <div className="home-secondary">
          <a
            className="secondary-tile"
            href="/tools/"
            title="Tools on Design Systems"
          >
            <div className="secondary-tile-img">
              <img
                src="https://d33wubrfki0l68.cloudfront.net/83c017613253c325d260627a3e5eb879807dcc7f/80313/images/icon-tools.svg"
                width="24"
                height="24"
                alt="Tools"
              />
            </div>
            <div className="secondary-content">
              {' '}
              <h2>
                Tools <span>→</span>
              </h2>{' '}
              <p>
                A growing collection of design system tools, resources, and
                plugins.
              </p>{' '}
            </div>{' '}
          </a>
          <a
            className="secondary-tile"
            href="/books/"
            title="Books on Design Systems"
          >
            {' '}
            <div className="secondary-tile-img">
              <img
                src="https://d33wubrfki0l68.cloudfront.net/2247d9ea7c6c7226e4db5bdaf71cd0c4af0fea21/e25ee/images/icon-books.svg"
                width="24"
                height="24"
                alt="Books"
              />
            </div>{' '}
            <div className="secondary-content">
              {' '}
              <h2>
                Books <span>→</span>
              </h2>{' '}
              <p>
                A list of recommended books on the subject of design systems
                from industry experts.
              </p>{' '}
            </div>{' '}
          </a>
          <a
            className="secondary-tile"
            href="/talks/"
            title="Talks on Design Systems"
          >
            {' '}
            <div className="secondary-tile-img">
              <img
                src="https://d33wubrfki0l68.cloudfront.net/c701c716320a0e4bf5684d2ea743f48ae9e42217/64729/images/icon-talks.svg"
                width="24"
                height="24"
                alt="Books"
              />{' '}
            </div>
            <div className="secondary-content">
              {' '}
              <h2>
                Talks <span>→</span>
              </h2>{' '}
              <p>
                Helpful talks and presentations on tools and process regarding
                design systems.
              </p>{' '}
            </div>{' '}
          </a>{' '}
        </div>{' '}
      </div>
    </div>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query AllQuery {
    DSes: allMarkdownRemark(
      limit: 3
      filter: { id: { regex: "/_design-systems/" } }
    ) {
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

    Articles: allMarkdownRemark(
      limit: 3
      filter: { id: { regex: "/_articles/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            date
            company
            link
            image
            description
            author
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
