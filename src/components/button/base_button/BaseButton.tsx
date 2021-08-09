import './BaseButton.scss'

export const BaseButton = (baseButtonProps: BaseButtonProps) => {
  const {
    role,
    label,
    disabled,
    withBackground = true,
    color = 'white',
    fontWeight = 'normal',
    backgroundColor = 'main',
    onClick,
  } = baseButtonProps

  return (
    <button
      role={role}
      style={{ backgroundColor: !withBackground ? 'unset' : '', fontWeight }}
      disabled={disabled}
      className={`base-button ${backgroundColor} ${color}-font `}
      onClick={onClick}
    >
      <span>{label}</span>
    </button>
  )
}
