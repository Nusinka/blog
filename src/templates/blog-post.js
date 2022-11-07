import * as React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components";

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      timeToRead
      html
    }
  }
`;

const BlogPost = props => {
  return (
    <Layout>
      <div>Post page</div>
      <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      />
    </Layout>
  );
};
export default BlogPost;
