import React, { useState } from "react";
import { withApolloProvider } from "@javascript/graphqlProvider";
import { RosariumH1 } from "@rosarium/RosariumHeading";
import I18N from "@javascript/i18n/I18N";
import { useDocumentTitle } from "usehooks-ts";
import RosariumInput from "@javascript/components/rosarium/RosariumInput";
import RosariumButton from "@javascript/components/rosarium/RosariumButton";

export const NewWork: React.FC = () => {
  useDocumentTitle(`Estudio Morera - ${I18N("works.new")}`);

  const [ title, setTitle ] = useState("");
  const [ composer, setComposer ] = useState("");

  const submit = () => {
    console.log("Submitted!", { title, composer });
  }

  return (
    <main className="new-work-page">
      <RosariumH1>{I18N("works.new")}</RosariumH1>
      <div className="rosarium-input-group">
        <RosariumInput
          value={title}
          size="medium"
          label={I18N("works.attributes.title")}
          placeholder="Nessun Dorma"
          onInput={setTitle}
          />
        <RosariumInput
          value={composer}
          size="medium"
          label={I18N("works.attributes.composer")}
          placeholder="Giuseppe Verdi"
          onInput={setComposer}
        />
        <RosariumButton variant="primary" onClick={submit}>{I18N("works.new")}</RosariumButton>
      </div>
    </main>
  );
};

export default withApolloProvider(NewWork);
