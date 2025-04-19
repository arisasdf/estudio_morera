import type { Meta, StoryObj } from '@storybook/react';

import React,  { PropsWithChildren } from "react";
import RosariumHeading from '@rosarium/RosariumHeading';

const TypographyDemo: React.FC<PropsWithChildren> = () => {
  return (
    <div style={{width: "80%", margin: "0 auto", padding: "25px 0"}}>
      <p className="rosarium-hero" style={{textAlign: "center"}}>Messa da Requiem</p>
      <RosariumHeading level={1}>Heading H1</RosariumHeading>
      <p className="rosarium-paragraph">Requiem aeternam dona eis, Domine, et lux perpetua luceat eis. <a className="rosarium-link">Te decet hymnus, Deus, in Sion</a>, et tibi reddetur votum in Jerusalem. Exaudi orationem meam, ad te omnis caro veniet. Kyrie eleison, Christe eleison, kyrie eleison.</p>
      <p className="rosarium-paragraph">Dies irae, dies illa, solvet saeclum in favilla, teste <a className="rosarium-link">David</a> cum <a className="rosarium-link">Sibylla</a>. Quantus tremor est futurus quando judex est venturus cuncta stricte discussurus. Tuba mirum spargens sonum per sepulcra regionum coget omnes ante thronum. Mors stupebit et natura, cum resurget creatura, judicanti responsura. <a className="rosarium-link">Liber scriptus proferetur</a> in quo totum continetur, unde mundus judicetur. Judex ergo cum sedebit quidquid latet apparebit, nil inultum remanebit.</p>
      <p className="rosarium-paragraph">Quid sum miser tunc dicturus, quem patronum rogaturus, cum vix justus sit securus? Rex tremendae majestatis, qui salvandos salvas gratis, salva me, fons pietatis. Recordare, <a className="rosarium-link">Jesu pie</a>, quod sum causa tuae viae, ne me perdas ilia die. Quaerens me sedisti lassus, redemisti crucem passus, tantus labor non sit cassus. Juste judex ultionis donum fac remissionis ante diem rationis.</p>

      <RosariumHeading level={2}>Heading H2</RosariumHeading>
      <p className="rosarium-paragraph">Ingemisco tanquam reus culpa rubet vultus meus, supplicanti parce, Deus. Qui Mariam absolvisti, et latronem exaudisti, <b>mihi quoque spem dedisti</b>. Preces meae non sum dignae, sed tu bonus fac benigne, ne perenni cremer igne. Inter oves locum praesta, et ab haedis me sequestra, statuens in parte dextra. Confutatis maledictis, flammis acribus addictis, voca me cum benedictis. <b>Oro supplex et acclinis, cor contritum quasi cinis,</b> gere curam mei finis. Lacrimosa dies illa qua resurget ex favilla judicandus homo reus. Huic ergo parce, Deus, pie Jesu Domine, dona eis requiem.</p>

      <RosariumHeading level={3}>Heading H3</RosariumHeading>
      <p className="rosarium-paragraph">Domine, Jesu Christe, Rex gloriae, libera animas omniums fidelium defunctorum de poenis inferni, <em>et de profundo lacu</em>. Libera eas de ore leonis, ne absorbeat eas tartarus, ne cadant in obscurum. <em>Sed signifer sanctus Michael repraesentet eas in lucem sanctam, quam olim Abrahae promisisti et semini ejus.</em> Hostias et preces, tibi, Domine, laudis offerimus. Tu suscipe pro animabus illis, quarum hodie memoriam facimus. Fac eas, Domine, <em>de morte transire ad vitam</em>, quam olim Abrahae promisisti et semini ejus.</p>

      <RosariumHeading level={4}>Heading H4</RosariumHeading>
      <p className="rosarium-paragraph">Sanctus. Sanctus, Sanctus, Dominus Deus Sabaoth! Pleni suni coeli et terra gloria tua. Osanna in excelsis. Benedictus qui venit in nomine Domini. Osanna in excelsis. Agnus Dei, qui tollis peccata mundi, dona eis requiem sempiternam. Lux aeterna luceat eis, Domine, cum sanctis mis in aeternum, quia pius es. Requiem aeternam dona eis, Domine, et lux perpetua luceat eis, cum sanctis tuis in aeternum, quia pius es.</p>
    </div>
  );
};


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Showcase/Typography',
  component: TypographyDemo,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof TypographyDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Typography: Story = {
  args: {},
};
