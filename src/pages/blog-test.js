import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const BlogTest = () => {
  const data = useStaticQuery(graphql`
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
  `);

  console.log(data);
  return <div>BlogTest</div>;
};

export default BlogTest;
