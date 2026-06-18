import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import TableFooter from "./TableFooter";

export default {
  title: "Components/TableFooter",
  theme: "Components/TableFooter",
  component: TableFooter,
} as Meta<typeof TableFooter>;



type Story = StoryObj<typeof TableFooter>;

export const TableFooterDefault: Story = {
  args: {
    label: "Default Theme",
    state: true,
  },
  argTypes: {
    background_colour: { control: 'color' },
  }
};

export const TableFooterDisabled: Story = {
  args: {
    label: "Disabled Theme",
    state: false,
  },
  argTypes: {
    background_colour: { control: 'color' },
  }
};
