import React from "react"
import { Link } from "gatsby"

import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';

import Layout from "../components/layout"
import SEO from "../components/seo"
import IndexCard from "../components/parts/indexCard"

const useStyles = makeStyles({
  buttonLink: {
    textDecoration: `none`,
  }
});

const IndexPage = ({data}) => {
  const classes = useStyles();

  const list = []
  const cards = data.allMarkdownRemark.edges

  for(let card of cards){
    let frontmatter = card.node.frontmatter
    let cardTitle = frontmatter.title
    let cardDate  = frontmatter.date
    let cardDescription = frontmatter.description
    let cardTags  = frontmatter.tags

    list.push(
      <Link 
        className={classes.buttonLink} 
        to={card.node.fields.slug}>
        <IndexCard 
          title={cardTitle} 
          date={cardDate} 
          description={cardDescription} 
          tags={cardTags}>
        </IndexCard>
      </Link>
    );
  }

  return (
  <Layout>
    <SEO title="Home" category="" />

    <Alert 
      severity="info" 
      style={{
        margin: `0em 0em 1em 0em`
      }}
      >
      <AlertTitle>블로그에 어서오세요</AlertTitle>
      <strong> 멋진 걸 </strong>만들어 보자
    </Alert>
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