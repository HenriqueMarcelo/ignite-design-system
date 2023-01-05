import type { StoryObj, Meta } from '@storybook/react'

import { Text, TextProps } from '@hrq-ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    side: 'md',
    children:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore at possimus cum ratione porro hic qui dignissimos animi totam quod, eveniet perspiciatis explicabo laboriosam quos velit repudiandae aliquid? Suscipit, odit!',
  },

  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
