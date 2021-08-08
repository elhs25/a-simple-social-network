import { useEffect, useState } from 'react'
import './RoundedProfile.scss'

const strSizes = {
  'x-small': 16,
  small: 32,
  regular: 64,
  large: 128,
}

export const RoundedProfile = (roundedProfileProps: RoundedProfileProps) => {
  const { size = 'regular', src, alt } = roundedProfileProps

  const [finalImgSize, setFinalImgSize] = useState(0)

  useEffect(() => {
    let _size = size
    if (typeof _size !== 'number') {
      _size = strSizes[_size]
    }
    setFinalImgSize(_size)
  }, [size])

  return (
    <div
      style={{
        height: finalImgSize,
        width: finalImgSize,
      }}
      className="rounded-profile"
    >
      <img src={src} alt={alt} />
    </div>
  )
}
