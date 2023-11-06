import { Meta, StoryObj } from '@storybook/react';

import TextBlock, { TextBlockProps } from './TextBlock';

const meta: Meta<TextBlockProps> = {
  title: 'Molecules/TextBlock',
  component: TextBlock,
  argTypes: {
    className: {
      type: "string"
    }
  }
}

export default meta;

export const Primary: StoryObj<TextBlockProps> = {
  args: {
    title: "Title",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a erat a felis bibendum condimentum eu eget metus. Duis interdum est nec quam molestie sollicitudin. Pellentesque posuere viverra leo, non volutpat tellus pharetra ac. Donec quis nunc magna. Proin in eros id arcu euismod scelerisque."
  }
}

