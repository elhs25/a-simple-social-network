interface CollapsibleBaseProps {
  collapsed: boolean
  collapsedHeight?: number
}

interface PostPanelProps extends CollapsibleBaseProps {
  value: string
  maxLength?: number
  placeholder?: string
  onPost?: () => void
  onChange?: React.ChangeEventHandler<HTMLInputElement>

  onFocusInput?: React.FocusEventHandler<HTMLInputElement>
}

interface CollapsibleCommentsProps extends CollapsibleBaseProps {
  comments: CommentCardProps[]
}

interface CommentCardProps {
  commentOwner: string
  createdAt: string
  profilePhoto: string
  comment: string
}
