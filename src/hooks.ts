import { useEffect, useRef, useState, type RefObject } from 'react'
import type { SectionId } from './content'

const prefersReducedMotion = () =>
  matchMedia('(prefers-reduced-motion: reduce)').matches

// The section whose top has passed 35% of the viewport; the last one at page bottom
export const useActiveSection = (ids: readonly SectionId[]): SectionId => {
  const [active, setActive] = useState<SectionId>(ids[0])

  useEffect(() => {
    let frame = 0

    const update = () => {
      frame = 0
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4
      if (atBottom) {
        setActive(ids[ids.length - 1])
        return
      }
      const line = window.innerHeight * 0.35
      let current = ids[0]
      for (const id of ids) {
        const top = document.getElementById(id)?.getBoundingClientRect().top
        if (top !== undefined && top <= line) current = id
      }
      setActive(current)
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [ids])

  return active
}

// True once the element has scrolled into view (and stays true)
export const useInView = <T extends Element>(): [
  RefObject<T | null>,
  boolean,
] => {
  const ref = useRef<T>(null)
  const [seen, setSeen] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return [ref, seen]
}

// Counts from 0 to `target` once `start` is true; jumps straight there for reduced motion
export const useCountUp = (
  target: number,
  start: boolean,
  duration = 1200
): number => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!start) return
    if (prefersReducedMotion()) {
      setValue(target)
      return
    }
    let frame = 0
    const began = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - began) / duration, 1)
      setValue(Math.round(target * (1 - Math.pow(1 - progress, 3))))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [start, target, duration])

  return value
}
