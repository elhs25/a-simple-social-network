import Helmet from 'react-helmet'
import { ENV } from '../../utils/const/environment'

// @ts-ignore
export const PageTitle = ({ title }) => {
  // @ts-ignore
  const defaultTitle = ENV[process.env.NODE_ENV].app_name
  return (
    <Helmet>
      <title>{title ? title : defaultTitle}</title>
    </Helmet>
  )
}
