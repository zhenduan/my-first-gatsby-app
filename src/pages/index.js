// Step 1: Import React
import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout title="Home Page">
      <div>
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <Link to="/about">About Me</Link>
      </div>
    </Layout>
  );
};

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>;

// Step 3: Export your component
export default IndexPage;
