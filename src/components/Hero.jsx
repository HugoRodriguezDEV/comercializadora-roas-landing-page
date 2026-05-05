import { ClipboardList, Store, UtensilsCrossed, Home } from 'lucide-react';
import { useWhatsAppMessage } from '../hooks/useWhatsAppMessage';

export default function Hero() {
  const { sendMessage } = useWhatsAppMessage();
  return (
    <section className="bg-surface min-h-[90vh] flex items-center overflow-hidden relative">
      {/* Warm background accent blob */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-30 pointer-events-none"
        style={{ background: 'radial-gradient(circle at top right, #FEF3C7, transparent 70%)', transform: 'translate(20%, -20%)' }}
      />

      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Content */}
        <div className="flex flex-col gap-6">
          {/* Badge — ámbar cálido */}
          <div className="inline-flex items-center gap-2 bg-amber-light text-on-amber-light px-4 py-1.5 rounded-full text-xs font-sans font-bold w-fit border border-amber/30">
            <span className="w-2 h-2 rounded-full bg-amber"></span>
            Distribución Mayorista · Colima, México
          </div>

          {/* Headline — más bold, sin gradiente de texto */}
          <h1 className="font-headline font-extrabold text-on-surface text-5xl md:text-6xl leading-tight">
            Distribución<br />
            <span className="text-primary relative inline-block">
              en Colima
              <span
                className="absolute -bottom-1 left-0 w-full h-3 opacity-40 rounded"
                style={{ background: '#FEF3C7', zIndex: -1 }}
              />
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
            <a href={sendMessage()} className="btn-primary">
              <ClipboardList className="w-4 h-4" />
              Contáctanos
            </a>
          </div>

          {/* Social proof */}
          <div className="flex items-center gap-4 pt-2">
            <div className="flex -space-x-2">
              {[Store, UtensilsCrossed, Home].map((Icon, i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-amber-light flex items-center justify-center border-2 border-surface">
                  <Icon className="w-4 h-4 text-on-amber-light" />
                </div>
              ))}
            </div>
            <p className="text-xs font-sans text-on-surface-variant">
              Tiendas, restaurantes y hogares<br />
              <span className="font-semibold text-on-surface">en toda la región de Colima</span>
            </p>
          </div>
        </div>

        {/* Visual — tarjeta verde sólido estilo pizarrón de tienda */}
        <div className="relative flex justify-center items-center">
          {/* Green glow blob */}
          <div className="absolute w-72 h-72 rounded-full opacity-25 pointer-events-none" style={{ background: 'radial-gradient(circle, #9CB434, transparent)' }}></div>

          {/* Main card — verde sólido */}
          <div className="relative bg-primary rounded-2xl p-8 shadow-[0_24px_48px_rgba(85,101,0,0.35)] w-72">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.15)' }}>
                <img src="/Isotipo.svg" alt="ROAS Isotipo" className="w-12 h-12 object-contain" style={{ filter: 'brightness(0) invert(1)' }} />
              </div>
              <p className="font-headline font-bold text-white text-lg">Est. 2012</p>
              <p className="font-sans text-white/70 text-sm mt-1">Familia Rodríguez-Ascencio</p>
            </div>

            {/* Stats */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                { value: '12+', label: 'Años de experiencia' },
                { value: '4', label: 'Categorías' },
                { value: '24h', label: 'Entrega rápida' },
                { value: '0', label: 'Mínimo forzoso' },
              ].map((stat) => (
                <div key={stat.label} className="rounded-xl p-3 text-center" style={{ background: 'rgba(255,255,255,0.12)' }}>
                  <p className="font-headline font-bold text-amber-light text-lg">{stat.value}</p>
                  <p className="font-sans text-white/70 text-xs leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
