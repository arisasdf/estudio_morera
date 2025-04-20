import type { Meta, StoryObj } from '@storybook/react';
import ColorTable from './colors/ColorTable';
import { THEME_PALETTES, STATE_PALETTES } from './colors/palettes';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Showcase/Colors',
  component: ColorTable,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  // tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof ColorTable>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Themes: Story = {
  args: {palettes: THEME_PALETTES},
};

export const States: Story = {
  args: {palettes: STATE_PALETTES},
};
