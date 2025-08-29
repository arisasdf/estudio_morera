import React from "react";
import { useParams } from "react-router";
import { useDocumentTitle } from "usehooks-ts";
import { withApolloProvider } from "@javascript/graphqlProvider";
import { gql, useQuery } from "@apollo/client";
import I18N from "@javascript/i18n/I18N";
import { RosariumH1, RosariumH2 } from "@rosarium/RosariumHeading";

const WORK_QUERY = gql`
  query GetWork($workId: ID!) {
    work(id: $workId) {
      id
      title
      composer
    }
  }
`;

export const Work: React.FC = () => {
  const { workId } = useParams();
  useDocumentTitle(`Estudio Morera - NOMBRE DEL TRABAJO AQUI`);

  const { data, loading, error } = useQuery(WORK_QUERY, {
    variables: { workId },
  });

  return (
    <main className="work-page">
      {loading && <p>Loading...</p>}

      {error && (
        <>
          <h3>Yikes</h3>
          <p>{error.message}</p>
        </>
      )}

      {!error && !loading && (
        <>
          <RosariumH1>{data.work.title}</RosariumH1>
          <RosariumH2>{I18N("works.attributes.composer")}: {data.work.composer}</RosariumH2>
          <p>{JSON.stringify(data)}</p>
        </>
      )}
    </main>
  );
};

export default withApolloProvider(Work);
