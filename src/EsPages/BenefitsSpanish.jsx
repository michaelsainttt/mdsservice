import Nav from "../components/Nav"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"

import bgimage1 from "../assets/bg-image.png"

import {
  Network,
  Truck,
  Fuel,
  Clock,
  Headphones,
  ShieldCheck,
  WalletCards,
  Wrench,
} from "lucide-react"


function BenefitsSpanish() {

  const benefits = [
    {
      title: "Red de Más de 250 Brokers",
      description: "Nuestras relaciones con más de 250 brokers brindan a nuestros conductores acceso a una amplia variedad de oportunidades de carga.",
      icon: <Network className="w-7 h-7" />
    },
    {
      title: "Todo Tipo de Tráilers",
      description: "Trabajamos con cargas refrigeradas, secas y flatbed para ofrecer más oportunidades a nuestros conductores.",
      icon: <Truck className="w-7 h-7" />
    },
    {
      title: "Ahorro en Combustible",
      description: "Nuestras tarjetas de combustible ofrecen descuentos de hasta 30 centavos por galón y también pueden utilizarse para adelantos de efectivo.",
      icon: <Fuel className="w-7 h-7" />
    },
    {
      title: "Pagos Rápidos y Flexibles",
      description: "Recibe tu pago dentro de las 48 horas después de entregar una carga o elige pagos semanales según tu preferencia.",
      icon: <Clock className="w-7 h-7" />
    },
    {
      title: "Apoyo al Conductor 24/7",
      description: "Nuestro equipo está disponible las 24 horas para ayudar a nuestros conductores con sus necesidades en la carretera.",
      icon: <Headphones className="w-7 h-7" />
    },
    {
      title: "Seguros a Precios Accesibles",
      description: "Ofrecemos opciones competitivas de seguros de responsabilidad civil y carga sin necesidad de pago inicial.",
      icon: <ShieldCheck className="w-7 h-7" />
    },
    {
      title: "Sin Escrow",
      description: "MDS no requiere escrow, lo que permite a los conductores mantener mayor control sobre su dinero.",
      icon: <WalletCards className="w-7 h-7" />
    },
    {
      title: "Renta de Tráilers",
      description: "Ofrecemos opciones de renta de tráilers a precios razonables para ayudar a nuestros conductores a mantenerse en la carretera.",
      icon: <Truck className="w-7 h-7" />
    },
    {
      title: "Asistencia con Reparaciones",
      description: "Ofrecemos opciones de financiamiento para reparaciones menores que califiquen, sin intereses y con pagos flexibles.",
      icon: <Wrench className="w-7 h-7" />
    }
  ]
  return (
    <main className="bg-slate-100 text-slate-900 min-h-screen">
      <Nav />
      <section className="relative min-h-130 bg-cover bg-no-repeat flex items-center bg-left sm:bg-center" style={{ backgroundImage: `url(${bgimage1})` }}>
        <div className="max-w-7xl w-full mx-auto px-6 lg:px-8">
          <div className="max-w-xl">
            <p className="text-sm font-semibold text-blue-600 tracking-[0.2em]">
              BENEFICIOS PARA CONDUCTORES
            </p>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Diseñado para Apoyar
              <span className="block text-blue-600">
                Tu Éxito.
              </span>
            </h1>
            <div className="w-16 h-1 bg-blue-600 mt-6"></div>
            <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-lg">
              Brindamos las herramientas, oportunidades y el apoyo que los conductores necesitan para mantenerse en movimiento y alcanzar el éxito en la carretera.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-slate-100">
        <div className="max-w-7xl w-full mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-sm font-semibold text-blue-600 tracking-[0.2em]">
              TODO LO QUE OFRECEMOS
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
              Beneficios que te Mantienen en Movimiento
            </h2>
            <div className="w-16 h-1 bg-blue-600 mt-6 mx-auto"></div>
            <p className="mt-6 text-slate-600 text-lg leading-relaxed">
              En MDS estamos comprometidos con hacer la vida en la carretera más fácil. Estos son algunos de los beneficios que puedes esperar al trabajar con nosotros.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-white border border-slate-200 rounded-xl p-7 shadow-sm">
                <div className="w-14 h-14 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                  {benefit.icon}
                </div>
                <h3 className="mt-6 text-xl font-semibold">
                  {benefit.title}
                </h3>
                <div className="w-10 h-0.5 bg-blue-600 mt-4"></div>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl w-full mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-sm font-semibold text-blue-600 tracking-[0.2em]">
                MÁS QUE DISPATCH
              </p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
                Apoyo que Va Más Allá de la Carga.
              </h2>
              <p className="mt-6 text-slate-600 leading-relaxed">
                En MDS, nuestra relación con los conductores no termina cuando se reserva una carga. Trabajamos personalmente con nuestros conductores y les brindamos la información y asistencia que necesitan durante todo el proceso.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                  <p className="font-medium">Confirmaciones completas de las cargas</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                  <p className="font-medium">Liquidaciones claras y detalladas</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                  <p className="font-medium">Atención personalizada al conductor</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                  <p className="font-medium">Asistencia con el logbook las 24 horas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto bg-blue-600 rounded-2xl px-8 py-12 md:px-12 md:py-14 shadow-lg">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div className="max-w-xl text-center md:text-left">
                <p className="text-sm font-semibold text-blue-100 tracking-[0.2em]">
                  ¿LISTO PARA TRABAJAR CON NOSOTROS?
                </p>
                <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">
                  MDS Contigo en Cada Milla.
                </h2>
                <p className="mt-4 text-blue-100 leading-relaxed">
                  Ponte en contacto con nuestro equipo y conoce más sobre las oportunidades disponibles para ti.
                </p>
              </div>
              <Link to="/es/ContactSpanish" className="bg-white text-blue-600 font-semibold px-7 py-3 rounded-lg text-center whitespace-nowrap hover:bg-slate-100 transition">
                Contáctanos →
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default BenefitsSpanish