import { useState } from 'react'
import { Container } from '../../components/layout/container/Container'
import { PublishPanel } from '../../components/layout/publish_panel/PublishPanel'
import { UserPublishPanel } from '../../components/layout/user_publish_panel/UserPublishPanel'

import './Feed.scss'

export default function Feed() {
  const [publishText, setPublishText] = useState('')

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

  return (
    <Container>
      <div className="feed-content">
        <PublishPanel
          value={publishText}
          onChange={(evt) => setPublishText(evt.target.value)}
        />

        {posts.map((post, index) => (
          <UserPublishPanel key={`post_${index}`} {...post} />
        ))}
      </div>
    </Container>
  )
}
