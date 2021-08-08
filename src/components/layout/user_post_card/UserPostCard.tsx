import {
  FormatPostCreationDate,
  FormatTextReaction,
} from '../../../utils/shared/formater'
import { BaseButton } from '../../button/base_button/BaseButton'
import { RoundedProfile } from '../../image/rounded_profile/RoundedProfile'
import './UserPostCard.scss'

export const UserPostCard = (userPostCard: UserPostCardProps) => {
  const {
    totalComments = 0,
    postOwner,
    createdAt,
    postContent,
    profilePhoto,
    likeReactions = [],
  } = userPostCard

  return (
    <div className="user-post-panel-wrapper">
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
          <label className={`${likeReactions.length === 0 ? 'no-likes' : ''}`}>
            {likeReactions.length === 0
              ? 'Sin likes aún'
              : FormatTextReaction(likeReactions.length, 'like')}
          </label>
        </div>
        {totalComments > 0 && (
          <BaseButton
            withBackground={false}
            label={FormatTextReaction(totalComments, 'comentario')}
            color="main"
            fontWeight="bold"
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
          color={totalComments > 1 ? 'main' : 'alt-dark-gray'}
          fontWeight="bold"
        />
      </div>
    </div>
  )
}
