import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import RadioButton from "./RadioButton";

export default {
  title: "Components/RadioButton",
  theme: "Components/RadioButton",
  component: RadioButton,
} as Meta<typeof RadioButton>;

type Story = StoryObj<typeof RadioButton>;

export const RadioButtonDefault: Story = {
  args: {
    label: "Default Theme",
    state: true,
  },
  argTypes: {
    background_colour: { control: "color" },
  },
};

export const RadioButtonDisabled: Story = {
  args: {
    label: "Disabled Theme",
    state: false,
  },
  argTypes: {
    background_colour: { control: "color" },
  },
};
