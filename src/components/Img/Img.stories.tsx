import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import Img from "./Img";

export default {
  title: "Components/Img",
  theme: "Components/Img",
  component: Img,
} as Meta<typeof Img>;

type Story = StoryObj<typeof Img>;

export const ImgDefault: Story = {
  args: {
    alt: "src/images/PokemonSapphireGameplay.png",
    state: true,
  },
  argTypes: {
    border_colour: { control: "color" },
  },
};

export const ImgDisabled: Story = {
  args: {
    alt: "src/images/PokemonSapphireGameplay.png",
    state: false,
  },
  argTypes: {
    border_colour: { control: "color" },
  },
};
