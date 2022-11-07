import React from "react";
import styled from "styled-components";
import LogoSvg from "../../images/logo.svg";
import { Container } from "../Container";

const HeaderWrapper = styled.header`
  background-color: rgb(10, 13, 20);
  display: flex;
  height: 65px;
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <Container>
        <a href="https://drope.me/">
          <img src={LogoSvg} alt="Drope.me" />
        </a>
        <div />
      </Container>
    </HeaderWrapper>
  );
}
