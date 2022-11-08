import React from "react";
import { Container } from "../Container";
import { FooterWrapper } from "./FooterWrapper";
import { Copyright } from "./Copyright";

export function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <div />
        <Copyright>© {new Date().getFullYear()} Drope.me</Copyright>
      </Container>
    </FooterWrapper>
  );
}
