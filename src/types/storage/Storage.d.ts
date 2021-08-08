interface Post {
  id: number
  userId: number
  content: string
  createdAt: string // date
  comments: Comment[]
  reactions: Reaction[]
}

interface Comment {
  id: number
  postId: number
  userId: number
  comment: string
  createdAt: string // date
}

interface Reaction {
  id: number
  userId: number
  postId: number
  like?: boolean
  haha?: boolean
  love?: boolean
  sad?: boolean
  amazes?: boolean
  frowning_face?: boolean
  flushed_face?: boolean
}

declare type UserReaction =
  | 'like'
  | 'haha'
  | 'love'
  | 'sad'
  | 'amazes'
  | 'frowning_face'
  | 'flushed_face'
