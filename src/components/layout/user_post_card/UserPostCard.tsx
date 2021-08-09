import { useEffect, useState } from 'react'
import { withPostProvider } from '../../../hooks/providers/PostProvider'
import { withUserProvider } from '../../../hooks/providers/UserProvider'
import { getCommentsAsCommentCardProps } from '../../../utils/shared/feed.helper'
import {
  FormatPostCreationDate,
  FormatTextReaction,
} from '../../../utils/shared/formater'
import { BaseButton } from '../../button/base_button/BaseButton'
import { RoundedProfile } from '../../image/rounded_profile/RoundedProfile'
import { CollapsibleComments } from '../comments/CollapsibleComments'
import { PostPanel } from '../post_panel/PostPanel'
import { ReactionCard } from '../reaction_card/ReactionCard'
import './UserPostCard.scss'

const UserPostCard = (props: any) => {
  const {
    role,
    postId,
    postOwner,
    createdAt,
    postContent,
    profilePhoto,
    likeReactions = [],
    comments = [],
  } = props as UserPostCardProps // Component props

  const {
    user,
    addCommentToPost,
    addReactionToPost,
  }: { user: User; addCommentToPost: any; addReactionToPost: any } = props // Reducer props

  const [userComment, setUserComment] = useState('')
  const [postCommentCollapsed, setPostCommentCollapsed] = useState(true)

  const [uIPostComments, setUIPostComments] = useState([] as CommentCardProps[])
  useEffect(() => {
    setUIPostComments(getCommentsAsCommentCardProps(comments))
    // eslint-disable-next-line
  }, [comments.length])

  const showPostCommentForm = () => {
    setCommentListCollapsed(true)
    setPostCommentCollapsed(!postCommentCollapsed)
  }

  const onPostContent = () => {
    setCommentListCollapsed(true)
    setPostCommentCollapsed(true)

    addCommentToPost(user.id, userComment, postId)
    setUserComment('')
  }

  const [reactionCardVisible, setReactionCardVisible] = useState(false)
  const onReactToPost = (reaction: UserReaction) => {
    addReactionToPost(user.id, postId, reaction)
  }

  const [commentListCollapsed, setCommentListCollapsed] = useState(true)

  const showCommentList = () => {
    setPostCommentCollapsed(true)
    setCommentListCollapsed(!commentListCollapsed)
  }

  return (
    <div className="user-post-panel-wrapper" role={role}>
      <div className="user-post-panel-wrapper__container">
        <div className="post-content">
          <div>
            <RoundedProfile
              src={profilePhoto}
              alt="profile_picture"
              size="small"
            />
          </div>
          <div className="post-content-text">
            <h2>{postOwner}</h2>
            <h6>{FormatPostCreationDate(createdAt)}</h6>
            <p>{postContent}</p>
          </div>
        </div>

        <div className="reactions-and-comments">
          <div className="reactions-and-comments__reactions-section">
            <div className="reactions-and-comments__reactions-section__profiles">
              {likeReactions.slice(0, 3).map((featuredProfile, index) => (
                <RoundedProfile
                  key={`featured_reaction_${index}`}
                  src={featuredProfile}
                  alt="profile_picture"
                  size="x-small"
                />
              ))}
            </div>
            <label
              className={`${likeReactions.length === 0 ? 'no-likes' : ''}`}
            >
              {likeReactions.length === 0
                ? 'Sin likes aún'
                : FormatTextReaction(likeReactions.length, 'like')}
            </label>
          </div>
          {comments.length > 0 && (
            <BaseButton
              withBackground={false}
              label={FormatTextReaction(comments.length, 'comentario')}
              color="main"
              fontWeight="bold"
              onClick={() => showCommentList()}
            />
          )}
        </div>

        <hr />

        <div className="reaction-buttons">
          <div className="reaction-buttons--container">
            <ReactionCard
              visible={reactionCardVisible}
              onReact={onReactToPost}
              onClickOutside={() => setReactionCardVisible(false)}
            />
            <BaseButton
              withBackground={false}
              label="Reaccionar"
              color="alt-dark-gray"
              fontWeight="bold"
              onClick={() => setReactionCardVisible(!reactionCardVisible)}
            />
          </div>
          <BaseButton
            withBackground={false}
            label="Comentar"
            color={comments.length > 1 ? 'main' : 'alt-dark-gray'}
            fontWeight="bold"
            onClick={() => showPostCommentForm()}
          />
        </div>
      </div>

      <div className="add-comment-container">
        <PostPanel
          value={userComment}
          placeholder="Escribe un comentario"
          collapsedHeight={0}
          onChange={(evt) => setUserComment(evt.target.value)}
          collapsed={postCommentCollapsed}
          onPost={() => onPostContent()}
        />
      </div>

      <div className="comment-list-container">
        <CollapsibleComments
          collapsed={commentListCollapsed}
          collapsedHeight={0}
          comments={uIPostComments}
        />
      </div>
    </div>
  )
}

export default withUserProvider(withPostProvider(UserPostCard))
