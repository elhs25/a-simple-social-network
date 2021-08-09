import './App.css'
import { PageRoutes } from '../routes'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faBars,
  faTimes,
  faThumbsUp,
  faLaughSquint,
  faGrinHearts,
  faSadCry,
  faFrown,
  faFlushed,
} from '@fortawesome/free-solid-svg-icons'
import Header from './header/Header'
import UserProvider from '../hooks/providers/UserProvider'
import PostProvider from '../hooks/providers/PostProvider'

// Here we add all icons that we'll use around the app lifecycle...
library.add(
  faBars,
  faTimes,
  faThumbsUp,
  faLaughSquint,
  faGrinHearts,
  faSadCry,
  faFrown,
  faFlushed,
)
function App() {
  return (
    <UserProvider>
      <PostProvider>
        <Header />
        <PageRoutes />
      </PostProvider>
    </UserProvider>
  )
}

export default App
