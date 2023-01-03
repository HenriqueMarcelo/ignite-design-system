import type { StoryObj, Meta } from '@storybook/react'

import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    children:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore at possimus cum ratione porro hic qui dignissimos animi totam quod, eveniet perspiciatis explicabo laboriosam quos velit repudiandae aliquid? Suscipit, odit!',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
