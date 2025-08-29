import React, { PropsWithChildren } from "react";
import { withApolloProvider } from "@javascript/graphqlProvider";
import { RosariumH1 } from "@rosarium/RosariumHeading";
import I18N from "@javascript/i18n/I18N";
import { useDocumentTitle } from "usehooks-ts";
import RosariumInput from "@javascript/components/rosarium/RosariumInput";

export const NewWork: React.FC = () => {
  useDocumentTitle(`Estudio Morera - ${I18N("works.new")}`);

  return (
    <main className="new-work-page">
      <RosariumH1>{I18N("works.new")}</RosariumH1>
      <div className="rosarium-input-group">
        <RosariumInput label={I18N("works.attributes.title")} name="title" />
        <RosariumInput label={I18N("works.attributes.composer")} name="composer" />
      </div>
    </main>
  );
};

export default withApolloProvider(NewWork);
