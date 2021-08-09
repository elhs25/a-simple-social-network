import { IconButton } from '../../button/icon_button/IconButton'
import { RoundedProfile } from '../../image/rounded_profile/RoundedProfile'
import './SideBar.scss'

export const SideBar = ({
  profilePhoto = '',
  username = '',
  onClick = () => {},
}) => {
  return (
    <div className="sidebar-content">
      <div className="close-button">
        <IconButton icon="times" size="2x" onClick={() => onClick()} />
      </div>
      <RoundedProfile
        src={profilePhoto}
        alt="profile_photo_sidebar"
        size="large"
      />
      <label>Hola {username}</label>
    </div>
  )
}
