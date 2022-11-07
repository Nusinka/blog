import React from "react";
import { getImage } from "gatsby-plugin-image";
import { Avatar, Bull, InfoBlock, Name } from "./";

export default function AuthorBlock({ author }) {
  const { name, avatar, date } = author;
  const image = getImage(avatar);
  return (
    <div style={{ display: "flex" }}>
      <Avatar image={image} alt={name} />
      <InfoBlock>
        <Name>{name}</Name>
        <span>
          <span>{date}</span>
          <Bull>•</Bull>
          <span>min read</span>
        </span>
      </InfoBlock>
    </div>
  );
}
