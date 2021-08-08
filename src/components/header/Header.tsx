import { useState } from 'react'
import { IconButton } from '../button/icon_button/IconButton'
import { SideBar } from '../layout/sidebar/SideBar'
import './Header.scss'

export const Header = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false)

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
          profilePhoto="https://rickandmortyapi.com/api/character/avatar/4.jpeg"
          username="Beth Smith"
          onClick={() => setSidebarVisible(false)}
        />
      )}
    </>
  )
}
