interface UserPostCardProps {
  role?: string
  postId?: number
  totalComments?: number
  postOwner: string
  createdAt: string
  postContent: string
  profilePhoto: string
  likeReactions: string[]
  comments: Comment[]
}

interface ReactionCardProps {
  visible: boolean
  onReact?: (reaction: UserReaction) => void
  onClickOutside: () => void
}
