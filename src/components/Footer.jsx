import { Share2, Camera, MessageCircle, MapPin, Clock, Banknote, CreditCard, Smartphone } from 'lucide-react';
import { useWhatsAppMessage } from '../hooks/useWhatsAppMessage';

const EMPRESA = [
  { label: 'Sobre ROAS', href: '#sobre-roas' },
  { label: 'Catálogo', href: '#catalogo' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'FAQ', href: '#faq' },
];

const ATENCION = [
  { label: 'Pedido por WhatsApp' },
  { label: 'Catálogo PDF', href: '/catalogo.pdf' },
  { label: 'Punto de venta', href: '#ubicacion' },
];

const SOCIAL = [
  { label: 'Facebook', href: '#', Icon: Share2 },
  { label: 'Instagram', href: '#', Icon: Camera },
  { label: 'WhatsApp', Icon: MessageCircle },
];

const PAGOS = [
  { label: 'Efectivo', Icon: Banknote },
  { label: 'Tarjeta', Icon: CreditCard },
  { label: 'Transferencia', Icon: Smartphone },
];

export default function Footer() {
  const { sendMessage } = useWhatsAppMessage();
  return (
    <footer className="bg-inverse-surface text-inverse-on-surface">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-4 gap-10 pb-10 border-b border-white/10">
          {/* Brand */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <img
              src="/logo_Blanco_Horizontal.svg"
              alt="ROAS Comercializadora"
              className="h-10 w-auto"
            />
            <p className="font-sans text-inverse-on-surface/60 text-sm leading-relaxed max-w-xs">
              Desde 2012, la familia Rodríguez-Ascencio ha trabajado para ser el aliado estratégico del comercio colimense.
            </p>
            <div className="flex items-center gap-3 mt-2">
              {SOCIAL.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={sendMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-inverse-on-surface/70 hover:bg-primary-container hover:text-on-primary-container transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-headline font-bold text-inverse-on-surface text-sm mb-4 uppercase tracking-wider">
              Empresa
            </h4>
            <ul className="flex flex-col gap-2.5">
              {EMPRESA.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="font-sans text-inverse-on-surface/60 text-sm hover:text-inverse-on-surface transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Atención */}
          <div>
            <h4 className="font-headline font-bold text-inverse-on-surface text-sm mb-4 uppercase tracking-wider">
              Atención al cliente
            </h4>
            <ul className="flex flex-col gap-2.5">
              {ATENCION.map((item) => (
                <li key={item.label}>
                  <a
                    href={sendMessage()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-inverse-on-surface/60 text-sm hover:text-inverse-on-surface transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-3 rounded-xl bg-white/5 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-inverse-on-surface/60 text-xs">
                <MapPin className="w-3.5 h-3.5 shrink-0" />
                Colima, México
              </div>
              <div className="flex items-center gap-2 text-inverse-on-surface/60 text-xs">
                <Clock className="w-3.5 h-3.5 shrink-0" />
                Lun–Sáb 8am–6pm
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-inverse-on-surface/40 text-xs">
            © EST. 2012 ROAS Comercializadora. Colima, México.
          </p>
          <div className="flex items-center gap-3">
            <span className="font-sans text-inverse-on-surface/40 text-xs">Formas de pago:</span>
            {PAGOS.map(({ label, Icon }) => (
              <div key={label} className="flex items-center gap-1 text-inverse-on-surface/40" title={label}>
                <Icon className="w-4 h-4" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
