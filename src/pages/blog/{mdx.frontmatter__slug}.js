import React from "react";
import Layout from "../../components/Layout";
import { SEO } from "../../components/SEO";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const BlogPost = ({ data, children }) => {
  const image = getImage(data.mdx.frontmatter.hero_image);
  return (
    <Layout>
      <p>{data.mdx.frontmatter.date}</p>
      <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt} />
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
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
        hero_image_alt
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
