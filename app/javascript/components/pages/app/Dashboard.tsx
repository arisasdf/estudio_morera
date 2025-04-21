import React, { PropsWithChildren } from "react";
import { withApolloProvider } from "@javascript/graphqlProvider";
import { RosariumH1 } from "@rosarium/RosariumHeading";
import I18N from "@javascript/i18n/I18N";
import { useDocumentTitle } from "usehooks-ts";

export const Dashboard: React.FC = () => {
  useDocumentTitle("Estudio Morera");

  return (
    <>
      <RosariumH1>{I18N("dash.title")}</RosariumH1>
      <p> Work in progresssooo</p>
    </>
  );
};

export default withApolloProvider(Dashboard);
