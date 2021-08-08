import {
  FormatPostCreationDate,
  FormatTextReaction,
} from '../../../utils/shared/formater'
import { BaseButton } from '../../button/base_button/BaseButton'
import { RoundedProfile } from '../../image/rounded_profile/RoundedProfile'
import './UserPublishPanel.scss'

export const UserPublishPanel = (userPublishPanel: UserPublishPanelProps) => {
  const {
    totalComments = 0,
    totalLikes = 0,
    postOwner,
    createdAt,
    postContent,
    profilePhoto,
    featuredProfileReactions = [],
  } = userPublishPanel

  return (
    <div className="user-publish-panel-wrapper">
      <div className="publish-content">
        <div>
          <RoundedProfile
            src={profilePhoto}
            alt="profile_picture"
            size="small"
          />
        </div>
        <div className="publish-content-text">
          <h2>{postOwner}</h2>
          <h6>{FormatPostCreationDate(createdAt)}</h6>
          <p>{postContent}</p>
        </div>
      </div>

      <div className="reactions-and-comments">
        <div className="reactions-and-comments__reactions-section">
          <div className="reactions-and-comments__reactions-section__profiles">
            {featuredProfileReactions.map((featuredProfile, index) => (
              <RoundedProfile
                key={`featured_reaction_${index}`}
                src={featuredProfile}
                alt="profile_picture"
                size="x-small"
              />
            ))}
          </div>
          <label>{FormatTextReaction(totalLikes, 'like')}</label>
        </div>
        {totalComments > 0 && (
          <div>
            <label>{FormatTextReaction(totalComments, 'comentario')}</label>
          </div>
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
          color="alt-dark-gray"
          fontWeight="bold"
        />
      </div>
    </div>
  )
}
