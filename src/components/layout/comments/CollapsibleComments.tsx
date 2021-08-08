import { useEffect, useRef } from 'react'
import {
  collapseSection,
  expandSection,
} from '../../../utils/shared/layoutHelper'
import './CollapsibleComments.scss'
import { CommentCard } from './CommentCard'

export const CollapsibleComments = (
  collapsibleCommentsProps: CollapsibleCommentsProps,
) => {
  const { collapsed, collapsedHeight, comments } = collapsibleCommentsProps

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
