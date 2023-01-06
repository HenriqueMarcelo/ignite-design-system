import type { StoryObj, Meta } from '@storybook/react'

import { Button, Toast, ToastProps, ToastProvider } from '@hrq-ignite-ui/react'
import { useState } from 'react'

export default {
  title: 'Data display/Toast',
  component: Toast,

  args: {
    title: 'Agendamento realizado',
    description: 'Quarta-feira, 23 de Outubro às 16h',
  },
  argTypes: {
    title: {
      control: {
        type: 'text',
      },
    },
    description: {
      control: {
        type: 'text',
      },
    },
  },

  decorators: [
    (Story) => {
      const [open, setOpen] = useState(false)
      const { description, title } = Story().props as ToastProps
      return (
        <ToastProvider>
          <Button onClick={() => setOpen(true)}>Open Toast</Button>
          <Toast
            open={open}
            onOpenChange={setOpen}
            title={title}
            description={description}
          />
        </ToastProvider>
      )
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
