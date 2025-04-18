import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import ShowcaseGrid from "./ShowcaseGrid";
import RosariumButton from "@rosarium/RosariumButton";
import RosariumInput from "@rosarium/RosariumInput";
import RosariumHeading from "@rosarium/RosariumHeading";
import RosariumIcon from "@rosarium/RosariumIcon";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Showcase/Components",
  component: ShowcaseGrid,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  // tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  decorators: [
    (story) => {
      const styles = `
        .rosarium--showcase-heading {
          text-align: center;
          margin-bottom: 15px;
        }
      `;
      return (
        <>
          <style>{styles}</style>
          {story()}
        </>
      );
    },
  ],
} satisfies Meta<typeof ShowcaseGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Typography: Story = {
  args: {
    title: "Typography",
    columns: 1,
    children: [
      <>
        <RosariumHeading level={1}>Introitus, Kyrie, Sequentia</RosariumHeading>
        <p className="rosarium-paragraph">Requiem aeternam dona ets, Domine, et lux perpetua luceat ets. <a className="rosarium-link">Te decet hymnus, Deus, in Sion</a>, et tibi reddetur votum in Jerusalem. Exaudi orationem meam, ad te omnis caro veniet. Requiem aeternam dona ets, Domine, et lux perpetua luceat ets. Kyrie eleison, Christe eleison, kyrie eleison.</p>
        <p className="rosarium-paragraph">Dies irae, dies illa, solvet saeclum in favilla, teste <a className="rosarium-link">David</a> cum <a className="rosarium-link">Sibylla</a>. Quantus tremor est futurus quando judex est venturus cuncta stricte discussurus. Tuba mirum spargens sonum per sepulcra regionum coget omnes ante thronum. Mors stupebit et natura, cum resurget creatura, judicanti responsura. <a className="rosarium-link">Liber scriptus proferetur</a> in quo totum continetur, unde mundus judicetur. Judex ergo cum sedebit quidquid latet apparebit, nil inultum remanebit.</p>
        <p className="rosarium-paragraph">Quid sum miser tunc dicturus, quem patronum rogaturus, cum vix justus sit securus? Rex tremendae majestatis, qui salvandos salvas gratis, salva me, fons pietatis. Recordare, <a className="rosarium-link">Jesu pie</a>, quod sum causa tuae viae, ne me perdas ilia die. Quaerens me sedisti lassus, redemisti crucem passus, tantus labor non sit cassus. Juste judex ultionis donum fac remissionis ante diem rationis.</p>
      </>,
      <>
        <RosariumHeading level={2}>Sequentia &ndash; cont.</RosariumHeading>
        <p className="rosarium-paragraph">Ingemisco tanquam reus culpa rubet vultus meus, supplicanti parce, Deus. Qui Mariam absolvisti, et latronem exaudisti, <b>mihi quoque spem dedisti</b>. Preces meae non sum dignae, sed tu bonus fac benigne, ne perenni cremer igne. Inter oves iocum praesta, et ab haedis me sequestra, statuens in parte dextra. <b>Confutatis maledictis</b>, flammis acribus addictis, voca me cum benedictis. Oro supplex et acclinis, cor contritum quasi cinis, gere curam mei finis. Lacrimosa dies illa qua resurget ex favilla judicandus homo reus. Huic ergo parce, Deus, pie Jesu Domine, dona els requiem.</p>
      </>,
      <>
        <RosariumHeading level={3}>Offertorium (Domine Jesu Christe)</RosariumHeading>
        <p className="rosarium-paragraph">Domine, Jesu Christe, Rex gloriae, libera animas omniurn fidelium defunctorum de poenis inferni, <em>et de profundo lacu</em>. Libera eas de ore leonis, ne absorbeat eas tartarus, ne cadant in obscurum. <em>Sed signifer sanctus Michael repraesentet eas in lucem sanctam, quam olim Abrahae promisisti et semini ejus.</em> Hostias et preces, tibi, Domine, laudis offerimus. Tu suscipe pro animabus illis, quarum hodie memoriam facimus. Fac eas, Domine, <em>de morte transire ad vitam</em>, quam olim Abrahae promisisti et semini ejus.</p>
      </>,
      <>
        <RosariumHeading level={4}>Finale</RosariumHeading>
        <p className="rosarium-paragraph">Sanctus. Sanctus, Sanctus, Dominus Deus Sabaoth! Pleni suni coeli et terra gloria tua. Osanna in excelsis. Benedictus qui venit in nomine Domini. Osanna in excelsis. Agnus Dei, qui tollis peccata mundi, dona eis requiem sempiternam. Lux aeterna luceat eis, Domine, cum sanctis mis in aeternum, quia pius es. Requiem aeternam dona eis, Domine, et lux perpetua luceat eis, cum sanetis tuis in aeternum, quia pius es.</p>
      </>,
    ],
  },
};

export const Icons: Story = {
  args: {
    title: "Icons",
    columns: 3,
    children: (() => {
      // #icons-list
      const iconNames = [
        "close",
        "done",
        "eye-hide",
        "eye-show",
        "heart",
        "home",
        "search",
        "settings",
        "star",
      ];

      return iconNames.map((iconName) => (
        <RosariumIcon name={iconName} size="60px" />
      ))
    })(),
  },
};

export const Buttons: Story = {
  args: {
    title: "Buttons",
    columns: 3,
    children: [
      <RosariumButton label="Tiny" size="small" variant="primary" />,
      <RosariumButton label="Normal" size="medium" variant="primary" />,
      <RosariumButton label="Very Large" size="large" variant="primary" />,
      <RosariumButton label="Tiny" size="small" variant="primary-outline" />,
      <RosariumButton label="Normal" size="medium" variant="primary-outline" />,
      <RosariumButton
        label="Very Large"
        size="large"
        variant="primary-outline"
      />,
      <RosariumButton label="Tiny" size="small" variant="secondary" />,
      <RosariumButton label="Normal" size="medium" variant="secondary" />,
      <RosariumButton label="Very Large" size="large" variant="secondary" />,
      <RosariumButton label="Tiny" size="small" variant="secondary-outline" />,
      <RosariumButton
        label="Normal"
        size="medium"
        variant="secondary-outline"
      />,
      <RosariumButton
        label="Very Large"
        size="large"
        variant="secondary-outline"
      />,
      <RosariumButton label="Tiny" size="small" variant="locked" />,
      <RosariumButton label="Normal" size="medium" variant="locked" />,
      <RosariumButton label="Very Large" size="large" variant="locked" />,
    ],
  },
};

export const Inputs: Story = {
  args: {
    title: "Inputs",
    columns: 2,
    children: [
      <RosariumInput
        id="small-text"
        size="small"
        label="Email"
        placeholder="self@lucia.cr"
      />,
      <RosariumInput
        id="small-password"
        size="small"
        label="Password"
        type="password"
      />,
      <RosariumInput
        id="medium-text"
        size="medium"
        label="Email"
        placeholder="self@lucia.cr"
      />,
      <RosariumInput
        id="medium-password"
        size="medium"
        label="Password"
        type="password"
      />,
      <RosariumInput
        id="large-text"
        size="large"
        label="Email"
        placeholder="self@lucia.cr"
      />,
      <RosariumInput
        id="large-password"
        size="large"
        label="Password"
        labelInside
        type="password"
      />,
    ],
  },
};
