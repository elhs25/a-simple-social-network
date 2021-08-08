import { useEffect, useRef } from 'react'
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
    onPost,
    onChange,

    collapsed = true,
    collapsedHeight = 77,
    onFocusInput,
  } = postPanelProps

  const postPanelRef: any = useRef(null)
  const prevCollapsedStatus = useRef(true)

  useEffect(() => {
    const handleCollapsedStatus = (collapsed: boolean) => {
      if (!postPanelRef.current) return
      if (prevCollapsedStatus.current !== collapsed) {
        !collapsed && expandSection(postPanelRef.current as HTMLElement)
        collapsed &&
          collapseSection(postPanelRef.current as HTMLElement, collapsedHeight)
        prevCollapsedStatus.current = collapsed
      }
    }
    handleCollapsedStatus(collapsed)
  }, [collapsed, collapsedHeight])

  const onClickPost = () => {
    if (value && value.trim().length > 0) {
      // post the content
      if (onPost) {
        onPost()
      }
    }
  }

  return (
    <div
      style={{ minHeight: collapsedHeight }}
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
            onFocus={onFocusInput}
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
