import type { ButtonHTMLAttributes, ComponentProps, ReactNode } from 'react'
import { Link } from 'react-router-dom'

type ButtonVariant = 'primary' | 'secondary'

interface SharedProps {
  children: ReactNode
  variant?: ButtonVariant
  className?: string
}

type LinkButtonProps = SharedProps & {
  to: string
} & Omit<ComponentProps<typeof Link>, 'to' | 'className' | 'children'>

type NativeButtonProps = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    to?: never
  }

type ButtonProps = LinkButtonProps | NativeButtonProps

function Button(props: ButtonProps) {
  if ('to' in props && props.to) {
    const {
      to,
      children,
      variant = 'primary',
      className = '',
      ...linkProps
    } = props
    const classes = `button button-${variant} ${className}`.trim()

    return (
      <Link to={to} className={classes} {...linkProps}>
        {children}
      </Link>
    )
  }

  const nativeProps = props as NativeButtonProps
  const {
    children,
    variant = 'primary',
    className = '',
    ...buttonProps
  } = nativeProps
  const classes = `button button-${variant} ${className}`.trim()

  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  )
}

export default Button
