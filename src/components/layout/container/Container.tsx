import './Container.scss'

export const Container = ({ children }: any) => {
  return (
    <div className="content-wrapper">
      <div className="content-wrapper__container">{children}</div>
    </div>
  )
}
