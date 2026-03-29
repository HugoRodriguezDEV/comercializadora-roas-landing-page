import { Handshake, Truck, Sprout } from 'lucide-react';

const VALORES = [
  {
    Icon: Handshake,
    title: 'Trato Familiar',
    description: 'Somos colaboradores-propietarios. Cada pedido se maneja con los valores de una empresa familiar: cuidado, honestidad y compromiso.',
  },
  {
    Icon: Truck,
    title: 'Logística Humana',
    description: 'Entregamos soluciones, no solo mercancía. Nuestras rutas están diseñadas para llegar a tiempo con un trato cálido y personalizado.',
  },
  {
    Icon: Sprout,
    title: 'Para Todo Tamaño',
    description: 'No necesitas ser un gigante. Apoyamos a emprendedores y pequeños negocios desde el primer pedido, sin mínimos forzosos.',
  },
];

export default function ValorROAS() {
  return (
    <section id="sobre-roas" className="bg-surface-container-low py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-secondary-container text-on-secondary-container px-4 py-1.5 rounded-full text-xs font-sans font-semibold mb-4">
            Nuestra Filosofía
          </span>
          <h2 className="font-headline font-bold text-on-surface text-4xl md:text-5xl">
            El Valor <span className="text-primary-container">ROAS</span>
          </h2>
          <p className="font-sans text-on-surface-variant text-base mt-4 max-w-xl mx-auto leading-relaxed">
            Desde 2012, la familia Rodríguez-Ascencio trabaja para ser el aliado estratégico del comercio colimense.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {VALORES.map(({ Icon, title, description }) => (
            <div
              key={title}
              className="bg-surface-container-lowest rounded-2xl p-8 flex flex-col gap-4 shadow-ambient hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary-container flex items-center justify-center">
                <Icon className="w-7 h-7 text-on-secondary-container" />
              </div>
              <h3 className="font-headline font-bold text-on-surface text-xl">
                {title}
              </h3>
              <p className="font-sans text-on-surface-variant text-sm leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
