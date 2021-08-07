import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome'
import './IconButton.scss'

export const IconButton = (iconButtonProps: IconButtonProps) => {
  const { onClickIcon = () => {} } = iconButtonProps
  return (
    <button className="iconbutton" onClick={onClickIcon}>
      <FontAwesomeIcon {...iconButtonProps} />
    </button>
  )
}

interface IconButtonProps extends FontAwesomeIconProps {
  onClickIcon?: void
}
