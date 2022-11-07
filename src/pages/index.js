import * as React from "react";

import { Layout } from "../components";
import Seo from "../components/seo";
import BlogPage from "../components/Blog/Blog";

const IndexPage = () => (
  <Layout>
    <BlogPage />
  </Layout>
);

export const Head = () => <Seo title="Home" />;

export default IndexPage;
