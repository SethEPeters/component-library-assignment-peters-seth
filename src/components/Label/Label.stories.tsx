import type { Meta, StoryObj } from '@storybook/react';
import Label from './Label';

export default {
  title: 'Components/Label',
  theme: 'Components/Label',
  component: Label,
} as Meta<typeof Label>;

type Story = StoryObj<typeof Label>;

export const LabelDefault: Story = {
  args: {
    label: 'Default Theme',
    state: true,
  },
  argTypes: {
    background_colour: { control: 'color' },
  },
};

export const LabelDisabled: Story = {
  args: {
    label: 'Disabled Theme',
    state: false,
  },
  argTypes: {
    background_colour: { control: 'color' },
  },
};
