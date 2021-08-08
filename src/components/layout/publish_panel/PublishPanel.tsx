import { useEffect, useRef, useState } from 'react'
import {
  collapseSection,
  expandSection,
} from '../../../utils/shared/layoutHelper'
import { BaseButton } from '../../button/base_button/BaseButton'
import './PublishPanel.scss'

export const PublishPanel = (publishPanelProps: PublishPanelProps) => {
  const {
    placeholder = 'Escribe Aquí tu estado',
    value,
    onPublish = () => {},
    onChange = () => {},
  } = publishPanelProps

  const publishPanelRef: any = useRef(null)
  const [collapsed, setCollapsed] = useState(true)
  const [collapsedHeight, setCollapsedHeight] = useState(0)

  useEffect(() => {
    setCollapsedHeight(publishPanelRef.current?.clientHeight)
  }, [])

  const onFocusInput = () => {
    if (!publishPanelRef.current) return

    collapsed && expandSection(publishPanelRef.current as HTMLElement)
    !collapsed &&
      collapseSection(publishPanelRef.current as HTMLElement, collapsedHeight)

    setCollapsed(!collapsed)
  }

  const onClickPublish = () => {
    // publish the content
    onPublish()

    // then collapse the panel...
  }

  return (
    <div
      className={`publish-panel ${collapsed ? '' : 'publish-panel--expanded'}`}
      ref={publishPanelRef}
    >
      <div className="publish-panel--container">
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onFocus={onFocusInput}
          onChange={onChange}
        />
        <BaseButton label="Publicar" onClick={onClickPublish()} />
      </div>
    </div>
  )
}
