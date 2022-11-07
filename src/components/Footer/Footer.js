import React from "react";
import styled from "styled-components";
import { Container } from "../Container";

const FooterWrapper = styled.footer`
  background-color: rgb(27, 31, 39);
  display: flex;
  height: 82px;
`;

const Copyright = styled.div`
  color: rgba(210, 207, 236, 0.8);
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <div />
        <Copyright>© {new Date().getFullYear()} Drope.me</Copyright>
      </Container>
    </FooterWrapper>
  );
}
