'use client'

import { FC, useRef, useState } from 'react'
import classNames from 'classnames'

// Импорты иконок
import figmaIcon from '@icons/tools/figma.svg'

import styles from './tools.module.scss'
import { ToolsProps, Tool } from './tools.types'

const tools: Tool[] = [
  { id: 'figma', name: 'Figma', Icon: figmaIcon },
  { id: 'photoshop', name: 'Photoshop', Icon: figmaIcon },
  { id: 'illustrator', name: 'Illustrator', Icon: figmaIcon },
  { id: 'xd', name: 'Adobe XD', Icon: figmaIcon },
  { id: 'after-effects', name: 'After Effects', Icon: figmaIcon },
  { id: 'premiere', name: 'Premiere Pro', Icon: figmaIcon },
  { id: 'indesign', name: 'InDesign', Icon: figmaIcon },
  { id: 'lightroom', name: 'Lightroom', Icon: figmaIcon },
  { id: 'blender', name: 'Blender', Icon: figmaIcon }
]

const platforms: Tool[] = [
  { id: 'vk', name: 'VK', Icon: figmaIcon },
  { id: 'telegram', name: 'Telegram', Icon: figmaIcon },
  { id: 'whatsapp', name: 'WhatsApp', Icon: figmaIcon },
  { id: 'instagram', name: 'Instagram', Icon: figmaIcon },
  { id: 'youtube', name: 'YouTube', Icon: figmaIcon },
  { id: 'facebook', name: 'Facebook', Icon: figmaIcon },
  { id: 'tiktok', name: 'TikTok', Icon: figmaIcon },
  { id: 'pinterest', name: 'Pinterest', Icon: figmaIcon },
  { id: 'linkedin', name: 'LinkedIn', Icon: figmaIcon }
]

const Tools: FC<ToolsProps> = ({
  className,
  title = 'Работаем, используя надежные платформы и инструменты'
}) => {
  const rootClassName = classNames(styles.root, className)
  const [textPosition, setTextPosition] = useState<{ [key: string]: number }>({})
  const itemRefs = useRef<{ [key: string]: HTMLDivElement }>({})
  const nameRefs = useRef<{ [key: string]: HTMLSpanElement }>({})

  const calculatePosition = (id: string) => {
    const item = itemRefs.current[id]
    const name = nameRefs.current[id]
    if (!item || !name) return

    const itemRect = item.getBoundingClientRect()
    const nameRect = name.getBoundingClientRect()
    const centerPosition = (itemRect.width / 2) - (nameRect.width / 2)
    setTextPosition(prev => ({ ...prev, [id]: centerPosition }))
  }

  const handleMouseEnter = (id: string) => {
    calculatePosition(id)
  }

  const handleMouseLeave = (id: string) => {
    setTextPosition(prev => {
      const newPos = { ...prev }
      delete newPos[id]
      return newPos
    })
  }

  return (
    <div className={rootClassName}>
      <h2 className={styles.title}>{title}</h2>

      <div className={styles.content}>
        <div className={styles.sections}>
          <div className={styles.section}>
            <h3 className={styles.subtitle}>Инструменты</h3>
            <div className={styles.grid}>
              {tools.map((tool) => (
                <div
                  key={tool.id}
                  className={styles.item}
                  ref={el => {
                    if (el) itemRefs.current[tool.id] = el
                  }}
                  onMouseEnter={() => handleMouseEnter(tool.id)}
                  onMouseLeave={() => handleMouseLeave(tool.id)}
                >
                  <div className={styles.iconWrapper}>
                    <tool.Icon className={styles.icon} />
                  </div>
                  <span
                    className={styles.name}
                    ref={el => {
                      if (el) nameRefs.current[tool.id] = el
                    }}
                    style={{
                      transform: textPosition[tool.id] ? `translateX(${textPosition[tool.id]}px)` : 'none'
                    }}
                  >
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.section}>
            <h3 className={styles.subtitle}>Платформы</h3>
            <div className={styles.grid}>
              {platforms.map((platform) => (
                <div
                  key={platform.id}
                  className={styles.item}
                  ref={el => {
                    if (el) itemRefs.current[platform.id] = el
                  }}
                  onMouseEnter={() => handleMouseEnter(platform.id)}
                  onMouseLeave={() => handleMouseLeave(platform.id)}
                >
                  <div className={styles.iconWrapper}>
                    <platform.Icon className={styles.icon} />
                  </div>
                  <span
                    className={styles.name}
                    ref={el => {
                      if (el) nameRefs.current[platform.id] = el
                    }}
                    style={{
                      transform: textPosition[platform.id] ? `translateX(${textPosition[platform.id]}px)` : 'none'
                    }}
                  >
                    {platform.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tools
