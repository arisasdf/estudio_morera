import React, { PropsWithChildren } from "react";

import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { withApolloProvider } from "@javascript/graphqlProvider";
import { RosariumH1 } from "@rosarium/RosariumHeading";
import I18N from "@javascript/i18n/I18N";
import RosariumCard from "@rosarium/RosariumCard";
import { useDocumentTitle } from "usehooks-ts";

const worksQuery = gql`
  query {
    allWorks {
      title
      composer
    }
  }
`;

interface WorkProps extends PropsWithChildren<any> {
  title: string;
  composer: string;
}

const Work: React.FC<WorkProps> = ({ title, composer }) => {
  return (
    <li>
      {title} ({composer})
    </li>
  );
};

export const Works: React.FC = () => {
  useDocumentTitle(`Estudio Morera - ${I18N("works.title")}`);

  const { data, loading, error } = useQuery(worksQuery);

  return (
    <>
      {loading && <p>Loading...</p>}

      {error && (
        <>
          <h3>Yikes</h3>
          <p>{error.message}</p>
        </>
      )}

      {!error && !loading && (
        <>
          <RosariumH1>{I18N("works.title")}</RosariumH1>
          {data.allWorks.map((work) => (
            <RosariumCard>
                <Work {...work} key={work.id} />
            </RosariumCard>
          ))}
        </>
      )}
    </>
  );
};

export default withApolloProvider(Works);
