import type { Meta, StoryObj } from '@storybook/react';
import TableRow from './TableRow';

export default {
  title: 'Components/TableRow',
  theme: 'Components/TableRow',
  component: TableRow,
} as Meta<typeof TableRow>;

type Story = StoryObj<typeof TableRow>;

export const TableRowDefault: Story = {
  args: {
    label: 'Default Theme',
    state: true,
  },
  argTypes: {
    background_colour: { control: 'color' },
  },
};

export const TableRowDisabled: Story = {
  args: {
    label: 'Disabled Theme',
    state: false,
  },
  argTypes: {
    background_colour: { control: 'color' },
  },
};
