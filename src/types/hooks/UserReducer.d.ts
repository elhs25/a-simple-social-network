interface UserHook {
  user: User
  setUser: React.Dispatch<React.SetStateAction<T>>
}

interface User {
  id: number
  name: string
  profilePhoto: string
}

interface PostHook {
  posts: Post[]
  setPosts: React.Dispatch<React.SetStateAction<T>>
}
