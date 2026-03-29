import { Zap, MapPin, MessageCircle, Ban } from 'lucide-react';

const FEATURES = [
  {
    Icon: Zap,
    title: 'Entregas en 24-48h',
    description: 'Rutas programadas para Colima y región. Pedido hoy, en tu negocio mañana.',
  },
  {
    Icon: MapPin,
    title: 'Punto de venta directo',
    description: 'Visítanos en nuestro local para compras en mostrador. Sin cita previa.',
  },
  {
    Icon: MessageCircle,
    title: 'Pedido por WhatsApp',
    description: 'Ordena directamente desde tu celular. Respuesta rápida y confirmación inmediata.',
  },
  {
    Icon: Ban,
    title: 'Sin mínimos forzosos',
    description: 'Pide lo que necesitas, cuando lo necesitas. Sin compromisos de volumen.',
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="bg-surface-container py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <span className="inline-block bg-secondary-container text-on-secondary-container px-4 py-1.5 rounded-full text-xs font-sans font-semibold mb-6">
              Cómo trabajamos
            </span>
            <h2 className="font-headline font-bold text-on-surface text-4xl md:text-5xl leading-tight mb-4">
              Presencia local,<br />
              <span className="text-primary-container">alcance regional</span>
            </h2>
            <p className="font-sans text-on-surface-variant text-base leading-relaxed mb-8 max-w-md">
              Con base en Colima, llegamos a toda la región con un servicio que combina la eficiencia de una empresa profesional con la calidez de un negocio familiar.
            </p>
            <a
              href="https://wa.me/523121234567"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <MessageCircle className="w-4 h-4" />
              Hacer un pedido
            </a>
          </div>

          {/* Right: feature grid */}
          <div className="grid grid-cols-2 gap-4">
            {FEATURES.map(({ Icon, title, description }) => (
              <div
                key={title}
                className="bg-surface-container-lowest rounded-2xl p-5 flex flex-col gap-3 shadow-ambient"
              >
                <div className="w-10 h-10 rounded-xl bg-secondary-container flex items-center justify-center">
                  <Icon className="w-5 h-5 text-on-secondary-container" />
                </div>
                <h3 className="font-headline font-bold text-on-surface text-sm leading-tight">
                  {title}
                </h3>
                <p className="font-sans text-on-surface-variant text-xs leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
