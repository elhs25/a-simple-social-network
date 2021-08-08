import { useState } from 'react'
import { withUserProvider } from '../../hooks/providers/UserProvider'
import { IconButton } from '../button/icon_button/IconButton'
import { SideBar } from '../layout/sidebar/SideBar'
import './Header.scss'

const Header = (props: any) => {
  const [sidebarVisible, setSidebarVisible] = useState(false)
  const { user }: { user: User } = props

  return (
    <>
      <header className="header-wrapper">
        <div className="header-wrapper__container">
          <div className="header-wrapper__container__title">
            <h2>Merqueo Test</h2>
          </div>
          <div>
            <IconButton icon="bars" onClick={() => setSidebarVisible(true)} />
          </div>
        </div>
      </header>
      {sidebarVisible && (
        <SideBar
          profilePhoto={user.profilePhoto}
          username={user.name}
          onClick={() => setSidebarVisible(false)}
        />
      )}
    </>
  )
}

export default withUserProvider(Header)
