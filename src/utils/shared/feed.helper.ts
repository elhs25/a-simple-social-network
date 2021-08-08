import users from '../../assets/users.json'

export const getPostAsPostCardProps = (currPosts: Post[]) => {
  const posts: UserPostCardProps[] = []

  currPosts.forEach((post) => {
    const user = users.find((user) => user.id === post.userId)

    const likeReactions: string[] = []
    post.reactions &&
      post.reactions.forEach((reaction: Reaction) => {
        if (reaction.like) {
          const user = users.find((user) => user.id === reaction.userId)
          !!user && likeReactions.push(user.profilePhoto)
        }
      })

    if (user) {
      posts.push({
        createdAt: post.createdAt,
        postContent: post.content,
        postOwner: user.name,
        profilePhoto: user.profilePhoto,
        likeReactions,
        comments: post.comments,
      })
    }
  })

  return posts
}

export const reactToPost = (posts: UserPostCardProps[]) => {}
