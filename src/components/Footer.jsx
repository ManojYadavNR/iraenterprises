import { business, mapsQuery, nav, phoneHref, prettyPhone, products } from '../data/site.js'
import { Leaf } from './ui.jsx'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-cream/10 bg-forest-950 pb-10 pt-16 text-cream/70">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.85fr_0.85fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img src="/brand/ira-logo.png" alt="" className="h-14 w-14 rounded-full" />
              <span className="leading-none">
                <span className="block font-display text-xl font-semibold text-cream">
                  IRA <span className="font-normal">Enterprises</span>
                </span>
                <span className="mt-1.5 block text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-lime-brand">
                  {business.tagline}
                </span>
              </span>
            </div>
            <p className="mt-6 max-w-sm text-[0.9rem] leading-relaxed text-cream/55">
              {business.legalLine}. Supplying bio-degradable paper bags, pouches and covers to businesses across
              Chikkaballapur and Karnataka.
            </p>
            <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-lime-brand/25 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-lime-soft">
              <Leaf className="h-3.5 w-3.5" />
              I am not plastic
            </p>
          </div>

          <div>
            <h3 className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-cream/45">Explore</h3>
            <ul className="mt-5 space-y-2.5 max-sm:space-y-0">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="block text-[0.9rem] transition-colors hover:text-lime-soft max-sm:py-2.5">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-cream/45">Products</h3>
            <ul className="mt-5 space-y-2.5 max-sm:space-y-0">
              {products.slice(0, 6).map((p) => (
                <li key={p.id}>
                  <a href="#products" className="block text-[0.9rem] transition-colors hover:text-lime-soft max-sm:py-2.5">
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-cream/45">Reach us</h3>
            <address className="mt-5 space-y-3 not-italic text-[0.9rem] leading-relaxed max-sm:space-y-1">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
                target="_blank"
                rel="noreferrer"
                className="block transition-colors hover:text-lime-soft max-sm:py-2.5"
              >
                {business.address.line1}
                <br />
                {business.address.line2} – {business.address.pin}
              </a>
              {business.phones.map((p) => (
                <a key={p} href={phoneHref(p)} className="block transition-colors hover:text-lime-soft max-sm:py-2.5">
                  +91 {prettyPhone(p)}
                </a>
              ))}
              <a href={`mailto:${business.email}`} className="block break-all transition-colors hover:text-lime-soft max-sm:py-2.5">
                {business.email}
              </a>
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-cream/10 pt-7 text-[0.78rem] text-cream/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {business.name}. All rights reserved.
          </p>
          <p className="tracking-wide">
            GSTIN {business.gstin} · Proprietor {business.proprietor}
          </p>
        </div>
      </div>
    </footer>
  )
}
