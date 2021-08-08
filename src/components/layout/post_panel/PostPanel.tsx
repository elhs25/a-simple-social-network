import { useEffect, useRef, useState } from 'react'
import {
  collapseSection,
  expandSection,
} from '../../../utils/shared/layoutHelper'
import { BaseButton } from '../../button/base_button/BaseButton'
import './PostPanel.scss'

export const PostPanel = (postPanelProps: PostPanelProps) => {
  const {
    placeholder = 'Escribe Aquí tu estado',
    value,
    maxLength = 255,
    onPost = () => {},
    onChange,
  } = postPanelProps

  const postPanelRef: any = useRef(null)
  const [collapsed, setCollapsed] = useState(true)
  const [collapsedHeight, setCollapsedHeight] = useState(0)

  useEffect(() => {
    // store the initial height (collapsed height) of the component
    setCollapsedHeight(postPanelRef.current?.clientHeight)
  }, [])

  const onFocusInput = () => {
    handleCollapsedStatus(false)
  }

  const handleCollapsedStatus = (collapsed: boolean) => {
    if (!postPanelRef.current) return
    !collapsed && expandSection(postPanelRef.current as HTMLElement)
    collapsed &&
      collapseSection(postPanelRef.current as HTMLElement, collapsedHeight)
    setCollapsed(collapsed)
  }

  const onClickPost = () => {
    // post the content
    onPost()

    // then collapse the panel...
    handleCollapsedStatus(true)
  }

  return (
    <div
      className={`post-panel ${collapsed ? '' : 'post-panel--expanded'}`}
      ref={postPanelRef}
    >
      <div className="post-panel--container">
        <div className="input-container">
          <input
            type="text"
            placeholder={placeholder}
            value={value}
            maxLength={maxLength}
            onFocus={() => onFocusInput()}
            onChange={onChange}
          />
          {!collapsed && maxLength && (
            <label>{`${value.length}/${maxLength}`}</label>
          )}
        </div>
        <BaseButton label="Publicar" onClick={() => onClickPost()} />
      </div>
    </div>
  )
}
