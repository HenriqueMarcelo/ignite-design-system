import { styled } from '../../styles'
import * as TooltipRadix from '@radix-ui/react-tooltip'

export const TooltipRoot = styled(TooltipRadix.Root, {})

export const TooltipContent = styled(TooltipRadix.Content, {
  borderRadius: '$sm',
  padding: '$3 $4',
  fontSize: '$sm',
  fontFamily: '$default',
  lineHeight: '$short',
  color: '$gray100',
  backgroundColor: '$gray900',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  userSelect: 'none',
})

export const TooltipArrow = styled(TooltipRadix.Arrow, {
  fill: '$gray900',
})
