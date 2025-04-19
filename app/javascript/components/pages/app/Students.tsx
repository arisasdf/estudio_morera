import React, { PropsWithChildren } from "react";
import { withApolloProvider } from "@javascript/graphqlProvider";
import { RosariumH1 } from "@rosarium/RosariumHeading";
import I18N from "@javascript/i18n/I18N";
import RosariumCard from "@rosarium/RosariumCard";

export const Students: React.FC = () => {
  return (
    <>
      <RosariumH1>{I18N("students.heading")}</RosariumH1>
      <p> Work in progresssooo</p>
    </>
  );
};

export default withApolloProvider(Students);
