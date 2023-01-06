import type { StoryObj, Meta } from '@storybook/react'

import {
  Box,
  Text,
  Tooltip,
  TooltipProps,
  TooltipProvider,
} from '@hrq-ignite-ui/react'

export default {
  title: 'Data display/Tooltip',
  component: Tooltip,

  args: {
    text: 'Thank You',
    children: <Text as="span">Hover me, please!</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },

  decorators: [
    (Story) => {
      return (
        <TooltipProvider>
          <Box>{Story()}</Box>
        </TooltipProvider>
      )
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
