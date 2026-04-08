import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import './ui.scss'

type WithChildren = {
  children: ReactNode
  className?: string
}

type BadgeVariant = 'primary' | 'neutral'

type CardVariant = 'solid' | 'dashed'

const joinClassNames = (...classes: Array<string | undefined>) =>
  classes.filter((value): value is string => Boolean(value)).join(' ')

export function Page({ children, className }: WithChildren) {
  return <main className={joinClassNames('page', className)}>{children}</main>
}

type BadgeProps = WithChildren & {
  variant?: BadgeVariant
}

export function Badge({ children, className, variant = 'primary' }: BadgeProps) {
  return (
    <span
      className={joinClassNames('badge', `badge--${variant}`, className)}
    >
      {children}
    </span>
  )
}

export function Title({ children, className }: WithChildren) {
  return <h1 className={joinClassNames('title', className)}>{children}</h1>
}

export function Text({ children, className }: WithChildren) {
  return <p className={joinClassNames('text', className)}>{children}</p>
}

export function InlineCode({ children, className }: WithChildren) {
  return <code className={joinClassNames('inline-code', className)}>{children}</code>
}

type CardProps = WithChildren & {
  variant?: CardVariant
}

export function Card({ children, className, variant = 'solid' }: CardProps) {
  return (
    <div
      className={joinClassNames(
        'card',
        variant === 'dashed' ? 'card--dashed' : undefined,
        className
      )}
    >
      {children}
    </div>
  )
}

type BulletListProps = {
  items: string[]
  className?: string
}

export function BulletList({ items, className }: BulletListProps) {
  return (
    <ul className={joinClassNames('list', className)}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

type LinkButtonProps = WithChildren & {
  to: string
}

export function LinkButton({ to, children, className }: LinkButtonProps) {
  return (
    <Link className={joinClassNames('link-button', className)} to={to}>
      {children}
    </Link>
  )
}
