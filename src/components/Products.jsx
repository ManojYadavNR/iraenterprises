import { products } from '../data/site.js'
import { Eyebrow, Reveal, SectionTitle, SmartImage } from './ui.jsx'

function ProductCard({ p, i }) {
  return (
    <Reveal
      variant="reveal-blur"
      delay={(i % 4) * 110}
      className="card-hover group relative flex flex-col overflow-hidden rounded-[1.6rem] border border-forest-800/8 bg-cream shadow-[0_2px_18px_-12px_rgba(14,58,32,0.35)]"
    >
      <div className="relative overflow-hidden">
        <SmartImage
          src={p.image}
          alt={p.name}
          ratio="1/1"
          imgClassName="transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]"
        />
        <span className="absolute left-4 top-4 rounded-full bg-forest-900/88 px-3 py-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-lime-soft backdrop-blur">
          Bio-degradable
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-forest-500">{p.kicker}</p>
        <h3 className="mt-2.5 font-display text-[1.45rem] font-semibold leading-tight tracking-tight text-forest-900">
          {p.name}
        </h3>
        <p className="mt-3 flex-1 text-[0.92rem] leading-relaxed text-forest-950/68">{p.desc}</p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {p.uses.map((u) => (
            <span key={u} className="rounded-full bg-lime-pale px-2.5 py-1 text-[0.68rem] font-medium text-forest-700">
              {u}
            </span>
          ))}
        </div>

        <a
          href="#contact"
          className="tap mt-6 inline-flex items-center gap-2 text-[0.85rem] font-semibold text-forest-800 transition-colors hover:text-forest-600"
        >
          Enquire about {p.name}
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 transition-transform duration-400 group-hover:translate-x-1.5" fill="none">
            <path d="M4 12h15m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>

      {/* hairline that draws in on hover */}
      <span className="pointer-events-none absolute inset-x-6 bottom-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-lime-brand to-forest-600 transition-transform duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />
    </Reveal>
  )
}

export default function Products() {
  return (
    <section id="products" className="paper-grain relative scroll-mt-24 bg-sand/45 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal className="max-w-2xl">
            <Eyebrow>What we supply</Eyebrow>
            <SectionTitle className="mt-5">
              Every bag your counter needs.
              <br className="hidden sm:block" />
              <span className="text-forest-500"> None of the plastic.</span>
            </SectionTitle>
          </Reveal>
          <Reveal delay={140} className="max-w-md md:pb-3">
            <p className="text-[0.98rem] leading-relaxed text-forest-950/68">
              Eight ranges, stocked in the sizes Karnataka retailers actually sell through — with custom printing
              whenever you want your own name on the bag.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => (
            <ProductCard key={p.id} p={p} i={i} />
          ))}
        </div>

        <Reveal delay={120} className="mt-14">
          <div className="flex flex-col items-center gap-5 rounded-[1.6rem] border border-forest-800/10 bg-forest-900 px-8 py-9 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
              <h3 className="font-display text-[1.6rem] font-semibold leading-tight text-cream">
                Need a size that is not listed?
              </h3>
              <p className="mt-2 text-[0.95rem] text-cream/70">
                Tell us the dimensions and GSM — we source and supply it in bulk.
              </p>
            </div>
            <a
              href="#contact"
              className="btn-sheen shrink-0 rounded-full bg-lime-brand px-7 py-3.5 text-[0.92rem] font-semibold text-forest-950 transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1"
            >
              Ask for a custom quote
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
