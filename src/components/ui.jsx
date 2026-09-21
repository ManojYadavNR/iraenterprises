import { useEffect, useRef, useState } from 'react'
import { useInView } from '../hooks/useInView.js'

/* Wraps children in a scroll-triggered reveal. */
export function Reveal({ as: Tag = 'div', variant = '', delay = 0, className = '', children, ...rest }) {
  const [ref, inView] = useInView()
  return (
    <Tag
      ref={ref}
      style={{ '--reveal-delay': `${delay}ms` }}
      className={`reveal ${variant} ${inView ? 'is-in' : ''} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export function Eyebrow({ children, tone = 'dark', className = '' }) {
  const colour = tone === 'light' ? 'text-lime-soft' : 'text-forest-600'
  return (
    <span className={`inline-flex items-center gap-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.24em] ${colour} ${className}`}>
      <Leaf className="h-3.5 w-3.5" />
      {children}
    </span>
  )
}

export function SectionTitle({ children, tone = 'dark', className = '' }) {
  const colour = tone === 'light' ? 'text-cream' : 'text-forest-900'
  return (
    <h2 className={`font-display text-[clamp(2rem,4.4vw,3.6rem)] font-semibold leading-[1.06] tracking-[-0.02em] ${colour} ${className}`}>
      {children}
    </h2>
  )
}

export function Leaf({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M20.5 3.5c0 9.2-5.1 14-11.4 14A6.6 6.6 0 0 1 3 12.6C3 7.4 9.6 5.3 20.5 3.5Z"
        fill="currentColor"
      />
      <path d="M17 7C11.5 9 7.4 13 5 20.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" opacity=".55" />
    </svg>
  )
}

/* Counts up to `value` the first time it becomes visible. */
export function Counter({ value, suffix = '', duration = 1700 }) {
  const [ref, inView] = useInView({ threshold: 0.5 })
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!inView) return
    let raf
    const start = performance.now()
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - t, 3)
      setN(Math.round(value * eased))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value, duration])

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  )
}

/* Image that fades and un-zooms once loaded — stops the layout snapping. */
export function SmartImage({ src, alt, className = '', imgClassName = '', ratio = '4/3', priority = false }) {
  const [loaded, setLoaded] = useState(false)
  const imgRef = useRef(null)

  useEffect(() => {
    if (imgRef.current?.complete) setLoaded(true)
  }, [])

  return (
    <div className={`relative overflow-hidden bg-sand ${className}`} style={{ aspectRatio: ratio }}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`h-full w-full object-cover transition-[opacity,transform] duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
          loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
        } ${imgClassName}`}
      />
    </div>
  )
}
