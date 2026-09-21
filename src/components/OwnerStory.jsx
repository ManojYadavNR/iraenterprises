import { business, ownerStory } from '../data/site.js'
import { Eyebrow, Reveal, SectionTitle } from './ui.jsx'

export default function OwnerStory() {
  return (
    <section id="owner" className="paper-grain scroll-mt-24 bg-sand/45 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid items-start gap-14 lg:grid-cols-[1.15fr_auto] lg:gap-16 xl:gap-20">
          <Reveal variant="reveal-right" delay={100}>
            <Eyebrow>{ownerStory.eyebrow}</Eyebrow>
            <SectionTitle className="mt-5">{ownerStory.title}</SectionTitle>
            <p className="mt-6 text-[1.02rem] leading-relaxed text-forest-950/70">{ownerStory.body}</p>

            <blockquote className="mt-8 border-l-[3px] border-lime-brand pl-5">
              <p className="font-display text-[1.12rem] italic leading-relaxed text-forest-900">
                &ldquo;{ownerStory.quote}&rdquo;
              </p>
              <footer className="mt-4">
                <p className="font-display text-[1.05rem] font-semibold text-forest-800">{business.proprietor}</p>
                <p className="mt-0.5 text-[0.82rem] font-medium uppercase tracking-[0.14em] text-forest-500">
                  {business.proprietorRole}, {business.name}
                </p>
              </footer>
            </blockquote>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {ownerStory.milestones.map((m, i) => (
                <Reveal key={m.year} delay={140 + i * 80}>
                  <div className="rounded-2xl border border-forest-800/10 bg-cream/70 p-5 transition-colors duration-500 hover:bg-lime-pale/50">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-forest-500">{m.year}</p>
                    <p className="mt-2 text-[0.9rem] leading-relaxed text-forest-950/72">{m.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal variant="reveal-left" className="relative mx-auto w-full max-w-[16.5rem] sm:max-w-[18rem] lg:mx-0 lg:max-w-[19.5rem] xl:max-w-[21rem]">
            <div className="group overflow-hidden rounded-[1.9rem] bg-cream shadow-[0_40px_90px_-46px_rgba(14,58,32,0.6)]">
              <img
                src={ownerStory.image}
                alt={`${business.proprietor}, proprietor of ${business.name}`}
                loading="lazy"
                decoding="async"
                className="block h-auto w-full transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02]"
              />
            </div>
            {/* <div className="absolute bottom-4 left-0 max-w-[9.75rem] rounded-xl bg-forest-900/92 p-2.5 shadow-[0_16px_40px_-20px_rgba(14,58,32,0.85)] backdrop-blur-sm sm:bottom--3 sm:left--3 sm:max-w-[10.5rem] sm:p-3">
              <p className="text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-lime-soft/80">At the counter</p>
              <p className="mt-1 font-display text-[0.88rem] font-semibold leading-snug text-cream sm:text-[0.94rem]">
                {business.address.line2}, Chikkaballapur
              </p>
              <p className="mt-1 text-[0.68rem] leading-snug text-cream/60 sm:text-[0.72rem]">
                Walk in for samples &amp; wholesale rates.
              </p>
            </div> */}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
