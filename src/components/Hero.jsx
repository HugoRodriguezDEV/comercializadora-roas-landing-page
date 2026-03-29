import { ClipboardList, Store, UtensilsCrossed, Home } from 'lucide-react';
import { useWhatsAppMessage } from '../hooks/useWhatsAppMessage';

export default function Hero() {
  const { sendMessage } = useWhatsAppMessage();
  return (
    <section className="bg-surface min-h-[90vh] flex items-center overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="flex flex-col gap-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary-container text-on-secondary-container px-4 py-1.5 rounded-full text-xs font-sans font-semibold w-fit">
            <span className="w-2 h-2 rounded-full bg-primary-container"></span>
            Distribución Mayorista · Colima, México
          </div>

          {/* Headline */}
          <h1 className="font-headline font-extrabold text-on-surface text-5xl md:text-6xl leading-tight">
            Distribución<br />
            <span style={{ background: 'linear-gradient(135deg, #556500, #9CB434)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              en Colima
            </span>
          </h1>

          {/* Tagline */}
          <p className="font-headline font-semibold text-on-surface text-xl md:text-2xl leading-snug">
            Servicio mayorista accesible<br />para tu negocio
          </p>

          {/* Description */}
          <p className="font-sans text-on-surface-variant text-base leading-relaxed max-w-md">
            Sin mínimos forzosos, con la calidez de un trato directo y personalizado.
            Surtimos tu tienda, restaurante o hogar.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 pt-2">
            {/* <a href="#catalogo" className="btn-primary">
              <ClipboardList className="w-4 h-4" />
              Ver ofertas de la semana
            </a> */}
            <a href={sendMessage()} className="btn-primary">
              <ClipboardList className="w-4 h-4" />
              Contactanos
            </a>
            {/* <a
              href="/catalogo.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <FileDown className="w-4 h-4" />
              Catálogo PDF
            </a> */}
          </div>

          {/* Social proof */}
          <div className="flex items-center gap-4 pt-2">
            <div className="flex -space-x-2">
              {[Store, UtensilsCrossed, Home].map((Icon, i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center border-2 border-surface">
                  <Icon className="w-4 h-4 text-on-surface-variant" />
                </div>
              ))}
            </div>
            <p className="text-xs font-sans text-on-surface-variant">
              Tiendas, restaurantes y hogares<br />
              <span className="font-semibold text-on-surface">en toda la región de Colima</span>
            </p>
          </div>
        </div>

        {/* Visual */}
        <div className="relative flex justify-center items-center">
          {/* Background blobs */}
          <div className="absolute w-72 h-72 rounded-full opacity-20" style={{ background: 'radial-gradient(circle, #9CB434, transparent)' }}></div>
          <div className="absolute w-48 h-48 rounded-full opacity-10 translate-x-16 translate-y-8" style={{ background: 'radial-gradient(circle, #da8cef, transparent)' }}></div>

          {/* Main card */}
          <div className="relative bg-surface-container-lowest rounded-2xl p-8 shadow-ambient w-72">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #d4ee68, #9CB434)' }}>
                <img src="/Isotipo.svg" alt="ROAS Isotipo" className="w-12 h-12 object-contain" />
              </div>
              <p className="font-headline font-bold text-on-surface text-lg">Est. 2012</p>
              <p className="font-sans text-on-surface-variant text-sm mt-1">Familia Rodríguez-Ascencio</p>
            </div>

            {/* Stats */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                { value: '12+', label: 'Años de experiencia' },
                { value: '4', label: 'Categorías' },
                { value: '24h', label: 'Entrega rápida' },
                { value: '0', label: 'Mínimo forzoso' },
              ].map((stat) => (
                <div key={stat.label} className="bg-surface-container-low rounded-xl p-3 text-center">
                  <p className="font-headline font-bold text-primary text-lg">{stat.value}</p>
                  <p className="font-sans text-on-surface-variant text-xs leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
