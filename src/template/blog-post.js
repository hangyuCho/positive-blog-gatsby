import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import Layout from "../components/layout"
import SEO from "../components/seo"

const useStyles = makeStyles({
  buttonLink: {
    textDecoration: `none`,
    color: `#000000`
  }
});

export default function Template({data, pageContext, location }) {
  //const { markdownRemark: { frontmatter, html } } = data;
  const classes = useStyles();
  const next = pageContext.next
  const previous = pageContext.previous
  return (
    <Layout>
      <SEO title="contents"></SEO>
      <div>
          <h1>{data.markdownRemark.frontmatter.title}</h1>
          <section dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </div>
        {next && (
        <Link to={next?.fields.slug} className={classes.buttonLink}>
          <Button type="button" variant="contained" color="secondary">다음 글 : {next?.frontmatter.title}</Button>
        </Link>
        )}

        {previous && (
        <Link to={previous?.fields.slug} className={classes.buttonLink}>
          <Button type="button" variant="contained" color="secondary">이전 글 : {previous?.frontmatter.title}</Button>
        </Link>
        )}
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`