import { ShoppingCart, Package, Wheat, Sparkles, ArrowRight } from 'lucide-react';
import { useWhatsAppMessage } from '../hooks/useWhatsAppMessage';

const CATEGORIAS = [
  {
    Icon: ShoppingCart,
    tag: 'Básicos',
    title: 'Abarrotes',
    description: 'Harinas, aceites y latería de marcas líderes. Todo lo que tu tienda necesita para no quedarse sin stock.',
    color: 'bg-primary-fixed',
    tagColor: 'bg-primary text-on-primary',
    iconColor: 'text-on-primary-container',
  },
  {
    Icon: Package,
    tag: 'Nuestra esencia',
    title: 'Desechables',
    description: 'Vasos, platos y bolsas. Somos especialistas en desechables para restaurantes, fondas y negocios de comida.',
    color: 'bg-tertiary-container',
    tagColor: 'bg-tertiary text-on-tertiary',
    iconColor: 'text-on-tertiary-container',
  },
  {
    Icon: Wheat,
    tag: 'A granel',
    title: 'Granos y Especias',
    description: 'Venta a granel con frescura garantizada. Frijol, arroz, lentejas y especias directamente para tu negocio.',
    color: 'bg-amber-light',
    tagColor: 'bg-amber text-white',
    iconColor: 'text-on-amber-light',
  },
  {
    Icon: Sparkles,
    tag: 'Limpieza',
    title: 'Productos de Limpieza',
    description: 'Escobas, detergentes y todo lo que necesitas para mantener tu local impecable. Marcas confiables.',
    color: 'bg-secondary-container',
    tagColor: 'bg-primary text-on-primary',
    iconColor: 'text-on-secondary-container',
  },
];

export default function Especialidades() {
  const { createMessage } = useWhatsAppMessage();
  return (
    <section id="catalogo" className="bg-surface py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="inline-block bg-secondary-container text-on-secondary-container px-4 py-1.5 rounded-full text-xs font-sans font-bold mb-4">
              Lo que distribuimos
            </span>
            <h2 className="font-headline font-bold text-on-surface text-4xl md:text-5xl">
              Nuestras<br />Especialidades
            </h2>
          </div>
          <p className="font-sans text-on-surface-variant text-sm max-w-xs leading-relaxed">
            Cuatro líneas de producto cuidadosamente seleccionadas para cubrir las necesidades de tu negocio.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {CATEGORIAS.map(({ Icon, tag, title, description, color, tagColor, iconColor }) => (
            <div
              key={title}
              className={`${color} rounded-2xl p-6 flex flex-col gap-4 group hover:scale-[1.03] transition-transform duration-300 cursor-pointer`}
            >
              <div className="flex items-start justify-between">
                <Icon className={`w-12 h-12 ${iconColor}`} />
                <span className={`${tagColor} text-xs font-sans font-bold px-3 py-1 rounded-full`}>
                  {tag}
                </span>
              </div>
              <div>
                <h3 className="font-headline font-bold text-on-surface text-lg mb-2">
                  {title}
                </h3>
                <p className="font-sans text-on-surface-variant text-xs leading-relaxed">
                  {description}
                </p>
              </div>
              <button
                onClick={() => createMessage(`Hola, me interesa conocer sus productos de ${title}`)}
                className="mt-auto flex items-center gap-2 text-xs font-sans font-bold text-primary group-hover:gap-3 transition-all duration-200">
                Pregunta por
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
