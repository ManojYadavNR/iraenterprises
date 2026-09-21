import { business, hero, marquee, phoneHref, prettyPhone } from '../data/site.js'
import { Leaf, Reveal } from './ui.jsx'

function Headline({ text }) {
  return (
    <h1 className="word-rise font-display text-[clamp(3rem,9.5vw,7.4rem)] font-semibold leading-[0.92] tracking-[-0.035em] text-forest-950">
      {text.split(' ').map((word, i) => (
        <span key={i} style={{ animationDelay: `${260 + i * 120}ms` }}>
          {word}
          {i < text.split(' ').length - 1 ? ' ' : ''}
        </span>
      ))}
    </h1>
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pb-20 pt-36 sm:pb-24 sm:pt-44 lg:pt-48">
      {/* backdrop */}
      <div className="absolute inset-0 -z-10">
        <img src="/images/hero.jpg" alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/92 via-cream/78 to-cream" />
      </div>
      <div
        aria-hidden="true"
        className="animate-floaty absolute -right-24 top-24 -z-10 h-[26rem] w-[26rem] rounded-full bg-lime-brand/16 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -left-40 bottom-0 -z-10 h-[24rem] w-[24rem] rounded-full bg-forest-600/12 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-5">
        <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
          {/* ------------------------------------------------ copy */}
          <div>
            <Reveal delay={80}>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-forest-800/12 bg-cream/80 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-forest-600 backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span
                    className="absolute inline-flex h-full w-full rounded-full bg-lime-brand"
                    style={{ animation: 'pulseRing 2.4s ease-out infinite' }}
                  />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-forest-600" />
                </span>
                {hero.eyebrow}
              </span>
            </Reveal>

            <div className="mt-7">
              <Headline text={hero.headline} />
            </div>

            <Reveal delay={720} className="mt-7 max-w-xl">
              <p className="text-[1.05rem] leading-relaxed text-forest-950/72 sm:text-[1.15rem]">{hero.sub}</p>
            </Reveal>

            <Reveal delay={860} className="mt-9 flex flex-wrap items-center gap-3.5">
              <a
                href="#contact"
                className="btn-sheen group inline-flex items-center gap-2.5 rounded-full bg-forest-800 px-8 py-4 text-[0.95rem] font-semibold text-cream shadow-[0_20px_44px_-20px_rgba(14,58,32,0.95)] transition-[transform,background-color] duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:bg-forest-700"
              >
                Get wholesale pricing
                <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform duration-400 group-hover:translate-x-1" fill="none">
                  <path d="M4 12h15m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href={phoneHref(business.phones[0])}
                className="inline-flex items-center gap-2.5 rounded-full border border-forest-800/20 bg-cream/70 px-7 py-4 text-[0.95rem] font-semibold text-forest-900 backdrop-blur transition-[transform,border-color,background-color] duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-forest-800/45 hover:bg-cream"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                  <path
                    d="M6.5 3h3l1.5 4-2 1.5a12 12 0 0 0 6.5 6.5L17 13l4 1.5v3a2 2 0 0 1-2.2 2A17.5 17.5 0 0 1 3 5.2 2 2 0 0 1 5 3h1.5Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                </svg>
                +91 {prettyPhone(business.phones[0])}
              </a>
            </Reveal>

            <Reveal delay={980} className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
              {hero.badges.map((b) => (
                <span key={b} className="flex items-center gap-2 text-[0.82rem] font-medium text-forest-950/62">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-forest-500" fill="none">
                    <path d="m5 12.5 4.5 4.5L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {b}
                </span>
              ))}
            </Reveal>
          </div>

          {/* ------------------------------------------------ logo medallion */}
          <Reveal variant="reveal-scale" delay={420} className="relative mx-auto w-full max-w-[30rem]">
            <div className="relative aspect-square">
              <div className="absolute inset-6 rounded-full bg-gradient-to-br from-lime-brand/28 to-forest-600/22 blur-2xl" />
              <div className="animate-floaty absolute inset-0 grid place-items-center">
                <img
                  src="/brand/ira-logo@2x.png"
                  alt="IRA Enterprises — bio degradable papers, save soil save earth"
                  className="w-[86%] drop-shadow-[0_28px_50px_rgba(14,58,32,0.30)]"
                />
              </div>

            </div>

            {/* Stat chips orbit the logo from sm up. On phones the circle is
                too small to host them, so they drop into a row underneath
                instead of covering the logo's own wordmark. */}
            <div className="mt-5 grid grid-cols-3 gap-2 sm:mt-0 sm:contents">
              {hero.chips.map((chip, i) => {
                const spots = [
                  'sm:left-[-4%] sm:top-[16%]',
                  'sm:right-[-6%] sm:top-[44%]',
                  'sm:bottom-[6%] sm:left-[12%]',
                ]
                return (
                  <div
                    key={chip.label}
                    style={{ animationDelay: `${i * 1.5}s` }}
                    className={`rounded-2xl border border-forest-800/10 bg-cream/92 px-3 py-2.5 text-center shadow-[0_18px_40px_-22px_rgba(14,58,32,0.6)] backdrop-blur sm:animate-floaty sm:absolute sm:px-4 sm:py-3 ${spots[i]}`}
                  >
                    <p className="font-display text-2xl font-semibold leading-none text-forest-800">
                      {chip.value}
                      <span className="text-base font-medium text-forest-500">{chip.unit}</span>
                    </p>
                    <p className="mt-1.5 text-[0.6rem] font-semibold uppercase leading-tight tracking-[0.1em] text-forest-950/55 sm:text-[0.62rem] sm:tracking-[0.14em]">
                      {chip.label}
                    </p>
                  </div>
                )
              })}
            </div>
          </Reveal>
        </div>
      </div>

      {/* ------------------------------------------------ trust marquee */}
      <div className="relative mt-20 border-y border-forest-800/10 bg-forest-900 py-4 sm:mt-24">
        <div className="marquee-mask flex overflow-hidden">
          <div className="animate-marquee flex shrink-0 items-center gap-10 whitespace-nowrap pr-10">
            {[...marquee, ...marquee].map((item, i) => (
              <span key={i} className="flex items-center gap-10 text-[0.82rem] font-medium uppercase tracking-[0.18em] text-cream/70">
                {item}
                <Leaf className="h-3.5 w-3.5 shrink-0 text-lime-brand/80" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
