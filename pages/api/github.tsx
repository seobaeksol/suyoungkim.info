import { NextApiRequest, NextApiResponse } from "next";
import fetch from "isomorphic-unfetch";

const options = {
  method: "POST",
  headers: {
    Authorization: `bearer ${process.env.githubToken}`,
    "Content-Type": "application/json",
    Accept: "application/json"
  }
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const githubRes = await fetch("https://api.github.com/graphql", {
    ...options,
    body: JSON.stringify({
      query: `{
      user(login: "kimpeupeu") {
        repositories(first: 9, isFork: false, isLocked: false) {
          nodes {
            name
            description
            url
          }
          pageInfo {
            endCursor
            hasNextPage
            hasPreviousPage
            startCursor
          }
        }
      }
    }
    `,
      variables: {}
    })
  });

  const data = await githubRes.json();
  const repositories = data.data.user.repositories;

  res.status(200).json(repositories || []);
};
