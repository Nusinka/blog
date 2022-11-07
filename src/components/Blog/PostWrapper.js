import styled from "styled-components";
import { Link } from "../";

export const PostWrapper = styled(Link)`
  position: relative;
  flex: 1 1 301px;
  display: flex;
  flex-direction: column;
  min-height: 220px;
  background-size: cover;
  word-break: break-word;
  &:first-child {
    @media (min-width: 1001px) {
      grid-column: 1 / span 3;
      display: grid;
      grid-gap: 4vmin;
      grid-template-columns: 1fr 1fr 1fr;
      min-height: 280px;
      border-top: 0;

      .gatsby-image-wrapper-constrained {
        height: 100%;
        position: relative;
        grid-column: 1 / span 2;
        min-height: 380px;
      }

      h2 {
        font-size: 32px;
        line-height: 36.8px;
      }
      & > div:nth-child(2) {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }
  }
  .gatsby-image-wrapper-constrained {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
`;
