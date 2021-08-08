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
    maxLength = 255,
    onPublish = () => {},
    onChange,
  } = publishPanelProps

  const publishPanelRef: any = useRef(null)
  const [collapsed, setCollapsed] = useState(true)
  const [collapsedHeight, setCollapsedHeight] = useState(0)

  useEffect(() => {
    // store the initial height (collapsed height) of the component
    setCollapsedHeight(publishPanelRef.current?.clientHeight)
  }, [])

  const onFocusInput = () => {
    handleCollapsedStatus(false)
  }

  const handleCollapsedStatus = (collapsed: boolean) => {
    if (!publishPanelRef.current) return
    !collapsed && expandSection(publishPanelRef.current as HTMLElement)
    collapsed &&
      collapseSection(publishPanelRef.current as HTMLElement, collapsedHeight)
    setCollapsed(collapsed)
  }

  const onClickPublish = () => {
    // publish the content
    onPublish()

    // then collapse the panel...
    handleCollapsedStatus(true)
  }

  return (
    <div
      className={`publish-panel ${collapsed ? '' : 'publish-panel--expanded'}`}
      ref={publishPanelRef}
    >
      <div className="publish-panel--container">
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
        <BaseButton label="Publicar" onClick={() => onClickPublish()} />
      </div>
    </div>
  )
}
