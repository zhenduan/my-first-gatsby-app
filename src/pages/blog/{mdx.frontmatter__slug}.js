import React from "react";
import Layout from "../../components/Layout";
import { SEO } from "../../components/SEO";
import { graphql } from "gatsby";

const BlogPost = ({ data, children }) => {
  return (
    <Layout>
      <p>{data.mdx.frontmatter.date}</p>
      {children}
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        slug
        date
      }
      body
    }
  }
`;

// export const query = graphql`
//   query ($id: String) {
//     mdx(id: {eq: $id}) {
//       frontmatter {
//         title
//         date(formatString: "MMMM D, YYYY")
//       }
//     }
//   }
// `

export const Head = () => <SEO title="Single Blog Page" />;

export default BlogPost;
