import * as React from "react";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { BackButton, Layout } from "../components";
import AuthorBlock from "../components/Author/AuthorBlock";
import {
  PostMainImage,
  MainContent,
  PostDescription,
  PostTitle,
  PostWrapper,
} from "../components/Post";
import Seo from "../components/seo";

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        description
        title
        author_name
        author_avatar {
          childImageSharp {
            gatsbyImageData(width: 36, height: 36, layout: FIXED)
          }
        }
        background_image {
          childImageSharp {
            gatsbyImageData
          }
        }
        publication_date(formatString: "MMM D YYYY")
      }
      timeToRead
      html
    }
  }
`;

const BlogPost = ({ data: { markdownRemark } }) => {
  const { frontmatter, html, timeToRead } = markdownRemark;
  const author = {
    name: frontmatter.author_name,
    avatar: frontmatter.author_avatar,
    date: frontmatter.publication_date,
    timeToRead,
  };
  const image = getImage(frontmatter.background_image);

  return (
    <Layout>
      <PostWrapper>
        <BackButton />
        <PostTitle>{frontmatter.title}</PostTitle>
        <PostDescription>{frontmatter.description}</PostDescription>
        <AuthorBlock author={author} />
        <PostMainImage alt={frontmatter.title} image={image} />
        <MainContent dangerouslySetInnerHTML={{ __html: html }} />
      </PostWrapper>
    </Layout>
  );
};
export default BlogPost;

export const Head = ({ data }) => {
  const title = data?.markdownRemark?.frontmatter?.title;
  return <Seo title={title} />;
};
