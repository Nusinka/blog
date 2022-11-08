import React from "react";
import { HeaderWrapper } from "./HeaderWrapper";
import { Container } from "../Container";
import LogoSvg from "../../images/logo.svg";
import config from "../../../config.json";

export function Header() {
  return (
    <HeaderWrapper>
      <Container>
        <a href={config.homeUrl}>
          <img src={LogoSvg} alt={config.author} />
        </a>
        <div />
      </Container>
    </HeaderWrapper>
  );
}
