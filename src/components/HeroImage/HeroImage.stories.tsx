import type { Meta, StoryObj } from '@storybook/react';
import HeroImage from './HeroImage';

export default {
  title: 'Components/HeroImage',
  theme: 'Components/HeroImage',
  component: HeroImage,
} as Meta<typeof HeroImage>;

type Story = StoryObj<typeof HeroImage>;

export const HeroImageDefault: Story = {
  args: {
    alt: 'src/images/PokemonSapphireGameplay.png',
    state: true,
  },
  argTypes: {
    border_colour: { control: 'color' },
  },
};

export const HeroImageDisabled: Story = {
  args: {
    alt: 'src/images/PokemonSapphireGameplay.png',
    state: false,
  },
  argTypes: {
    border_colour: { control: 'color' },
  },
};
