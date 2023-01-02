import type { StoryObj, Meta } from '@storybook/react'

import { Button, ButtonsProps } from '@ignite-ui/react'

export default {
  title: 'Button',
  component: Button,

  args: {
    children: 'Enviar',
  },
} as Meta<ButtonsProps>

export const Primary: StoryObj<ButtonsProps> = {}

export const Big: StoryObj<ButtonsProps> = {
  args: {
    size: 'big',
  },
}
