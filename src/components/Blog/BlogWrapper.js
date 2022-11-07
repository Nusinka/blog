import styled from "styled-components";

export const BlogWrapper = styled.div`
  position: relative;
  display: grid;
  grid-gap: 4vmin;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 4vmin 0;
  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-gap: 40px;
  }
`;
