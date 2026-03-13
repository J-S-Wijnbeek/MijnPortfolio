import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative z-50 w-full px-6 py-4 flex items-center justify-between border-b border-white/10 bg-black/60 backdrop-blur-sm">
      <a href="#home" className="text-xl font-bold text-white tracking-tight">
        My Portfolio
      </a>

      {/* Desktop links */}
      <ul className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-white/70 hover:text-white transition-colors text-sm font-medium"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile menu toggle */}
      <button
        className="md:hidden text-white"
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle menu"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile dropdown */}
      {open && (
        <ul className="absolute top-full left-0 w-full bg-black/90 border-b border-white/10 flex flex-col md:hidden">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-6 py-3 text-white/70 hover:text-white hover:bg-white/5 text-sm font-medium"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
