import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { BlogWrapper, PostCard } from "./";

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
            timeToRead
            frontmatter {
              title
              background_image {
                childImageSharp {
                  gatsbyImageData
                }
              }
              description
              publication_date(formatString: "MMM D YYYY")
              author_name
              author_avatar {
                childImageSharp {
                  gatsbyImageData(width: 36, height: 36, layout: FIXED)
                }
              }
            }
            id
          }
        }
      }
    }
  `);

  const posts = data?.allMarkdownRemark?.edges || [];

  return (
    <BlogWrapper>
      {posts.map(post => (
        <PostCard key={post.node.id} {...post} />
      ))}
    </BlogWrapper>
  );
}
