import React from "react"
import { graphql } from "gatsby"

export default function Template({data}) {
  //const { markdownRemark: { frontmatter, html } } = data;
  return (
    <div>
        {/* <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          dangerouslySetInnerHTML={{ __html: html }}
        /> */}
        <h1>hoge~</h1>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <section dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </div>
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