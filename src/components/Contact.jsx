import { useEffect, useState } from 'react'
import { business, businessTypes, phoneHref, prettyPhone, products } from '../data/site.js'
import { Eyebrow, Leaf, Reveal, SectionTitle } from './ui.jsx'

const EMPTY = { name: '', phone: '', type: '', product: '', qty: '', message: '' }

/* The site is static, so an enquiry is handed straight to WhatsApp or
   email — no server, nothing to maintain, and it lands on the phone
   that is already answering customers. */
function composeEnquiry(f) {
  return [
    `Enquiry for ${business.name}`,
    '',
    `Name: ${f.name}`,
    `Phone: ${f.phone}`,
    f.type && `Business: ${f.type}`,
    f.product && `Product: ${f.product}`,
    f.qty && `Quantity: ${f.qty}`,
    f.message && `Message: ${f.message}`,
  ]
    .filter(Boolean)
    .join('\n')
}

const fieldClass =
  'w-full rounded-xl border border-forest-800/14 bg-cream px-4 py-3.5 text-[0.95rem] text-forest-950 outline-none transition-[border-color,box-shadow] duration-400 placeholder:text-forest-950/38 focus:border-forest-600 focus:shadow-[0_0_0_3px_rgba(47,125,58,0.14)]'

export default function Contact() {
  const [form, setForm] = useState(EMPTY)
  const [sent, setSent] = useState(false)

  useEffect(() => {
    const type = sessionStorage.getItem('ira-enquiry-type')
    const message = sessionStorage.getItem('ira-enquiry-message')
    if (!type && !message) return

    setForm((f) => ({
      ...f,
      ...(type ? { type } : {}),
      ...(message ? { message } : {}),
    }))
    sessionStorage.removeItem('ira-enquiry-type')
    sessionStorage.removeItem('ira-enquiry-message')
  }, [])

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    const text = composeEnquiry(form)
    window.open(`https://wa.me/${business.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener')
    setSent(true)
  }

  const mailHref = `mailto:${business.email}?subject=${encodeURIComponent(
    'Wholesale enquiry — bio-degradable bags'
  )}&body=${encodeURIComponent(composeEnquiry(form))}`

  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden bg-forest-950 py-24 sm:py-32">
      <div aria-hidden="true" className="absolute -right-40 top-10 h-[30rem] w-[30rem] rounded-full bg-lime-brand/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5">
        <div className="grid gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          {/* ------------------------------------------- pitch + details */}
          <Reveal>
            <Eyebrow tone="light">Get wholesale pricing</Eyebrow>
            <SectionTitle tone="light" className="mt-5">
              Tell us what you carry.
              <br />
              We will tell you what it costs.
            </SectionTitle>
            <p className="mt-6 max-w-md text-[1rem] leading-relaxed text-cream/64">
              Send your requirement and we will come back with rates — usually the same day. No obligation, and we
              will happily send a sample before you commit to a single bundle.
            </p>

            <div className="mt-10 space-y-5">
              {business.phones.map((p, i) => (
                <a key={p} href={phoneHref(p)} className="group flex items-center gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-lime-brand/28 bg-lime-brand/10 text-lime-soft transition-colors duration-400 group-hover:bg-lime-brand group-hover:text-forest-950">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                      <path
                        d="M6.5 3h3l1.5 4-2 1.5a12 12 0 0 0 6.5 6.5L17 13l4 1.5v3a2 2 0 0 1-2.2 2A17.5 17.5 0 0 1 3 5.2 2 2 0 0 1 5 3h1.5Z"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span>
                    <span className="block text-[0.7rem] uppercase tracking-[0.16em] text-cream/45">
                      {i === 0 ? 'Sales & orders' : 'Alternate line'}
                    </span>
                    <span className="block text-[1.05rem] font-semibold text-cream">+91 {prettyPhone(p)}</span>
                  </span>
                </a>
              ))}

              <a href={`mailto:${business.email}`} className="group flex items-center gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-lime-brand/28 bg-lime-brand/10 text-lime-soft transition-colors duration-400 group-hover:bg-lime-brand group-hover:text-forest-950">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                    <rect x="3" y="5" width="18" height="14" rx="2.4" stroke="currentColor" strokeWidth="1.8" />
                    <path d="m3.8 7 8.2 6 8.2-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </span>
                <span className="min-w-0">
                  <span className="block text-[0.7rem] uppercase tracking-[0.16em] text-cream/45">Email</span>
                  <span className="block break-all text-[0.95rem] font-semibold text-cream sm:text-[1.02rem]">
                    {business.email}
                  </span>
                </span>
              </a>
            </div>

            <div className="mt-10 rounded-2xl border border-cream/10 bg-cream/[0.04] p-6">
              <p className="text-[0.7rem] uppercase tracking-[0.18em] text-cream/45">Proprietor</p>
              <p className="mt-2 font-display text-[1.3rem] font-semibold text-cream">{business.proprietor}</p>
              <p className="mt-3 text-[0.84rem] leading-relaxed text-cream/58">
                {business.address.line1}, {business.address.line2} – {business.address.pin}
              </p>
              <p className="mt-3 text-[0.78rem] tracking-wide text-lime-soft/75">GSTIN {business.gstin}</p>
            </div>
          </Reveal>

          {/* ------------------------------------------- enquiry form */}
          <Reveal variant="reveal-right" delay={110}>
            <form
              onSubmit={submit}
              className="rounded-[1.75rem] border border-cream/10 bg-cream/[0.05] p-7 backdrop-blur sm:p-9"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-cream/58">
                    Your name *
                  </span>
                  <input required value={form.name} onChange={set('name')} placeholder="Name" className={fieldClass} />
                </label>

                <label className="block">
                  <span className="mb-2 block text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-cream/58">
                    Phone / WhatsApp *
                  </span>
                  <input
                    required
                    type="tel"
                    inputMode="tel"
                    value={form.phone}
                    onChange={set('phone')}
                    placeholder="10-digit number"
                    className={fieldClass}
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-cream/58">
                    Type of business
                  </span>
                  <select value={form.type} onChange={set('type')} className={fieldClass}>
                    <option value="">Select…</option>
                    {businessTypes.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <span className="mb-2 block text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-cream/58">
                    Product needed
                  </span>
                  <select value={form.product} onChange={set('product')} className={fieldClass}>
                    <option value="">Select…</option>
                    {products.map((p) => (
                      <option key={p.id} value={p.name}>
                        {p.name}
                      </option>
                    ))}
                    <option value="Multiple / not sure">Multiple / not sure</option>
                  </select>
                </label>

                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-cream/58">
                    Approximate quantity
                  </span>
                  <input
                    value={form.qty}
                    onChange={set('qty')}
                    placeholder="e.g. 5,000 bags a month"
                    className={fieldClass}
                  />
                </label>

                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-cream/58">
                    Anything else
                  </span>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={set('message')}
                    placeholder="Sizes, GSM, printing, delivery location…"
                    className={`${fieldClass} resize-none`}
                  />
                </label>
              </div>

              <button
                type="submit"
                className="btn-sheen mt-7 flex w-full items-center justify-center gap-2.5 rounded-full bg-lime-brand px-8 py-4 text-[0.98rem] font-semibold text-forest-950 transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1"
              >
                <Leaf className="h-4 w-4" />
                Send enquiry on WhatsApp
              </button>

              <p className="mt-4 text-center text-[0.8rem] text-cream/48">
                Prefer email?{' '}
                <a href={mailHref} className="tap font-semibold text-lime-soft underline-offset-4 hover:underline">
                  Send the same details by mail
                </a>
              </p>

              {sent && (
                <p className="mt-4 rounded-xl border border-lime-brand/30 bg-lime-brand/10 px-4 py-3 text-center text-[0.85rem] text-lime-soft">
                  WhatsApp should have opened with your enquiry ready to send. If it did not, call us on +91{' '}
                  {prettyPhone(business.phones[0])}.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
