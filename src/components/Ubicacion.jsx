import { MapPin, Clock, Navigation } from 'lucide-react';

const MAPS_LINK = 'https://maps.app.goo.gl/bSkV3ZroeYbwv9Sx6?g_st=ac';
const EMBED_URL =
  'https://maps.google.com/maps?q=C.+Aguascalientes+1464,+San+Rafael,+28048+Colima,+Col.&t=&z=16&ie=UTF8&iwloc=&output=embed';

export default function Ubicacion() {
  return (
    <section id="ubicacion" className="bg-surface-container-low py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-secondary-container text-on-secondary-container px-4 py-1.5 rounded-full text-xs font-sans font-bold mb-4">
            Visítanos
          </span>
          <h2 className="font-headline font-bold text-on-surface text-4xl md:text-5xl">
            ¿Dónde nos<br />
            <span className="text-primary">encontramos?</span>
          </h2>
          <p className="font-sans text-on-surface-variant text-base mt-4 max-w-md mx-auto leading-relaxed">
            Cuéntanos en mostrador o pide por WhatsApp. Estamos en el corazón de Colima.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Info cards */}
          <div className="flex flex-col gap-4 justify-center">
            {/* Address */}
            <div className="bg-surface-container-lowest rounded-2xl p-6 flex gap-4 items-start shadow-ambient border-l-4 border-primary">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-on-primary" />
              </div>
              <div>
                <p className="font-headline font-bold text-on-surface text-sm mb-1">Dirección</p>
                <p className="font-sans text-on-surface-variant text-sm leading-relaxed">
                  C. Aguascalientes 1464<br />
                  Col. San Rafael, 28048<br />
                  Colima, Col.
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-surface-container-lowest rounded-2xl p-6 flex gap-4 items-start shadow-ambient border-l-4 border-primary">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-on-primary" />
              </div>
              <div>
                <p className="font-headline font-bold text-on-surface text-sm mb-1">Horario de atención</p>
                <p className="font-sans text-on-surface-variant text-sm leading-relaxed">
                  Lunes a Sábado<br />
                  8:00 am – 6:00 pm
                </p>
              </div>
            </div>

            {/* CTA abrir en Maps */}
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-warm justify-center"
            >
              <Navigation className="w-4 h-4" />
              Abrir en Google Maps
            </a>
          </div>

          {/* Map embed */}
          <div className="rounded-2xl overflow-hidden shadow-ambient border border-outline-variant/20 min-h-[320px]">
            <iframe
              title="Ubicación ROAS Comercializadora"
              src={EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '320px', display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
