import type { Meta, StoryObj } from '@storybook/react';
import RosariumButton from "@rosarium/RosariumButton";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Rosarium/Button',
  component: RosariumButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof RosariumButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const MediumPrimary: Story = {
  args: {
    variant: "primary",
    label: "I'm important!",
  },
};

export const SmallSecondary: Story = {
  args: {
    variant: "secondary",
    label: "Cancel",
    size: "small"
  },
};

export const BigPrimary: Story = {
  args: {
    variant: "primary",
    label: "Look at this bad boi",
    size: "large"
  }
};

// TODO: stories with "children"
// e.g. once we have icons, add icons inside buttons
