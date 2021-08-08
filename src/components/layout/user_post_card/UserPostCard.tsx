import { useState } from 'react'
import {
  FormatPostCreationDate,
  FormatTextReaction,
} from '../../../utils/shared/formater'
import { BaseButton } from '../../button/base_button/BaseButton'
import { RoundedProfile } from '../../image/rounded_profile/RoundedProfile'
import { CollapsibleComments } from '../comments/CollapsibleComments'
import { PostPanel } from '../post_panel/PostPanel'
import './UserPostCard.scss'

export const UserPostCard = (userPostCard: UserPostCardProps) => {
  const {
    postOwner,
    createdAt,
    postContent,
    profilePhoto,
    likeReactions = [],
    comments = [],
  } = userPostCard

  const [userComment, setUserComment] = useState('')
  const [postCommentCollapsed, setPostCommentCollapsed] = useState(true)

  const showPostCommentForm = () => {
    setCommentListCollapsed(true)
    setPostCommentCollapsed(false)
  }

  const onPostContent = () => {
    setCommentListCollapsed(true)
    setPostCommentCollapsed(true)
  }

  const [commentListCollapsed, setCommentListCollapsed] = useState(true)

  const showCommentList = () => {
    setPostCommentCollapsed(true)
    setCommentListCollapsed(!commentListCollapsed)
  }

  return (
    <div className="user-post-panel-wrapper">
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
          <BaseButton
            withBackground={false}
            label="Reaccionar"
            color="alt-dark-gray"
            fontWeight="bold"
          />
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
        />
      </div>
    </div>
  )
}
