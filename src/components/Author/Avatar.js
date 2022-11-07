import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";

export const Avatar = styled(GatsbyImage)`
  border-radius: 50%;
  img {
    border-radius: 50%;
  }
`;
