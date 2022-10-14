import React from "react";
import Layout from "../components/Layout";
import { SEO } from "../components/seo";
import { graphql, Link } from "gatsby";

const blog = ({ data }) => {
  return (
    <Layout title="Blog Page">
      <ul>
        {data.allFile.nodes.map((blog) => (
          <li>{blog.name}</li>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
      nodes {
        name
      }
    }
  }
`;

export const Head = () => (
  <SEO title="My Blogs" description="This is blogs page, it is awesome." />
);
export default blog;
