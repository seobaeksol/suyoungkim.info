import Layout from "../../components/Layout";
import { NextPage } from "next";
import Grid, { GridItem } from "../../components/Grid";

const OpenSource: NextPage<{ projectItems?: GridItem[] }> = ({
  projectItems
}) => (
  <Layout title="Projects">
    {projectItems ? <Grid items={projectItems} /> : "no items"}
  </Layout>
);

OpenSource.getInitialProps = () => {
  console.log(process.env.githubToken);
  return { projectItems: undefined };
};

export default OpenSource;
