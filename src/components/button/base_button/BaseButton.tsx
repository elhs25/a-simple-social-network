import './BaseButton.scss'

export const BaseButton = (baseButtonProps: BaseButtonProps) => {
  const {
    label,
    withBackground = true,
    backgroundColor = 'main',
    onClick = () => {},
  } = baseButtonProps

  return (
    <button
      style={{
        backgroundColor: !withBackground ? 'unset' : '',
      }}
      className={`base-button ${backgroundColor}`}
      onClick={onClick}
    >
      <label htmlFor="button">{label}</label>
    </button>
  )
}
