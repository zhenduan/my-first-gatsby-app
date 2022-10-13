import React from "react";
import {
  navLinks,
  navLinkItem,
  navLinkText,
  container,
} from "./Header.module.css";
import { Link } from "gatsby";

function index() {
  return (
    <div className={container}>
      <ul className={navLinks}>
        <li className={navLinkItem}>
          <Link to="/" className={navLinkText}>
            Home
          </Link>
          <Link to="/about" className={navLinkText}>
            About
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default index;
