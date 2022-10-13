import React from "react";

function Layout({ title, children }) {
  return (
    <>
      <div>header</div>
      <h1>{title}</h1>
      <div>{children}</div>
      <div>footer</div>
    </>
  );
}

// export const Head = () => <title>{title}</title>;

export default Layout;
