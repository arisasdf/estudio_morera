import React, { PropsWithChildren } from "react";
import { Link } from "react-router";
import { useDocumentTitle } from "usehooks-ts";
import { withApolloProvider } from "@javascript/graphqlProvider";
import { gql, useQuery } from "@apollo/client";
import I18N from "@javascript/i18n/I18N";
import { RosariumH1, RosariumH3 } from "@rosarium/RosariumHeading";
import RosariumCard from "@rosarium/RosariumCard";

const WORKS_QUERY = gql`
  query {
    allWorks {
      id
      title
      composer
    }
  }
`;

interface WorkProps extends PropsWithChildren<any> {
  title: string;
  composer: string;
}

const Work: React.FC<WorkProps> = ({ id, title, composer }) => {
  return (
    <Link to={`/app/works/${id}`}>
      {title} ({composer})
    </Link>
  );
};

export const Works: React.FC = () => {
  useDocumentTitle(`Estudio Morera - ${I18N("works.title")}`);

  const { data, loading, error } = useQuery(WORKS_QUERY);

  return (
    <main className="works-page">
      <RosariumH1>{I18N("works.title")}</RosariumH1>
      
      <div className="works-list">
        <Link to="/app/works/new">
          <RosariumH3>{I18N("works.new")}</RosariumH3>
        </Link>

        {loading && <p>Loading...</p>}

        {error && (
          <>
            <h3>Yikes</h3>
            <p>{error.message}</p>
          </>
        )}

        {!error && !loading && (
          <>
            {data.allWorks.map((work) => (
              <RosariumCard key={work.id}>
                  <Work {...work} />
              </RosariumCard>
            ))}
          </>
        )}
      </div>
    </main>
  );
};

export default withApolloProvider(Works);
