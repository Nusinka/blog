import * as React from "react";
import { Header, Footer } from "../";
import { ContentWrapper } from "./ContentWrapper";
import "./layout.css";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <ContentWrapper>
        <main>{children}</main>
      </ContentWrapper>
      <Footer />
    </>
  );
};
