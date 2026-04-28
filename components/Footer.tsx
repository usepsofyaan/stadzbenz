"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-zinc-900 text-white mt-12">
      {/* Decorative top border gradient */}
      <div className="h-1 w-full bg-gradient-to-r from-accent-400 via-accent-500 to-primary-500" />

      {/* Decorative background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-accent-500/10 blur-3xl" />
        <div className="absolute -bottom-16 right-0 h-64 w-64 rounded-full bg-primary-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-12 pb-6">
        {/* Main grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent-400 to-accent-600 shadow-lg shadow-accent-900/30">
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-white" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor" stroke="none" />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">Stadz Benz</span>
            </div>
            <p className="text-sm leading-relaxed text-zinc-400">Nikmati cita rasa terbaik langsung ke pintu rumahmu. Kami hadir untuk memenuhi selera makanmu kapan saja.</p>
            {/* Social media */}
            <div className="mt-5 flex gap-3">
              {[
                {
                  label: "WhatsApp",
                  href: "/wa",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  ),
                },
                {
                  label: "Instagram",
                  href: "#",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  ),
                },
                {
                  label: "TikTok",
                  href: "#",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.28 8.28 0 004.84 1.55V6.81a4.85 4.85 0 01-1.07-.12z" />
                    </svg>
                  ),
                },
              ].map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-zinc-400 transition-all duration-200 hover:bg-accent-500/20 hover:text-accent-400 hover:scale-110"
                >
                  {s.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Menu Links */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent-400">Menu</h3>
            <ul className="space-y-2.5">
              {[
                { label: "Beranda", href: "/" },
                { label: "Semua Menu", href: "/#menu" },
                { label: "Promo Hari Ini", href: "/#promo" },
                { label: "Tentang Kami", href: "/about" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="group flex items-center gap-1.5 text-sm text-zinc-400 transition-colors duration-150 hover:text-white">
                    <span className="inline-block h-px w-0 bg-accent-400 transition-all duration-200 group-hover:w-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Layanan Links */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent-400">Layanan</h3>
            <ul className="space-y-2.5">
              {[
                { label: "Cek Ongkir", href: "/cek-ongkir" },
                { label: "Cek Resi", href: "/cek-ongkir" },
                { label: "Checkout", href: "/checkout" },
                { label: "Hubungi Kami", href: "/wa" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="group flex items-center gap-1.5 text-sm text-zinc-400 transition-colors duration-150 hover:text-white">
                    <span className="inline-block h-px w-0 bg-accent-400 transition-all duration-200 group-hover:w-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / CTA */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent-400">Hubungi Kami</h3>
            <div className="space-y-3">
              {/* WhatsApp CTA */}
              <Link href="/wa" className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 transition-all duration-200 hover:border-accent-500/50 hover:bg-accent-500/10">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-green-500/20 text-green-400">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-zinc-500">Chat langsung</p>
                  <p className="text-sm font-medium text-white group-hover:text-accent-300 transition-colors">WhatsApp Kami</p>
                </div>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-auto h-4 w-4 text-zinc-600 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-accent-400">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>

              {/* Jam Operasional */}
              <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                <div className="flex items-center gap-2 mb-2">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 text-accent-400">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent-400">Jam Buka</p>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-400">Senin – Sabtu</span>
                    <span className="text-white font-medium">08.00 – 22.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-400">Minggu</span>
                    <span className="text-white font-medium">09.00 – 21.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px w-full bg-white/10" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-xs text-zinc-500">
            © {currentYear} <span className="text-zinc-400 font-medium">Stadz Benz</span>. Semua hak dilindungi.
          </p>
          <div className="flex items-center gap-1.5">
            {/* Payment/delivery badges */}
            {["COD", "Transfer", "QRIS"].map((method) => (
              <span key={method} className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-zinc-400">
                {method}
              </span>
            ))}
          </div>
          <p className="text-xs text-zinc-600">
            Made with <span className="text-accent-500">♥</span> di Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
}
