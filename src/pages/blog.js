import React from "react";
import Layout from "../components/Layout";
import { SEO } from "../components/SEO";
import { graphql, Link } from "gatsby";

const blog = ({ data }) => {
  return (
    <Layout title="Blog Page">
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h2>{node.frontmatter.title}</h2>
          <p>Posted: {node.frontmatter.date}</p>
          <p>{node.excerpt}</p>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
        }
        id
        excerpt
      }
    }
  }
`;

export const Head = () => (
  <SEO title="My Blogs" description="This is blogs page, it is awesome." />
);
export default blog;
