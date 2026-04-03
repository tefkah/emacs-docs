import React from 'react'

interface TagProps {
  tag: string
  children: React.ReactNode
}

export default function Tag({ tag, children }: TagProps): React.ReactNode {
  const getColor = (key: string) => {
    switch (key) {
      case 'function':
        return 'red'
      case 'user-option':
        return 'blue'
      case 'variable':
        return 'green'
      case 'special form':
        return 'yellow'
      default:
        return undefined
    }
  }

  const color = getColor(tag)

  return (
    <span
      style={{ color, backgroundColor: color, fontWeight: 300, fontFamily: 'monospace' }}
    >
      {children}
    </span>
  )
}
