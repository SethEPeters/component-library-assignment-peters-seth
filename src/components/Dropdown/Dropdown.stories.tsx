import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import Dropdown from "./Dropdown";

export default {
  title: "Components/Dropdown",
  theme: "Components/Dropdown",
  component: Dropdown,
} as Meta<typeof Dropdown>;



type Story = StoryObj<typeof Dropdown>;

export const DropdownDefault: Story = {
  args: {
    label: "Default Theme",
    option1: "default little description",
    option2: "another little thing",
    state: true,
  },
  argTypes: {
    background_colour: { control: 'color' },
  }
};

export const DropdownDisabled: Story = {
  args: {
    label: "Disabled Theme",
    option1: "Disabled little description",
    option2: "Super cool option",
    state: false,
  },
  argTypes: {
    background_colour: { control: 'color' },
  }
};
