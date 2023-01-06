import { keyframes, styled } from '../../styles'
import * as ToastRadix from '@radix-ui/react-toast'

const hide = keyframes({
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0,
  },
})

const slideIn = keyframes({
  from: {
    transform: 'translateX(calc(100% + var(--viewport-padding)))',
  },
  to: {
    transform: 'translateX(0)',
  },
})

const swipeOut = keyframes({
  from: {
    transform: 'translateX(var(--radix-toast-swipe-end-x))',
  },
  to: {
    transform: 'translateX(calc(100% + var(--viewport-padding)))',
  },
})

export const ToastRoot = styled(ToastRadix.Root, {
  border: '1px solid $gray600',
  background: 'red',
  borderRadius: '$sm',
  padding: '$3 $5',
  fontSize: '$sm',
  backgroundColor: '$gray800',
  userSelect: 'none',
  boxSizing: 'border-box',
  maxWidth: 360,

  content: 'var(--radix-toast-swipe-end-x)',

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },

  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },

  '&[data-swipe="move"]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },

  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },

  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-in`,
  },
})

export const ToastHeader = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
})

export const ToastTitle = styled(ToastRadix.Title, {
  fontFamily: '$default',
  fontWeight: '$bold',
  fontSize: '$xl',
  color: '$white',
  lineHeight: '$base',
  marginBottom: '$1',
})

export const ToastDescription = styled(ToastRadix.Description, {
  fontFamily: '$default',
  fontWeight: '$regular',
  fontSize: '$sm',
  color: '$gray200',
  lineHeight: '$base',
})

export const ToastClose = styled(ToastRadix.Close, {
  color: '$gray200',
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  lineHeight: 0,
})

export const ToastViewport = styled(ToastRadix.Viewport, {
  '--viewport-padding': '32px',
  position: 'fixed',
  bottom: '0',
  right: '0',
  display: 'flex',
  flexDirection: 'column',
  padding: 'var(--viewport-padding)',
  gap: '10px',
  width: '390px',
  maxWidth: '100vw',
  margin: '0',
  listStyle: 'none',
  zIndex: '2147483647',
  outline: 'none',
})
