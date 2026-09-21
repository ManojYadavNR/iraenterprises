import { useState } from 'react'
import { faqs } from '../data/site.js'
import { Eyebrow, Reveal, SectionTitle } from './ui.jsx'

function Item({ item, open, onToggle }) {
  return (
    <div className="border-b border-forest-800/10">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="group flex w-full items-start justify-between gap-6 py-6 text-left"
      >
        <span
          className={`font-display text-[1.1rem] font-semibold leading-snug transition-colors duration-400 sm:text-[1.2rem] ${
            open ? 'text-forest-600' : 'text-forest-900 group-hover:text-forest-700'
          }`}
        >
          {item.q}
        </span>
        <span
          className={`mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-[transform,background-color,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            open ? 'rotate-45 border-forest-600 bg-forest-600 text-cream' : 'border-forest-800/20 text-forest-800'
          }`}
        >
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none">
            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
          </svg>
        </span>
      </button>

      <div
        className="grid transition-[grid-template-rows,opacity] duration-600 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ gridTemplateRows: open ? '1fr' : '0fr', opacity: open ? 1 : 0 }}
      >
        <div className="overflow-hidden">
          <p className="max-w-2xl pb-7 pr-10 text-[0.95rem] leading-relaxed text-forest-950/68">{item.a}</p>
        </div>
      </div>
    </div>
  )
}

export default function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <section className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <Eyebrow>Before you order</Eyebrow>
            <SectionTitle className="mt-5">Questions we get every week</SectionTitle>
            <p className="mt-6 text-[0.98rem] leading-relaxed text-forest-950/68">
              Still unsure about something? Call the counter and ask — you will speak to the proprietor, not a call
              centre.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="border-t border-forest-800/10">
              {faqs.map((item, i) => (
                <Item key={item.q} item={item} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
