import Layout from "../../components/Layout";
import { NextPage } from "next";
import Grid, { GridItem } from "../../components/Grid";
import useSWR from "swr";
import fetch from "isomorphic-unfetch";
import { useContext } from "react";
import { GlobalContext } from "../../lib/context";

const OpenSource: NextPage<{}> = ({}) => {
  const { data, error } = useSWR("/api/github", url =>
    fetch(url)
      .then(r => r.json())
      .then(r => {
        alert("hi");
        return r;
      })
  );

  const { toggleDarkMode } = useContext(GlobalContext);

  if (error) {
    return <h1>ERROR</h1>;
  }

  return (
    <Layout title="Projects">
      <button onClick={toggleDarkMode}>Toggle</button>
      {data && data.nodes ? <Grid items={data.nodes} /> : "no items"}
    </Layout>
  );
};

export default OpenSource;
