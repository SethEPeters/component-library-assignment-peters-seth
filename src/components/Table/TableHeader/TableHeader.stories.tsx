import type { Meta, StoryObj } from '@storybook/react';
import TableHeader from './TableHeader';

export default {
  title: 'Components/TableHeader',
  theme: 'Components/TableHeader',
  component: TableHeader,
} as Meta<typeof TableHeader>;

type Story = StoryObj<typeof TableHeader>;

export const TableHeaderDefault: Story = {
  args: {
    label: 'Default Theme',
    state: true,
  },
  argTypes: {
    background_colour: { control: 'color' },
  },
};

export const TableHeaderDisabled: Story = {
  args: {
    label: 'Disabled Theme',
    state: false,
  },
  argTypes: {
    background_colour: { control: 'color' },
  },
};
