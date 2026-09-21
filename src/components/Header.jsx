import { useEffect, useState } from 'react'
import { business, nav, phoneHref, prettyPhone } from '../data/site.js'
import { useActiveSection, useScrolled, useScrollProgress } from '../hooks/useInView.js'
import { Leaf } from './ui.jsx'

const SECTION_IDS = nav.map((n) => n.href.slice(1))

export default function Header() {
  const scrolled = useScrolled(30)
  const active = useActiveSection(SECTION_IDS)
  const progressRef = useScrollProgress()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      {/* ---------------------------------------- announcement strip */}
      <div
        className={`fixed inset-x-0 top-0 z-50 bg-forest-900 text-cream transition-[height,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          scrolled ? 'h-0 opacity-0' : 'h-9 opacity-100'
        } overflow-hidden`}
      >
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between gap-4 px-5 text-[0.73rem] tracking-wide">
          <p className="flex items-center gap-2 font-medium">
            <Leaf className="h-3.5 w-3.5 text-lime-brand" />
            <span className="uppercase tracking-[0.18em]">{business.tagline}</span>
          </p>
          <div className="flex items-center gap-5">
            <a href={phoneHref(business.phones[0])} className="hidden transition-colors hover:text-lime-soft sm:inline">
              +91 {prettyPhone(business.phones[0])}
            </a>
            <a href={`mailto:${business.email}`} className="hidden transition-colors hover:text-lime-soft md:inline">
              {business.email}
            </a>
            <span className="hidden text-lime-soft/70 lg:inline">GSTIN {business.gstin}</span>
          </div>
        </div>
      </div>

      {/* ---------------------------------------- main navigation */}
      <header
        className={`fixed inset-x-0 z-50 transition-[top,background-color,box-shadow,padding] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          scrolled ? 'top-0 glass shadow-[0_10px_40px_-24px_rgba(14,58,32,0.5)]' : 'top-9 bg-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-3.5">
          <a href="#top" className="group flex items-center gap-3" aria-label={`${business.name} — home`}>
            <img
              src="/brand/ira-logo.png"
              alt=""
              className="h-11 w-11 rounded-full shadow-[0_6px_18px_-8px_rgba(14,58,32,0.7)] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rotate-[14deg] sm:h-12 sm:w-12"
            />
            <span className="leading-none">
              <span className="block font-display text-lg font-semibold tracking-tight text-forest-900 sm:text-xl">
                IRA <span className="font-normal">Enterprises</span>
              </span>
              <span className="mt-1 block text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-forest-500">
                Bio Degradable Papers
              </span>
            </span>
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  data-active={active === item.href.slice(1)}
                  className="nav-link text-sm font-medium text-forest-900/85 transition-colors hover:text-forest-900"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="btn-sheen hidden rounded-full bg-forest-800 px-6 py-3 text-sm font-semibold text-cream shadow-[0_12px_28px_-14px_rgba(14,58,32,0.9)] transition-[transform,background-color] duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:bg-forest-700 sm:inline-block"
            >
              Get wholesale pricing
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              className="relative grid h-11 w-11 place-items-center rounded-full border border-forest-800/15 bg-cream/70 lg:hidden"
            >
              <span
                className={`absolute h-[2px] w-5 rounded bg-forest-900 transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  open ? 'rotate-45' : '-translate-y-[5px]'
                }`}
              />
              <span
                className={`absolute h-[2px] w-5 rounded bg-forest-900 transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  open ? '-rotate-45' : 'translate-y-[5px]'
                }`}
              />
            </button>
          </div>
        </nav>

        <div ref={progressRef} className="h-[3px] origin-left scale-x-0 bg-gradient-to-r from-lime-brand to-forest-600" />
      </header>

      {/* ---------------------------------------- mobile sheet */}
      <div
        className={`fixed inset-0 z-40 overflow-y-auto overscroll-contain bg-forest-950/97 backdrop-blur-lg transition-[opacity,visibility] duration-500 lg:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
        onClick={() => setOpen(false)}
      >
        <ul className="flex min-h-full flex-col items-start justify-center gap-1 px-9 pb-16 pt-28 [@media(max-height:540px)]:pb-10 [@media(max-height:540px)]:pt-24">
          {nav.map((item, i) => (
            <li key={item.href} className="overflow-hidden">
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                style={{ transitionDelay: open ? `${120 + i * 70}ms` : '0ms' }}
                className={`block py-3 font-display text-[2.1rem] font-medium leading-tight text-cream transition-[transform,opacity] duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] [@media(max-height:540px)]:py-1.5 [@media(max-height:540px)]:text-[1.6rem] ${
                  open ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li
            style={{ transitionDelay: open ? `${120 + nav.length * 70}ms` : '0ms' }}
            className={`mt-8 [@media(max-height:540px)]:mt-5 transition-[transform,opacity] duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              open ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            <a
              href={phoneHref(business.phones[0])}
              className="inline-block rounded-full bg-lime-brand px-7 py-3.5 font-semibold text-forest-950"
            >
              Call +91 {prettyPhone(business.phones[0])}
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}
