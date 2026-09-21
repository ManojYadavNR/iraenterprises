import { testimonials } from '../data/site.js'
import { Eyebrow, Reveal, SectionTitle } from './ui.jsx'

export default function Testimonials() {
  return (
    <section className="bg-sand/45 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>From the counter</Eyebrow>
          <SectionTitle className="mt-5">The shops that already made the switch</SectionTitle>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.quote}
              delay={i * 120}
              className="card-hover relative flex flex-col rounded-[1.6rem] border border-forest-800/8 bg-cream p-8 shadow-[0_2px_18px_-12px_rgba(14,58,32,0.35)]"
            >
              <svg viewBox="0 0 24 24" className="h-8 w-8 text-lime-brand" fill="currentColor" aria-hidden="true">
                <path d="M9.6 5.4C6.2 7 4 10.2 4 14.1c0 2.9 1.8 4.7 4.2 4.7 2.2 0 3.8-1.6 3.8-3.7 0-2-1.4-3.5-3.3-3.5-.4 0-.8.1-1 .2.5-1.7 2-3.2 3.8-4.1l-1.9-2.3Zm9.2 0C15.4 7 13.2 10.2 13.2 14.1c0 2.9 1.8 4.7 4.2 4.7 2.2 0 3.8-1.6 3.8-3.7 0-2-1.4-3.5-3.3-3.5-.4 0-.8.1-1 .2.5-1.7 2-3.2 3.8-4.1l-1.9-2.3Z" />
              </svg>
              <p className="mt-5 flex-1 text-[0.98rem] leading-relaxed text-forest-950/78">“{t.quote}”</p>
              <div className="mt-7 flex items-center gap-3 border-t border-forest-800/8 pt-5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-forest-800 font-display text-sm font-semibold text-lime-soft">
                  {t.name.charAt(0)}
                </span>
                <span>
                  <span className="block text-[0.88rem] font-semibold text-forest-900">{t.name}</span>
                  <span className="block text-[0.78rem] text-forest-950/55">{t.where}</span>
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
