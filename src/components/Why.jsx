import { why } from '../data/site.js'
import { Counter, Eyebrow, Reveal, SectionTitle, SmartImage } from './ui.jsx'

export default function Why() {
  return (
    <section id="why" className="relative scroll-mt-24 bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal variant="reveal-left" className="relative">
            <div className="relative overflow-hidden rounded-[1.9rem] shadow-[0_40px_90px_-46px_rgba(14,58,32,0.6)]">
              <SmartImage src="/images/about.jpg" alt="Bio-degradable paper stock at IRA Enterprises" ratio="4/3" />
            </div>
            <div className="absolute -bottom-7 -right-3 max-w-[15rem] rounded-2xl bg-forest-900 p-5 shadow-[0_28px_60px_-28px_rgba(14,58,32,0.9)] sm:p-6 lg:-right-7">
              <p className="font-display text-4xl font-semibold leading-none text-lime-brand">20</p>
              <p className="mt-2 text-[0.82rem] leading-snug text-cream/72">
                minutes of use for a plastic bag — then centuries in our soil.
              </p>
            </div>
          </Reveal>

          <Reveal variant="reveal-right" delay={100}>
            <Eyebrow>{why.eyebrow}</Eyebrow>
            <SectionTitle className="mt-5">{why.title}</SectionTitle>
            <p className="mt-6 text-[1.02rem] leading-relaxed text-forest-950/70">{why.body}</p>

            <div className="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2">
              {why.points.map((p, i) => (
                <Reveal key={p.title} delay={140 + i * 90}>
                  <div className="flex gap-3.5">
                    <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-lime-pale">
                      <svg viewBox="0 0 24 24" className="h-4 w-4 text-forest-600" fill="none">
                        <path d="m5 12.5 4.5 4.5L19 7" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <div>
                      <h3 className="font-display text-[1.08rem] font-semibold text-forest-900">{p.title}</h3>
                      <p className="mt-1.5 text-[0.9rem] leading-relaxed text-forest-950/64">{p.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>

        {/* ------------------------------------------------ stat band */}
        <Reveal delay={80} className="mt-24">
          <div className="grid divide-y divide-forest-800/10 overflow-hidden rounded-[1.75rem] border border-forest-800/10 bg-sand/55 sm:grid-cols-2 sm:divide-x lg:grid-cols-4 lg:divide-y-0">
            {why.stats.map((s, i) => (
              <div key={s.label} className="px-8 py-9 text-center transition-colors duration-500 hover:bg-lime-pale/60">
                <p className="font-display text-[2.9rem] font-semibold leading-none tracking-tight text-forest-800">
                  <Counter value={s.value} suffix={s.suffix} duration={1500 + i * 180} />
                </p>
                <p className="mt-3 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-forest-950/55">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
