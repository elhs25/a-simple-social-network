interface UserPublishPanelProps {
  totalComments?: number
  totalLikes?: number
  postOwner: string
  createdAt: string
  postContent: string
  profilePhoto: string
  featuredProfileReactions: string[]
}

interface userReactions {
  profilePhoto: string
  comments?: string[]
  like?: number
  haha?: number
  love?: number
  sad?: number
  amazes?: number
  frowning_face?: number
  flushed_face?: number
}
