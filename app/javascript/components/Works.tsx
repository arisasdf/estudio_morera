import React, { PropsWithChildren } from "react";
import SPALayout from "./SPALayout";

import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { withApolloProvider } from "../graphqlProvider";
import { RosariumH1 } from "@rosarium/RosariumHeading";
import I18N from "../i18n/i18n";
import RosariumCard from "@rosarium/RosariumCard";

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
  const { data, loading, error } = useQuery(worksQuery);

  return (
    <SPALayout>
      {loading && <p>Loading...</p>}

      {error && (
        <>
          <h3>Yikes</h3>
          <p>{error.message}</p>
        </>
      )}

      {!error && !loading && (
        <>
          <RosariumH1>{I18N("works.heading")}</RosariumH1>
          {data.allWorks.map((work) => (
            <RosariumCard>
                <Work {...work} key={work.id} />
            </RosariumCard>
          ))}
        </>
      )}
    </SPALayout>
  );
};

export default withApolloProvider(Works);
