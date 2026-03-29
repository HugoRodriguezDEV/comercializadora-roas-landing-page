import { useState } from 'react';
import { Search, Menu, X, MessageCircle } from 'lucide-react';
import { useWhatsAppMessage } from '../hooks/useWhatsAppMessage';

const NAV_LINKS = [
  { label: 'Catálogo', href: '#catalogo' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Sobre ROAS', href: '#sobre-roas' },
  // { label: 'FAQ', href: '#faq' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { sendMessage } = useWhatsAppMessage();

  return (
    <header className="sticky top-0 z-50 bg-surface/90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-8">
        {/* Logo */}
        <a href="/" className="flex items-center shrink-0">
          <img
            src="/logo_Verde_Horizontal.svg"
            alt="ROAS Comercializadora"
            className="h-10 w-auto"
          />
        </a>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-1 flex-1 justify-center">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-2 rounded-full text-sm font-sans font-medium text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <button className="p-2 rounded-full hover:bg-surface-container transition-colors" aria-label="Buscar">
            <Search className="w-5 h-5 text-on-surface-variant" />
          </button>
          <a
            href={sendMessage()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs px-5 py-2.5"
          >
            <MessageCircle className="w-4 h-4" />
            Pedido Directo
          </a>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-surface-container transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          {menuOpen
            ? <X className="w-6 h-6 text-on-surface" />
            : <Menu className="w-6 h-6 text-on-surface" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-surface-container-low px-6 pb-4 flex flex-col gap-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="py-2.5 text-sm font-sans font-medium text-on-surface-variant border-b border-outline-variant/20 last:border-0"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={sendMessage()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-2 justify-center"
          >
            <MessageCircle className="w-4 h-4" />
            Pedido Directo
          </a>
        </div>
      )}
    </header>
  );
}
