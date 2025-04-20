import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import ShowcaseGrid from "./ShowcaseGrid";
import RosariumButton from "@rosarium/RosariumButton";
import RosariumInput from "@rosarium/RosariumInput";
import RosariumIcon from "@rosarium/RosariumIcon";

const meta = {
  title: "Showcase/Components",
  component: ShowcaseGrid,
  parameters: {
    layout: "centered",
  },
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

export const Icons: Story = {
  args: {
    title: "Icons",
    columns: 3,
    children: (() => {
      // #icons-list
      const iconNames = [
        "adjust",
        "close",
        "copy",
        "error",
        "eye-hide",
        "eye-show",
        "heart",
        "home",
        "search",
        "settings",
        "star",
      ];

      return iconNames.map((iconName) => (
        <>
          <RosariumIcon
            name={iconName}
            size="60px"
            onClick={() => {
              navigator.clipboard.writeText(iconName);
              alert(`Copied ${iconName} icon name to clipboard~`);
            }}
          />
          <p
            style={{
              fontFamily: "monospace",
              textAlign: "center",
              color: "#666",
              fontSize: "12px",
            }}
          >
            {iconName}
          </p>
        </>
      ));
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
