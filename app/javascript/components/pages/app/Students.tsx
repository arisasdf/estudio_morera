import React, { PropsWithChildren } from "react";
import { withApolloProvider } from "@javascript/graphqlProvider";
import { RosariumH1 } from "@rosarium/RosariumHeading";
import I18N from "@javascript/i18n/I18N";
import RosariumCard from "@rosarium/RosariumCard";
import { useDocumentTitle } from "usehooks-ts";

export const Students: React.FC = () => {
  useDocumentTitle(`Estudio Morera - ${I18N("students.title")}`);

  return (
    <main className="students-page">
      <RosariumH1>{I18N("students.title")}</RosariumH1>
      <p> Work in progresssooo</p>
    </main>
  );
};

export default withApolloProvider(Students);
