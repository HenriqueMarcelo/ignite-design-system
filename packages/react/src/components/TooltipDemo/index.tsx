import * as Tooltip from '@radix-ui/react-tooltip'
import { Plus } from 'phosphor-react'
import './styles.css'

export function TooltipDemo() {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button className="IconButton">
            <Plus size={52} weight="bold" />
          </button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content className="TooltipContent" sideOffset={5}>
            Add to library
            <Tooltip.Arrow className="TooltipArrow" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}
