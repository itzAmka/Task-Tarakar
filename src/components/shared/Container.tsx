import { type ComponentProps } from 'react'

type ContainerProps = ComponentProps<'div'>

export const Container = ({ children }: ContainerProps) => {
  return <div className='container mx-auto max-w-3xl mt-5 px-3'>{children}</div>
}
