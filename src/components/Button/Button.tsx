import Link from 'next/link'
import React from 'react'
import { ButtonVariant, ButtonSize, buttonVariants, buttonSizes } from './buttonStyles'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant
  size?: ButtonSize
  disabled?: boolean
  href?: string
  target?: string
}

const Button = ({ children, variant, disabled, href, target, size, ...props }: ButtonProps) => {
  const classes = `rounded-lg ${buttonSizes[size || 'md']} flex items-center justify-center duration-200 ease-in-out active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none ${buttonVariants[variant]} ${props.className}`

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
      >
        {children}
      </Link>
    )
  }

  return (
    <button
      disabled={disabled}
      {...props}
      className={classes}
    >
      {children}
    </button>
  )
}

export default Button