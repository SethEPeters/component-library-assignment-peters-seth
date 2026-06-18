import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import TableCell from "./TableCell";

export default {
  title: "Components/TableCell",
  theme: "Components/TableCell",
  component: TableCell,
} as Meta<typeof TableCell>;



type Story = StoryObj<typeof TableCell>;

export const TableCellDefault: Story = {
  args: {
    label: "Default Theme",
    state: true,
  },
  argTypes: {
    background_colour: { control: 'color' },
  }
};

export const TableCellDisabled: Story = {
  args: {
    label: "Disabled Theme",
    state: false,
  },
  argTypes: {
    background_colour: { control: 'color' },
  }
};
