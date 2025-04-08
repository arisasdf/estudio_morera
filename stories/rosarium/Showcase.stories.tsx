import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import ShowcaseGrid from "./showcase/ShowcaseGrid";
import RosariumButton from "@rosarium/RosariumButton";
import RosariumInput from "@rosarium/RosariumInput";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Showcase/Grid",
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
        .rosarium-h3 {
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
      <RosariumButton
        label="Normal"
        size="medium"
        variant="locked"
      />,
      <RosariumButton
        label="Very Large"
        size="large"
        variant="locked"
      />,
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
