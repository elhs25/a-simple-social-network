interface PublishPanelProps {
  value: string
  maxLength?: number | undefined
  placeholder?: string
  onPublish?: void
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
}
