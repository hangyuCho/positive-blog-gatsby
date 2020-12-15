import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import IndexCard from "../components/parts/indexCard"

const IndexPage = ({data}) => {
  
  const list = []
  const cards = data.allMarkdownRemark.edges

  for(let card of cards){
    let frontmatter = card.node.frontmatter
    let cardTitle = frontmatter.title
    let cardDate  = frontmatter.date
    let cardDescription = frontmatter.description
    let cardTags  = frontmatter.tags

    list.push(
      <div style={{
        margin: `.4em auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        backgroundColor: `rgb(231 243 255)`,
        borderRadius: `0.4em`
      }}>
        <Link 
          style={{
            textDecoration: `none`
          }} 
          to={card.node.fields.slug}>
          <IndexCard 
            title={cardTitle} 
            date={cardDate} 
            description={cardDescription} 
            tags={cardTags}>
          </IndexCard>
        </Link>
      </div>
    );
  }

  return (
  <Layout>
    <SEO title="Home" category="" />
    <p>블로그에 어서오세요</p>
    <p>멋진 걸 만들어 보자</p>
    {list}
    <Link to="/"></Link>
  </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
query {
  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }
  ) {
    edges {
      node {
        excerpt(pruneLength: 200, truncate: true)
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          tags
        }
      }
    }
  }
}
`