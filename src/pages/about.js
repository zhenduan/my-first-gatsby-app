// Step 1: Import React
import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import { SEO } from "../components/seo";

// Step 2: Define your component
const About = () => {
  return (
    <Layout title="About Me">
      <div>
        <p>This is my first gatsby app</p>
        <Link to="/">Home</Link>
      </div>
    </Layout>
  );
};

// You'll learn about this in the next task, just copy it for now
export const Head = () => (
  <SEO title="Page Two" description="This is about gatsby, it is awesome." />
);

// Step 3: Export your component
export default About;
