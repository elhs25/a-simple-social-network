import { createContext, useContext, useEffect, useMemo, useState } from 'react'

export const defaultPosts: PostHook = {
  posts: [],
  setPosts: () => {},
}

export const PostContext = createContext(defaultPosts)

export default function PostProvider({ children }: any) {
  const [posts, setPosts] = useState([] as Post[])
  const value = useMemo(
    () => ({
      posts,
      setPosts,
    }),
    [posts],
  )

  useEffect(() => {
    const strPosts = localStorage.getItem('posts')
    if (strPosts) {
      setPosts(JSON.parse(strPosts) as Post[])
    }
  }, [])

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>
}

export function withPostProvider(Component: any) {
  return (props: any) => {
    const { posts, setPosts } = useContext(PostContext)

    const savePostsInStorage = (posts: Post[]) =>
      localStorage.setItem('posts', JSON.stringify(posts))

    const generateId = (): number => new Date().getUTCMilliseconds()

    const addPost = (userId: number, content: string) => {
      const newPosts = [
        {
          userId,
          content,
          createdAt: new Date().toISOString(),
          id: generateId(),
        } as Post,
        ...posts,
      ]
      setPosts(newPosts)
      savePostsInStorage(newPosts)
    }

    const addCommentToPost = (
      userId: number,
      comment: string,
      postId: number,
    ) => {
      const _posts = [...posts]
      const selectedPostIndex = _posts.findIndex((post) => post.id === postId)
      if (selectedPostIndex >= 0) {
        _posts[selectedPostIndex].comments.push({
          id: generateId(),
          postId,
          userId,
          comment,
          createdAt: new Date().toISOString(),
        } as Comment)
      }
      setPosts([..._posts])
      savePostsInStorage(_posts)
      // const newPosts = posts.splice(selectedPostIndex, 1, post)
    }

    const addReactionToPost = (
      userId: number,
      postId: number,
      reaction: UserReaction,
    ) => {
      const _posts = [...posts]
      const selectedPostIndex = _posts.findIndex((post) => post.id === postId)
      if (selectedPostIndex >= 0) {
        const previousUserReactionIndex = _posts[
          selectedPostIndex
        ].reactions.findIndex((reaction) => reaction.userId === userId)
        if (previousUserReactionIndex === -1) {
          _posts[selectedPostIndex].reactions.push({
            id: generateId(),
            postId,
            userId,
            [reaction]: true,
          } as Reaction)
        } else {
          const _reaction =
            _posts[selectedPostIndex].reactions[previousUserReactionIndex]
          _posts[selectedPostIndex].reactions[previousUserReactionIndex] = {
            ..._reaction,
            [reaction]: !_reaction[reaction],
          }
        }
      }
      setPosts([..._posts])
      savePostsInStorage(_posts)
    }

    return (
      <Component
        {...props}
        posts={posts}
        addPost={addPost}
        addCommentToPost={addCommentToPost}
        addReactionToPost={addReactionToPost}
      />
    )
  }
}
