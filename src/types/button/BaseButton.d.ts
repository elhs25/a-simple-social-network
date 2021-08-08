interface BaseButtonProps {
  label: string
  color?: 'white' | 'main' | 'alt-dark-gray' | undefined
  fontWeight?: number | 'normal' | 'bold' | 'bolder' | 'lighter' | undefined
  disabled?: boolean
  withBackground?: boolean
  backgroundColor?: 'main' | 'white'
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
}
