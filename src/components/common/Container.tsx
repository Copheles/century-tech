import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

interface ContainerProps<T extends ElementType = 'div'> {
  as?: T
  children: ReactNode
  className?: string
}

function Container<T extends ElementType = 'div'>({
  as,
  children,
  className = '',
  ...props
}: ContainerProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ContainerProps<T>>) {
  const Component = as ?? 'div'

  return (
    <Component className={`container ${className}`.trim()} {...props}>
      {children}
    </Component>
  )
}

export default Container
