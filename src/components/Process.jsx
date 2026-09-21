import { process } from '../data/site.js'
import { Eyebrow, Reveal, SectionTitle } from './ui.jsx'

export default function Process() {
  return (
    <section className="relative overflow-hidden bg-forest-900 py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-lime-brand/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-5">
        <Reveal className="max-w-2xl">
          <Eyebrow tone="light">{process.eyebrow}</Eyebrow>
          <SectionTitle tone="light" className="mt-5">
            {process.title}
          </SectionTitle>
        </Reveal>

        <div className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {process.steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 110} className="group relative">
              {/* connecting rule */}
              {i < process.steps.length - 1 && (
                <span className="absolute left-14 top-6 hidden h-px w-[calc(100%-2.5rem)] bg-gradient-to-r from-lime-brand/45 to-transparent lg:block" />
              )}
              <span className="relative grid h-12 w-12 place-items-center rounded-full border border-lime-brand/35 bg-forest-800 font-display text-[0.95rem] font-semibold text-lime-soft transition-[background-color,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1 group-hover:bg-lime-brand group-hover:text-forest-950">
                {s.n}
              </span>
              <h3 className="mt-6 font-display text-[1.25rem] font-semibold leading-snug text-cream">{s.title}</h3>
              <p className="mt-3 text-[0.92rem] leading-relaxed text-cream/60">{s.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
