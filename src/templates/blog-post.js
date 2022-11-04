import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      timeToRead
      html
    }
  }
`
const BlogPost = props => {
  console.log(props)
  /*   const data = useStaticQuery(graphql`
       query IndexQuery {
         allMarkdownRemark(
           limit: 25
           sort: { order: DESC, fields: [frontmatter___publication_date] }
         ) {
           edges {
             node {
               fields {
                 slug
               }
               frontmatter {
                 title
                 background_image {
                   childImageSharp {
                     gatsbyImageData(width: 363, height: 200)
                   }
                 }
                 description
                 publication_date
                 author
                 name
               }
               id
             }
           }
         }
       }
     `)*/

  return (
    <div>
      <div>Post page</div>
      <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      />
    </div>
  )
}
export default BlogPost
