import { city } from '../data/site.js'
import { Eyebrow, Reveal } from './ui.jsx'

export default function City() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* full-bleed image of home */}
      <div className="absolute inset-0 -z-10">
        <img
          src={city.image}
          alt={city.caption}
          loading="lazy"
          className="h-full w-full object-cover object-[center_62%]"
        />
        {/* On a narrow screen a left-to-right scrim would darken the whole
            frame, so the hills read top-to-bottom instead. */}
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950/35 via-forest-950/72 to-forest-950/94 sm:bg-gradient-to-r sm:from-forest-950/93 sm:via-forest-950/62 sm:to-forest-950/12" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/55 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-5 py-28 sm:py-36">
        <Reveal className="max-w-2xl">
          <Eyebrow tone="light">{city.eyebrow}</Eyebrow>
          <h2 className="mt-5 font-display text-[clamp(2rem,4.6vw,3.5rem)] font-semibold leading-[1.06] tracking-[-0.02em] text-cream">
            {city.title}
          </h2>
          <p className="mt-7 max-w-xl text-[1.05rem] leading-[1.85] text-cream/76">{city.body}</p>

          <p className="mt-10 flex items-center gap-3 text-[0.78rem] uppercase tracking-[0.18em] text-lime-soft/80">
            <span className="h-px w-10 bg-lime-brand/60" />
            {city.caption}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
