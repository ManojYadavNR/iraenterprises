import { useEffect, useRef, useState } from 'react'
import { film } from '../data/site.js'
import { useInView, usePrefersReducedMotion } from '../hooks/useInView.js'
import { Eyebrow, Reveal, SectionTitle } from './ui.jsx'
import { SCENE_COMPONENTS } from './FilmScenes.jsx'
import '../styles/film.css'

const SCENE_MS = 5200
const COUNT = SCENE_COMPONENTS.length

export default function Film() {
  const [stageRef, inView] = useInView({ threshold: 0.3, once: false })
  const reduced = usePrefersReducedMotion()

  const [paused, setPaused] = useState(false)
  const [scene, setScene] = useState(0)
  const [runId, setRunId] = useState(0)
  // On a machine with "reduce motion" set, the story waits for a tap
  // instead of freezing — the animation IS the content here.
  const [optedIn, setOptedIn] = useState(false)

  const sceneRef = useRef(0)
  const elapsedRef = useRef(0)
  const lastRef = useRef(0)
  const barsRef = useRef([])

  const motionOk = !reduced || optedIn
  const playing = inView && !paused && motionOk

  useEffect(() => {
    if (!playing) {
      lastRef.current = 0
      return
    }
    let raf
    const step = (now) => {
      if (!lastRef.current) lastRef.current = now
      elapsedRef.current += now - lastRef.current
      lastRef.current = now

      if (elapsedRef.current >= SCENE_MS) {
        elapsedRef.current = 0
        sceneRef.current = (sceneRef.current + 1) % COUNT
        setScene(sceneRef.current)
      }

      barsRef.current.forEach((el, i) => {
        if (!el) return
        const p = i < sceneRef.current ? 1 : i > sceneRef.current ? 0 : elapsedRef.current / SCENE_MS
        el.style.transform = `scaleX(${p})`
      })

      raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [playing])

  const jumpTo = (i) => {
    sceneRef.current = i
    elapsedRef.current = 0
    setScene(i)
    setRunId((r) => r + 1)
    setPaused(false)
    setOptedIn(true)
  }

  const start = () => {
    setOptedIn(true)
    setPaused(false)
    elapsedRef.current = 0
    setRunId((r) => r + 1)
  }

  const Scene = SCENE_COMPONENTS[scene]
  const current = film.scenes[scene]

  return (
    <section id="film" className="relative scroll-mt-24 overflow-hidden bg-forest-950 py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/3 rounded-full bg-forest-600/22 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow tone="light">{film.eyebrow}</Eyebrow>
          <SectionTitle tone="light" className="mt-5">
            <span className="text-gradient">{film.title}</span>
          </SectionTitle>
          <p className="mx-auto mt-5 max-w-xl text-[1rem] leading-relaxed text-cream/62">{film.sub}</p>
        </Reveal>

        {/* ------------------------------------------------ the stage */}
        <Reveal variant="reveal-scale" delay={150} className="mt-12">
          <div
            className={`fl-film relative ${paused ? 'is-paused' : ''} ${inView ? '' : 'is-idle'} ${
              motionOk ? 'is-motion' : ''
            }`}
          >
          <div
            ref={stageRef}
            className="fl-stage relative aspect-[16/10] w-full overflow-hidden rounded-[1.75rem] border border-lime-brand/16 bg-gradient-to-b from-[#0a2814] via-[#0d3319] to-[#071d0e] shadow-[0_50px_110px_-50px_rgba(0,0,0,0.95)] sm:aspect-video"
          >
            {/* ambient light + drifting leaves sit behind every scene */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-[-18%] h-[60%] w-[70%] -translate-x-1/2 rounded-full bg-lime-brand/12 blur-3xl fl-anim fl-sun"
              style={{ '--dur': '7s' }}
            />
            <svg viewBox="0 0 1200 675" className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
              {[
                { x: 1120, y: 90, d: 0, s: 0.5 },
                { x: 980, y: 40, d: 4, s: 0.36 },
                { x: 1180, y: 240, d: 8, s: 0.44 },
              ].map((l, i) => (
                <g key={i} transform={`translate(${l.x} ${l.y}) scale(${l.s})`}>
                  <g className="fl-anim fl-drift" style={{ '--d': `${l.d}s`, '--dur': '13s' }}>
                    <path d="M0 0C22 -6 46 -30 48 -70 14 -64 -6 -34 0 0Z" fill="#8bbe57" opacity=".6" />
                  </g>
                </g>
              ))}
            </svg>

            <svg
              key={`${scene}-${runId}`}
              viewBox="0 0 1200 675"
              className="absolute inset-0 h-full w-full"
              role="img"
              aria-label={`${current.chapter} — ${current.caption}`}
            >
              <g transform="translate(0 -62)">
                <Scene />
              </g>
            </svg>

            {/* vignette */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{ background: 'radial-gradient(ellipse at 50% 46%, transparent 44%, rgba(3,16,8,0.72) 100%)' }}
            />

            {/* reduce-motion visitors opt in here rather than being
                shown a frozen frame */}
            {!motionOk && (
              <button
                type="button"
                onClick={start}
                className="absolute inset-0 z-10 grid place-items-center bg-forest-950/45 backdrop-blur-[2px]"
              >
                <span className="flex flex-col items-center gap-4 px-6 text-center">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-lime-brand text-forest-950 shadow-[0_18px_40px_-16px_rgba(167,201,52,0.9)] transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-110">
                    <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6" fill="currentColor">
                      <path d="M7 4.5v15l13-7.5-13-7.5Z" />
                    </svg>
                  </span>
                  <span className="font-display text-[1.15rem] font-semibold text-cream">Play the story</span>
                  <span className="max-w-xs text-[0.8rem] leading-relaxed text-cream/62">
                    Your device asks for reduced motion, so we did not start it automatically.
                  </span>
                </span>
              </button>
            )}

            {/* final title card, on the last chapter */}
            {scene === COUNT - 1 && (
              <div
                key={`outro-${runId}`}
                className="fl-anim fl-fade pointer-events-none absolute right-6 top-6 rounded-full border border-lime-brand/30 bg-forest-950/70 px-5 py-2.5 backdrop-blur sm:right-9 sm:top-9"
                style={{ '--d': '4.6s', '--dur': '1.1s' }}
              >
                <span className="font-display text-[0.98rem] font-semibold tracking-wide text-lime-soft">{film.outro}</span>
              </div>
            )}
          </div>

          {/* On a phone the stage is only ~175px tall, so an overlaid
              caption would cover the whole scene. Below sm it sits under
              the stage as its own card; from sm up it overlays exactly as
              it did before. */}
          <div
            className={
              'mt-4 rounded-2xl border border-lime-brand/14 bg-forest-900/45 px-5 py-5 ' +
              'sm:pointer-events-none sm:absolute sm:inset-x-0 sm:bottom-0 sm:mt-0 sm:rounded-none ' +
              'sm:rounded-b-[1.75rem] sm:border-0 sm:bg-gradient-to-t sm:from-forest-950 ' +
              'sm:via-forest-950/72 sm:to-transparent sm:px-10 sm:pb-8 sm:pt-16'
            }
          >
            <div key={`cap-${scene}-${runId}`} className="fl-caption-in max-w-2xl">
              <p className="text-[0.66rem] font-semibold uppercase tracking-[0.28em] text-lime-brand">
                Chapter {scene + 1} — {current.chapter}
              </p>
              <p className="mt-2.5 font-display text-[clamp(1.35rem,3.2vw,2.1rem)] font-semibold leading-tight text-cream">
                {current.caption}
              </p>
              <p className="mt-2 text-[0.9rem] text-cream/60">{current.line}</p>
            </div>
          </div>
          </div>
        </Reveal>

        {/* ------------------------------------------------ controls */}
        <Reveal delay={120} className="mt-7">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => setPaused((p) => !p)}
              aria-label={paused ? 'Play the story' : 'Pause the story'}
              className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-lime-brand/35 bg-lime-brand/10 text-lime-soft transition-[background-color,transform] duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:bg-lime-brand/22"
            >
              {paused ? (
                <svg viewBox="0 0 24 24" className="ml-0.5 h-4.5 w-4.5" fill="currentColor">
                  <path d="M7 4.5v15l13-7.5-13-7.5Z" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="currentColor">
                  <rect x="6.5" y="4.5" width="4" height="15" rx="1.2" />
                  <rect x="13.5" y="4.5" width="4" height="15" rx="1.2" />
                </svg>
              )}
            </button>

            <div className="grid flex-1 grid-cols-2 gap-x-5 gap-y-4 sm:grid-cols-5">
              {film.scenes.map((s, i) => (
                <button
                  key={s.key}
                  type="button"
                  onClick={() => jumpTo(i)}
                  className="tap group text-left"
                  aria-current={i === scene}
                >
                  <span className="block h-[3px] w-full overflow-hidden rounded-full bg-cream/12">
                    <span
                      ref={(el) => (barsRef.current[i] = el)}
                      className="block h-full w-full origin-left scale-x-0 rounded-full bg-lime-brand"
                    />
                  </span>
                  <span
                    className={`mt-2.5 block text-[0.72rem] font-semibold uppercase tracking-[0.14em] transition-colors duration-400 ${
                      i === scene ? 'text-lime-soft' : 'text-cream/40 group-hover:text-cream/70'
                    }`}
                  >
                    {s.chapter}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {reduced && (
          <p className="mt-6 text-center text-[0.82rem] text-cream/45">
            Your device is set to reduced motion. The story plays in full once you press play, and you can jump to any
            chapter above.
          </p>
        )}
      </div>
    </section>
  )
}
