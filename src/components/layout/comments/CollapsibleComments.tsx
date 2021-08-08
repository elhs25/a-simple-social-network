import { useEffect, useRef } from 'react'
import {
  collapseSection,
  expandSection,
} from '../../../utils/shared/layoutHelper'
import './CollapsibleComments.scss'
import { CommentCard } from './CommentCard'

const comments = [
  {
    profilePhoto: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    commentOwner: 'Morty Smith',
    createdAt: '2021-08-01 11:00:00',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    profilePhoto: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    commentOwner: 'Morty Smith',
    createdAt: '2021-08-01 11:00:00',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    profilePhoto: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    commentOwner: 'Morty Smith',
    createdAt: '2021-08-01 11:00:00',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    profilePhoto: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    commentOwner: 'Morty Smith',
    createdAt: '2021-08-01 11:00:00',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
]

export const CollapsibleComments = (
  collapsibleCommentsProps: CollapsibleCommentsProps,
) => {
  const { collapsed, collapsedHeight } = collapsibleCommentsProps

  const collapsibleCommentsPanelRef: any = useRef(null)
  const prevCollapsedStatus = useRef(true)

  useEffect(() => {
    const handleCollapsedStatus = (collapsed: boolean) => {
      if (!collapsibleCommentsPanelRef.current) return
      if (prevCollapsedStatus.current !== collapsed) {
        !collapsed &&
          expandSection(collapsibleCommentsPanelRef.current as HTMLElement)
        collapsed &&
          collapseSection(
            collapsibleCommentsPanelRef.current as HTMLElement,
            collapsedHeight,
          )
        prevCollapsedStatus.current = collapsed
      }
    }
    handleCollapsedStatus(collapsed)
  }, [collapsed, collapsedHeight])

  //   TODO: Fix expand animation
  return (
    <div
      style={{ minHeight: collapsedHeight }}
      className={`collapsible-comments ${
        collapsed ? '' : 'collapsible-comments--expanded'
      }`}
      ref={collapsibleCommentsPanelRef}
    >
      {comments.map((comment, index) => (
        <CommentCard key={`comment_${index}`} {...comment} />
      ))}
    </div>
  )
}
