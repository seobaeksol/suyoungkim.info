import Layout from "../../components/Layout";
import { NextPage } from "next";
import Grid, { GridItem } from "../../components/Grid";
import useSWR from "swr";
import fetch from "isomorphic-unfetch";

const OpenSource: NextPage<{}> = ({}) => {
  const { data: projectItems, error } = useSWR("/api/github", url =>
    fetch(url).then(r => r.json())
  );

  return (
    <Layout title="Projects">
      {projectItems && !error ? <Grid items={projectItems} /> : "no items"}
    </Layout>
  );
};

export default OpenSource;
