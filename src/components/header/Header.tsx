import { IconButton } from '../button/icon_button/IconButton'
import './Header.scss'

export const Header = () => {
  return (
    <header className="header-wrapper">
      <div className="header-wrapper__container">
        <div className="header-wrapper__container__title">
          <h2>Merqueo Test</h2>
        </div>
        <div>
          <IconButton icon="bars" />
        </div>
      </div>
    </header>
  )
}
