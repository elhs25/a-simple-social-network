import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRef, useState } from 'react'
import { useOutsideAlerter } from '../../../hooks/OutsideAlerter'
import { IconButton } from '../../button/icon_button/IconButton'
import './ReactionCard.scss'

export const ReactionCard = (reactionCardProps: ReactionCardProps) => {
  const reactions = {
    like: {
      className: 'main-font',
      icon: 'thumbs-up',
      label: 'Me gusta',
      color: '',
    },
    haha: {
      className: '',
      icon: 'laugh-squint',
      label: 'Me divierte',
      color: '#ffc400',
    },
    love: {
      className: '',
      icon: 'grin-hearts',
      label: 'Me encanta',
      color: '#ffc400',
    },
    sad: {
      className: '',
      icon: 'sad-cry',
      label: 'Me entristece',
      color: '#ffc400',
    },
    frowning_face: {
      className: '',
      icon: 'frown',
      label: 'Me decepciona',
      color: '#ffc400',
    },
    flushed_face: {
      className: '',
      icon: 'flushed',
      label: 'Me asombra',
      color: '#ffc400',
    },
    amazes: {
      className: '',
      icon: 'flushed',
      label: 'Me asombra',
      color: '#ffc400',
    },
  }

  const { visible, onReact, onClickOutside } = reactionCardProps
  const reactionCardRef = useRef(null)
  useOutsideAlerter(reactionCardRef, onClickOutside)

  const reactionRef: any = useRef()
  const [selectedReactionVisible, setSelectedReactionVisible] = useState(false)
  const [reaction, setReaction] = useState(reactions.like)
  const onReactClicked = (reaction: UserReaction) => {
    onReact && onReact(reaction)
    setReaction(reactions[reaction])

    if (reactionRef.current) {
      clearTimeout(reactionRef.current)
    }
    setSelectedReactionVisible(true)
    reactionRef.current = setTimeout(() => {
      setSelectedReactionVisible(false)
      reactionRef.current = null
    }, 500)
  }

  return (
    <div
      className={`reaction-card-wrapper ${visible ? '' : 'hidden'}`}
      ref={reactionCardRef}
    >
      <div className="reaction-card-wrapper__container">
        <IconButton
          className="main-font"
          icon="thumbs-up"
          size="1x"
          onClick={() => onReactClicked('like')}
        />
        <IconButton
          icon="laugh-squint"
          color="#ffc400"
          size="1x"
          onClick={() => onReactClicked('haha')}
        />
        <IconButton
          icon="grin-hearts"
          color="#ffc400"
          size="1x"
          onClick={() => onReactClicked('love')}
        />
        <IconButton
          icon="sad-cry"
          color="#ffc400"
          size="1x"
          onClick={() => onReactClicked('sad')}
        />
        <IconButton
          icon="frown"
          color="#ffc400"
          size="1x"
          onClick={() => onReactClicked('frowning_face')}
        />
        <IconButton
          icon="flushed"
          color="#ffc400"
          size="1x"
          onClick={() => onReactClicked('flushed_face')}
        />
      </div>

      {selectedReactionVisible && (
        <div className="reaction-card-wrapper__reaction">
          <FontAwesomeIcon
            className={reaction.className}
            size="1x"
            icon={reaction.icon as IconProp}
            color={reaction.color}
          />
          <span>{reaction.label}</span>
        </div>
      )}
    </div>
  )
}
