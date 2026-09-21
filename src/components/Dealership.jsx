import { dealership } from '../data/site.js'
import { Eyebrow, Leaf, Reveal, SectionTitle } from './ui.jsx'

const PARTNERSHIP_TYPE = 'Distributor / reseller'

function presetPartnershipEnquiry() {
  sessionStorage.setItem('ira-enquiry-type', PARTNERSHIP_TYPE)
  sessionStorage.setItem(
    'ira-enquiry-message',
    'I am interested in dealership / distribution partnership with IRA Enterprises.'
  )
}

export default function Dealership() {
  return (
    <section id="dealership" className="relative scroll-mt-24 overflow-hidden bg-forest-900 py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-lime-brand/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-5">
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <Reveal>
            <Eyebrow tone="light">{dealership.eyebrow}</Eyebrow>
            <SectionTitle tone="light" className="mt-5">
              {dealership.title}
            </SectionTitle>
            <p className="mt-6 max-w-xl text-[1rem] leading-relaxed text-cream/64">{dealership.sub}</p>

            <div className="mt-10 flex flex-wrap gap-2.5">
              {dealership.audience.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-lime-brand/25 bg-forest-800/80 px-4 py-2 text-[0.82rem] font-medium text-cream/82"
                >
                  {item}
                </span>
              ))}
            </div>

            <Reveal delay={120} className="mt-12">
              <div className="rounded-[1.6rem] border border-lime-brand/20 bg-forest-800/55 p-7 sm:p-8">
                <h3 className="font-display text-[1.35rem] font-semibold text-cream">{dealership.cta}</h3>
                <p className="mt-2 text-[0.92rem] leading-relaxed text-cream/62">{dealership.ctaSub}</p>
                <a
                  href="#contact"
                  onClick={presetPartnershipEnquiry}
                  className="btn-sheen mt-6 inline-flex items-center gap-2.5 rounded-full bg-lime-brand px-7 py-3.5 text-[0.92rem] font-semibold text-forest-950 transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1"
                >
                  <Leaf className="h-4 w-4" />
                  {dealership.cta}
                </a>
              </div>
            </Reveal>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {dealership.benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 100}>
                <div className="group h-full rounded-[1.4rem] border border-cream/10 bg-cream/[0.04] p-6 transition-[background-color,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:bg-cream/[0.07]">
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-lime-brand/30 bg-lime-brand/10 font-display text-[0.85rem] font-semibold text-lime-soft transition-colors duration-500 group-hover:bg-lime-brand group-hover:text-forest-950">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-5 font-display text-[1.12rem] font-semibold leading-snug text-cream">{b.title}</h3>
                  <p className="mt-2.5 text-[0.9rem] leading-relaxed text-cream/58">{b.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
