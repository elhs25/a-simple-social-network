import { useEffect, useState } from 'react'
import { Container } from '../../components/layout/container/Container'
import { PostPanel } from '../../components/layout/post_panel/PostPanel'
import UserPostCard from '../../components/layout/user_post_card/UserPostCard'
import { withPostProvider } from '../../hooks/providers/PostProvider'
import { withUserProvider } from '../../hooks/providers/UserProvider'
import { getPostAsPostCardProps } from '../../utils/shared/feed.helper'

import './Feed.scss'

function Feed(props: any) {
  const {
    user,
    posts,
    addPost,
  }: { user: User; posts: Post[]; addPost: any } = props
  console.log('posts', props)

  const [postText, setPostText] = useState('')

  const [uIPosts, setUIPosts] = useState([] as UserPostCardProps[])

  const [createPostCollapsed, setCreatePostCollapsed] = useState(true)

  const onFocusCreatePostInput = () => setCreatePostCollapsed(false)

  const onPostContent = () => {
    addPost(user.id, postText)
    setPostText('')
    setCreatePostCollapsed(true)
  }

  useEffect(() => {
    setUIPosts(getPostAsPostCardProps(posts))
  }, [posts])

  return (
    <Container>
      <div className="feed-content">
        <div className="create-post-container">
          <PostPanel
            value={postText}
            onChange={(evt) => setPostText(evt.target.value)}
            collapsed={createPostCollapsed}
            onFocusInput={() => onFocusCreatePostInput()}
            onPost={() => onPostContent()}
          />
        </div>

        {uIPosts.map((post, index) => (
          <UserPostCard key={`post_${index}`} {...post} />
        ))}
      </div>
    </Container>
  )
}

export default withUserProvider(withPostProvider(Feed))
