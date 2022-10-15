import React from "react";
import { body, container } from "./Layout.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Layout({ title, children }) {
  return (
    <div className={body}>
      <Header />
      <div className={container}>
        <h1>{title}</h1>
        <div>{children}</div>
      </div>

      <Footer />
    </div>
  );
}

// export const Head = () => <title>{title}</title>;

export default Layout;
