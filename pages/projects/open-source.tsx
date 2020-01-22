import Layout from "../../components/Layout";
import { NextPage } from "next";
import Grid, { GridItem } from "../../components/Grid";
import useSWR from "swr";
import fetch from "isomorphic-unfetch";

const OpenSource: NextPage<{}> = ({}) => {
  const { data, error } = useSWR("/api/github", url =>
    fetch(url).then(r => r.json())
  );

  if (error) {
    return <h1>ERROR</h1>;
  }

  return (
    <Layout title="Projects">
      {!error && data.nodes ? <Grid items={data.nodes} /> : "no items"}
    </Layout>
  );
};

export default OpenSource;
