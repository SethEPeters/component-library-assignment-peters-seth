import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import Text from "./Text";

export default {
  title: "Components/Text",
  theme: "Components/Text",
  component: Text,
} as Meta<typeof Text>;

type Story = StoryObj<typeof Text>;

export const TextDefault: Story = {
  args: {
    label: "Default Theme",
    state: true,
  },
  argTypes: {
    background_colour: { control: "color" },
  },
};

export const TextDisabled: Story = {
  args: {
    label: "Disabled Theme",
    state: false,
  },
  argTypes: {
    background_colour: { control: "color" },
  },
};
