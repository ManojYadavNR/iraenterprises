import { business, mapsQuery, phoneHref, prettyPhone, store } from '../data/site.js'
import { Eyebrow, Reveal, SectionTitle, SmartImage } from './ui.jsx'

export default function Store() {
  return (
    <section id="store" className="paper-grain scroll-mt-24 bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <Reveal variant="reveal-left" className="group relative overflow-hidden rounded-[1.9rem] shadow-[0_44px_100px_-50px_rgba(14,58,32,0.65)]">
            <SmartImage
              src={store.image}
              alt="IRA Enterprises store front in Bharathi Nagara, Chikkaballapur"
              ratio="4/3"
              imgClassName="transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
            />
            <span className="absolute bottom-5 left-5 rounded-full bg-forest-950/78 px-4 py-2 text-[0.72rem] font-medium text-cream backdrop-blur">
              Our store · Bharathi Nagara, Chikkaballapur
            </span>
          </Reveal>

          <Reveal variant="reveal-right" delay={100}>
            <Eyebrow>{store.eyebrow}</Eyebrow>
            <SectionTitle className="mt-5">{store.title}</SectionTitle>
            <p className="mt-6 text-[1.02rem] leading-relaxed text-forest-950/70">{store.body}</p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {store.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-[0.9rem] text-forest-950/72">
                  <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0 text-forest-500" fill="none">
                    <path d="m5 12.5 4.5 4.5L19 7" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {h}
                </li>
              ))}
            </ul>

            {/* address card */}
            <div className="mt-9 overflow-hidden rounded-2xl border border-forest-800/12 bg-sand/55">
              <div className="grid sm:grid-cols-2">
                <div className="border-b border-forest-800/10 p-6 sm:border-b-0 sm:border-r">
                  <p className="text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-forest-500">Address</p>
                  <address className="mt-3 not-italic text-[0.94rem] leading-relaxed text-forest-950/78">
                    {business.address.line1}
                    <br />
                    {business.address.line2} – {business.address.pin}
                    <br />
                    {business.address.state}
                  </address>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
                    target="_blank"
                    rel="noreferrer"
                    className="tap mt-4 inline-flex items-center gap-1.5 text-[0.85rem] font-semibold text-forest-700 transition-colors hover:text-forest-500"
                  >
                    Get directions
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none">
                      <path d="M7 17 17 7m0 0H8m9 0v9" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>

                <div className="p-6">
                  <p className="text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-forest-500">Counter hours</p>
                  <ul className="mt-3 space-y-2.5 text-[0.9rem] text-forest-950/78">
                    {business.hours.map((h) => (
                      <li key={h.days}>
                        <span className="block text-[0.82rem] text-forest-950/58">{h.days}</span>
                        <span className="block font-medium text-forest-900">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
                    {business.phones.map((p) => (
                      <a
                        key={p}
                        href={phoneHref(p)}
                        className="tap text-[0.9rem] font-semibold text-forest-700 transition-colors hover:text-forest-500"
                      >
                        +91 {prettyPhone(p)}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
