import { useState } from 'react'
import { Container } from '../../components/layout/container/Container'
import { PostPanel } from '../../components/layout/post_panel/PostPanel'
import { UserPostCard } from '../../components/layout/user_post_card/UserPostCard'

import './Feed.scss'

export default function Feed() {
  const [postText, setPostText] = useState('')

  const posts = [
    {
      totalComments: 1,
      totalLikes: 0,
      postOwner: 'Beth Smith',
      createdAt: '2021-08-07 00:00:00',
      postContent:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      profilePhoto: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
      likeReactions: [],
    },
    {
      totalComments: 0,
      totalLikes: 0,
      postOwner: 'Rick Sanchez',
      createdAt: '2021-08-07 00:00:00',
      postContent:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      profilePhoto: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      likeReactions: [],
    },
    {
      totalComments: 0,
      totalLikes: 0,
      postOwner: 'Morty Smith',
      createdAt: '2020-08-06 00:00:00',
      postContent:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      profilePhoto: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
      likeReactions: [],
    },
    {
      totalComments: 0,
      totalLikes: 0,
      postOwner: 'Jerry Smith',
      createdAt: '2021-08-07 22:43:20',
      postContent:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      profilePhoto: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
      likeReactions: [],
    },
    {
      totalComments: 0,
      totalLikes: 4,
      postOwner: 'Summer Smith',
      createdAt: '2021-08-07 22:43:20',
      postContent:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      profilePhoto: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
      likeReactions: [
        'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
        'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
        'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
        'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      ],
    },
  ]

  const [createPostCollapsed, setCreatePostCollapsed] = useState(true)

  const onFocusCreatePostInput = () => setCreatePostCollapsed(false)

  const onPostContent = () => {
    setCreatePostCollapsed(true)
  }

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

        {posts.map((post, index) => (
          <UserPostCard key={`post_${index}`} {...post} />
        ))}
      </div>
    </Container>
  )
}
