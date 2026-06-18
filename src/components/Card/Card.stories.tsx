import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import Card from "./Card";

export default {
  title: "Components/Card",
  theme: "Components/Card",
  component: Card,
} as Meta<typeof Card>;



type Story = StoryObj<typeof Card>;

export const CardDefault: Story = {
  args: {
    title: "Default Theme",
    description: "default little description",
    state: true,
  },
  argTypes: {
    background_colour: { control: 'color' },
  }
};

export const CardDisabled: Story = {
  args: {
    title: "Disabled Theme",
    description: "Disabled little description",
    state: false,
  },
  argTypes: {
    background_colour: { control: 'color' },
  }
};
