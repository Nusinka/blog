import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { PostWrapper } from "./PostWrapper";
import { PostCardTitle } from "../PostCardTitle";
import { PostCardDescription } from "../PostCardDescription";
import AuthorBlock from "../Author/AuthorBlock";
import React from "react";

export function PostCard(prop) {
  const {
    node: {
      frontmatter,
      fields: { slug },
    },
  } = prop;
  const image = getImage(frontmatter.background_image);
  const author = {
    name: frontmatter.author_name,
    avatar: frontmatter.author_avatar,
    date: frontmatter.publication_date,
  };

  return (
    <PostWrapper to={slug} key={frontmatter.description}>
      <GatsbyImage image={image} alt={frontmatter.title} />
      <div>
        <PostCardTitle>{frontmatter.title}</PostCardTitle>
        <PostCardDescription>{frontmatter.description}</PostCardDescription>
        <AuthorBlock author={author} />
      </div>
    </PostWrapper>
  );
}
