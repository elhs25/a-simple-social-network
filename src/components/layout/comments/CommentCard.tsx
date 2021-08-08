import { FormatPostCreationDate } from '../../../utils/shared/formater'
import { RoundedProfile } from '../../image/rounded_profile/RoundedProfile'
import './CommentCard.scss'

export const CommentCard = (commentCardProps: CommentCardProps) => {
  const { profilePhoto, commentOwner, createdAt, comment } = commentCardProps

  return (
    <div className="comment-card">
      <div className="comment-card__content">
        <div>
          <RoundedProfile
            src={profilePhoto}
            alt="profile_picture"
            size="small"
          />
        </div>
        <div className="comment-card__content-text">
          <h2>{commentOwner}</h2>
          <p>{comment}</p>
          <h6>{FormatPostCreationDate(createdAt)}</h6>
        </div>
      </div>
    </div>
  )
}
