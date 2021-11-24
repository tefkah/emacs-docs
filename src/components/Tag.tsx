interface TagProps {
  tag: string
  children: any
}

export default function Tag(props: TagProps) {
  const { tag, children } = props
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
    }
  }

  const color = getColor(tag)
  return (
    <span
      style={{ color: color, backgroundColor: color, fontWeight: 300, fontFamily: 'monospace' }}
    >
      {children}
    </span>
  )
}
