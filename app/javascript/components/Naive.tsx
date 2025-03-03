import React from "react";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

const worksQuery = gql`
  query {
    allWorks {
      title
      composer
    }
  }
`;

interface WorkParams {
  title: string;
  composer: string;
}

const Work: React.FunctionComponent = (work: WorkParams) => {
  return (
    <li>
      {work.title} ({work.composer})
    </li>
  );
};

const Works: React.FunctionComponent = () => {
  const { data, loading, error } = useQuery(worksQuery);

  if (loading) {
    return (
      <main>
        <span>Loading...</span>
      </main>
    );
  }

  if (error) {
    return (
      <main>
        <h1>Error</h1>
        <div>{error.message}</div>
      </main>
    );
  }

  return (
    <main>
      {" "}
      <h1>Obras</h1>{" "}
      <ul>
        {" "}
        {data.allWorks.map((work) => (
          <Work {...work} key={work.id} />
        ))}{" "}
      </ul>{" "}
    </main>
  );
};

export default Works;