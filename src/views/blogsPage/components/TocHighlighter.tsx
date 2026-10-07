'use client'

import { useEffect } from 'react'

type TocHighlighterProps = {
  /** CSS class (from CSS modules) applied to the active TOC link. */
  activeClassName: string
}

/**
 * Client-only enhancement: highlights the TOC link that points to the section
 * currently in view. Works purely over the DOM so it needs no changes to the
 * article markup and degrades gracefully (plain anchor links) without JS.
 */
export const TocHighlighter = ({ activeClassName }: TocHighlighterProps) => {
  useEffect(() => {
    const toc = document.querySelector<HTMLElement>('[data-toc]')
    if (!toc) return

    const links = Array.from(toc.querySelectorAll<HTMLAnchorElement>('a[href^="#"]'))
    if (links.length === 0) return

    const linkById = new Map<string, HTMLAnchorElement>()
    const targets: HTMLElement[] = []

    links.forEach((link) => {
      const id = decodeURIComponent(link.getAttribute('href')?.slice(1) ?? '')
      if (!id) return
      const section = document.getElementById(id)
      if (!section) return
      linkById.set(id, link)
      targets.push(section)
    })

    if (targets.length === 0) return

    const setActive = (id: string | null) => {
      links.forEach((link) => link.classList.remove(activeClassName))
      if (id) linkById.get(id)?.classList.add(activeClassName)
    }

    // Track which sections are currently intersecting and pick the topmost one.
    const visible = new Set<string>()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id
          if (entry.isIntersecting) visible.add(id)
          else visible.delete(id)
        })

        if (visible.size > 0) {
          // Choose the section closest to the top of the viewport.
          let topId: string | null = null
          let topOffset = Number.POSITIVE_INFINITY
          visible.forEach((id) => {
            const el = document.getElementById(id)
            if (!el) return
            const offset = el.getBoundingClientRect().top
            if (offset < topOffset) {
              topOffset = offset
              topId = id
            }
          })
          setActive(topId)
        }
      },
      {
        // Activate a section once it reaches the upper third of the viewport.
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0
      }
    )

    targets.forEach((target) => observer.observe(target))

    return () => observer.disconnect()
  }, [activeClassName])

  return null
}
