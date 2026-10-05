'use client'
import { FC, useCallback, useEffect, useState } from 'react'
import classNames from 'classnames'
import styles from './tenetTitle.module.scss'
import { TenetTitleProps } from './tenetTitle.types'
import { Button } from '@/ui'
import { useSetAtom } from 'jotai/react'
import { openModalContent } from '@/shared/atoms/openModal'

const TenetTitle: FC<TenetTitleProps> = ({
  className,
  title,
  span,
  end
}) => {
  const rootClassName = classNames(styles.root, className)
  const setModalContent = useSetAtom(openModalContent)

  const [maxWidth, setMaxWidth] = useState<string | undefined>(
    window.innerWidth > 768 ? '228px' : undefined
  );

  const openWindows = useCallback((name: string) => {
    setModalContent(name)
  }, [setModalContent])

  useEffect(() => {
    const handleResize = () => {
      setMaxWidth(window.innerWidth > 768 ? '228px' : undefined);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={rootClassName}>
      <h2>{title} {span} {end}</h2>
      <Button
        tag="button"
        onClick={() => openWindows('детали')}
        maxWidth={maxWidth}
      >
        Заказать сайт
      </Button>
    </div>
  )
}

export default TenetTitle
