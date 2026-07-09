import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import Button from "./Button";

export default {
  title: "Components/Button",
  theme: "Components/Button",
  component: Button,
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const ButtonDefault: Story = {
  args: {
      label:"Default Theme",
    state: true,
  },
  argTypes: {
    background_colour: { control: "color" },
  },
};

export const ButtonDisabled: Story = {
  args: {
    label: "Disabled Theme",
    state: false,
  },
  argTypes: {
    background_colour: { control: "color" },
  },
};
