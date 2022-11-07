import * as React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./layout.css";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
          flex: 1,
        }}
      >
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};
