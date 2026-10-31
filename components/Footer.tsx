const linkClass =
  'text-sm text-white/50 transition-colors hover:text-white';

const columns = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'How it works', href: '#work' },
      { label: 'Waitlist', href: '#waitlist' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Careers', href: '#careers' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Social',
    links: [
      { label: 'X', href: 'https://x.com', external: true },
      { label: 'LinkedIn', href: 'https://linkedin.com', external: true },
      { label: 'Instagram', href: 'https://instagram.com', external: true },
    ],
  },
] as const;

export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-white/10 bg-black px-6 py-12 text-white md:px-10"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex flex-col gap-3">
          <span className="font-brand text-lg font-semibold tracking-[0.2em] text-white/90 sm:text-xl md:tracking-[0.26em]">
            Synura
          </span>
          <p className="text-sm text-white/45">
            © 2026 Synura. All rights reserved.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
          {columns.map((column) => (
            <div key={column.title}>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.14em] text-white/40">
                {column.title}
              </p>
              <ul className="flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className={linkClass}
                      {...('external' in link && link.external
                        ? {
                            target: '_blank',
                            rel: 'noopener noreferrer',
                          }
                        : {})}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
