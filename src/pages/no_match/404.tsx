import { useLocation, Link } from 'react-router-dom'

import './404.scss'

export default function NotFoundPage() {
  const location = useLocation()

  return (
    <div className="not-found-container">
      <h2>404</h2>
      <h3>
        No se encontró la ruta <code>{location.pathname}</code>
      </h3>
      <h5>
        <Link to="/">Volver</Link>
      </h5>
    </div>
  )
}
