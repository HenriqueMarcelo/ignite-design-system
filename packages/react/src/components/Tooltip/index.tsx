import * as TooltipRadix from '@radix-ui/react-tooltip'
import { ReactNode } from 'react'
import { TooltipArrow, TooltipContent, TooltipRoot } from './styles'
import './styles.ts'

interface TooltipProps {
  children: ReactNode
  text: string
}

export function Tooltip({ children, text }: TooltipProps) {
  return (
    <TooltipRoot delayDuration={300}>
      <TooltipRadix.Trigger asChild>{children}</TooltipRadix.Trigger>
      <TooltipRadix.Portal>
        <TooltipContent className="TooltipContent" sideOffset={5}>
          {text}
          <TooltipArrow />
        </TooltipContent>
      </TooltipRadix.Portal>
    </TooltipRoot>
  )
}

export function TooltipProvider({
  children,
  ...rest
}: TooltipRadix.TooltipProviderProps) {
  return <TooltipRadix.Provider {...rest}>{children}</TooltipRadix.Provider>
}
