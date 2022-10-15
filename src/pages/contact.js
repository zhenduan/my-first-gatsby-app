// Step 1: Import React
import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import { SEO } from "../components/SEO";

// Step 2: Define your component
const Contact = () => {
  return (
    <Layout title="Contact Us Page">
      <div>
        <p>This is a contact page</p>
        <Link to="/">Home</Link>
      </div>
    </Layout>
  );
};

// You'll learn about this in the next task, just copy it for now
export const Head = () => (
  <SEO title="Contact us Page" description="This is an contact us page.">
    <script type="application/ld+json">
      {`
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "url": "https://www.spookytech.com",
      "name": "Spooky technologies",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+5-601-785-8543",
        "contactType": "Customer Support"
      }
    }
  `}
    </script>
  </SEO>
);

// Step 3: Export your component
export default Contact;
