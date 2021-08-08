interface PostPanelProps {
  value: string
  maxLength?: number
  placeholder?: string
  onPost?: () => void
  onChange?: React.ChangeEventHandler<HTMLInputElement>

  collapsed: boolean
  collapsedHeight?: number
  onFocusInput?: React.FocusEventHandler<HTMLInputElement>
}
