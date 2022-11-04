import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import AuthorBlock from "../Author/AuthorBlock"

const PostWrapper = styled(Link)`
  display: flex;
  align-items: center;
  margin: 0 auto 12px auto;
  &:first-child {
    margin-bottom: 0;
  }
`

export default function BlogPage() {
  const data = useStaticQuery(graphql`
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
  `)

  const posts = data?.allMarkdownRemark?.edges || []
  const RenderPost = prop => {
    const {
      node: {
        frontmatter,
        fields: { slug },
      },
    } = prop
    const image = getImage(frontmatter.background_image)
    return (
      <PostWrapper to={slug} key={frontmatter.description}>
        <GatsbyImage image={image} alt={"frontmatter.author"} />
        <div>
          <div>{frontmatter.title}</div>
          <div>{frontmatter.description}</div>
          <AuthorBlock />
        </div>
      </PostWrapper>
    )
  }

  return posts.map(post => <RenderPost key={post.node.id} {...post} />)
}
