import './App.css'
import { PageRoutes } from '../routes'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Header } from './header/Header'

// Here we add all icons that we'll use around the app lifecycle...
library.add(faBars, faTimes)

function App() {
  return (
    <>
      <Header />
      <PageRoutes />
    </>
  )
}

export default App
