import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { PostWrapper } from "./";
import { PostCardTitle, PostCardDescription } from "../";
import AuthorBlock from "../Author/AuthorBlock";

export function PostCard(prop) {
  const {
    node: {
      frontmatter,
      timeToRead,
      fields: { slug },
    },
  } = prop;
  const image = getImage(frontmatter.background_image);
  const author = {
    name: frontmatter.author_name,
    avatar: frontmatter.author_avatar,
    date: frontmatter.publication_date,
    timeToRead,
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
