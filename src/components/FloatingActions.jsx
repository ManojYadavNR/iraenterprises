import { business, phoneHref } from '../data/site.js'
import { useScrolled } from '../hooks/useInView.js'

export default function FloatingActions() {
  const show = useScrolled(700)

  return (
    <div
      className={`fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 transition-[opacity,transform] duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0'
      }`}
    >
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        className="grid h-11 w-11 place-items-center rounded-full border border-forest-800/15 bg-cream/90 text-forest-800 shadow-[0_12px_30px_-14px_rgba(14,58,32,0.7)] backdrop-blur transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
          <path d="M12 19V5m0 0-6 6m6-6 6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <a
        href={phoneHref(business.phones[0])}
        aria-label="Call IRA Enterprises"
        className="grid h-11 w-11 place-items-center rounded-full bg-forest-800 text-cream shadow-[0_12px_30px_-14px_rgba(14,58,32,0.9)] transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 sm:hidden"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
          <path
            d="M6.5 3h3l1.5 4-2 1.5a12 12 0 0 0 6.5 6.5L17 13l4 1.5v3a2 2 0 0 1-2.2 2A17.5 17.5 0 0 1 3 5.2 2 2 0 0 1 5 3h1.5Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      </a>

      <a
        href={`https://wa.me/${business.whatsapp}?text=${encodeURIComponent(
          'Hello IRA Enterprises, I would like wholesale pricing for bio-degradable bags.'
        )}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="group flex h-12 w-12 items-center justify-center gap-2.5 rounded-full bg-[#1faa53] text-cream shadow-[0_16px_36px_-16px_rgba(31,170,83,0.95)] transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 sm:h-auto sm:w-auto sm:py-3.5 sm:pl-4 sm:pr-5"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
          <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3.1.8.8-3-.2-.3a8.2 8.2 0 1 1 7.2 3.9Zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.6.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.6-1.2.1-.1 0-.3 0-.4l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.9 11.9 0 0 0 4.6 4c2.2.9 2.2.6 2.6.5a2.6 2.6 0 0 0 1.7-1.2 2.1 2.1 0 0 0 .1-1.2c0-.1-.2-.2-.5-.3Z" />
        </svg>
        <span className="hidden text-[0.88rem] font-semibold sm:inline">WhatsApp us</span>
      </a>
    </div>
  )
}
