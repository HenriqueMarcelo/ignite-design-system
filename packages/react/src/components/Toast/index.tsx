import * as ToastRedix from '@radix-ui/react-toast'
import { X } from 'phosphor-react'
import {
  ToastClose,
  ToastDescription,
  ToastHeader,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from './styles'

export interface ToastProps extends ToastRedix.ToastProps {
  title: string
  description: string
}

export function Toast({ title, description, ...rest }: ToastProps) {
  console.log('Olha só:', rest.open)
  return (
    <>
      <ToastRoot open={rest.open} {...rest}>
        <ToastHeader>
          <ToastTitle>{title}</ToastTitle>
          <ToastClose>
            <X size={20} weight="bold" />
          </ToastClose>
        </ToastHeader>
        <ToastDescription>{description}</ToastDescription>
      </ToastRoot>

      <ToastViewport />
    </>
  )
}

export function ToastProvider({
  children,
  ...rest
}: ToastRedix.ToastProviderProps) {
  return <ToastRedix.Provider {...rest}>{children}</ToastRedix.Provider>
}
