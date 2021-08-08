interface PostPanelProps {
  value: string
  maxLength?: number | undefined
  placeholder?: string
  onPost?: void
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
}
