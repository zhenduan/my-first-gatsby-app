// Step 1: Import React
import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { SEO } from "../components/SEO";

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout title="Home Page">
      <div>
        <StaticImage
          alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
          src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
        />
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <Link to="/about">About Me</Link>
      </div>
    </Layout>
  );
};

// You'll learn about this in the next task, just copy it for now
export const Head = () => <SEO />;

// Step 3: Export your component
export default IndexPage;
