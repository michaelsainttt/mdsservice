import Footer from "../components/Footer"
import Nav from "../components/Nav"
import { Link } from "react-router-dom"

import truckimage1 from "../assets/TruckInHorizon1.png"
import truckimage2 from "../assets/backgroundimage2.jpg"
import truckimage3 from "../assets/Image3.jpg"

import {
  ShieldCheck,
  Handshake,
  BadgeCheck,
  Headphones,
  Eye,
  HeartHandshake
} from "lucide-react"


const values = [
  {
    title: "Integridad",
    description: "Hacemos lo correcto en todo momento. La transparencia está en el centro de cada decisión que tomamos.",
    icon: <ShieldCheck className="w-7 h-7" />
  },
  {
    title: "Respeto",
    description: "Valoramos a cada conductor y a cada socio. No eres un número — eres parte de nuestro equipo.",
    icon: <Handshake className="w-7 h-7" />
  },
  {
    title: "Confiabilidad",
    description: "Cumplimos nuestra palabra y te ayudamos a mantenerte en movimiento con cargas constantes y pagos a tiempo.",
    icon: <BadgeCheck className="w-7 h-7" />
  },
  {
    title: "Apoyo",
    description: "Nuestro equipo está disponible para ti 24/7, porque sabemos que la carretera nunca se detiene.",
    icon: <Headphones className="w-7 h-7" />
  },
  {
    title: "Transparencia",
    description: "La comunicación clara es importante. Brindamos a nuestros conductores la información que necesitan.",
    icon: <Eye className="w-7 h-7" />
  },
  {
    title: "Compromiso",
    description: "Estamos comprometidos con construir relaciones duraderas y ayudar a nuestros conductores a alcanzar el éxito.",
    icon: <HeartHandshake className="w-7 h-7" />
  }
]

function HomeSpanish(){
    return(
        <main className="min-h-screen bg-slate-100 text-slate-900">
            <Nav/>
            <section className="py-16 md:py-24 relative min-h-150 bg-cover bg-position-[10%_center] sm:bg-position-[90%_center] md:bg-position-[70%_center] lg:bg-position-[50%_center]" style={{ backgroundImage: `url(${truckimage1})` }}>
                <div className="max-w-3xl px-8 sm:px-10 lg:px-20">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                        MDS Services Group Corp.
                    </p>
                    <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-slate-900">
                        Pensado para los Conductores.
                        <br />
                        Guiado por el <span className="text-blue-600">Respeto.</span>
                    </h1>
                    <p className="mt-6 max-w-lg text-base sm:text-lg leading-relaxed text-slate-600">
                        En MDS Services Group Corp., creemos que las grandes relaciones generan grandes resultados. Somos más que una compañía de dispatch — somos un socio en la carretera.
                    </p>
                    <Link to="/es/contacto" className="btn mt-8 bg-blue-600 text-white border-none hover:bg-blue-700 px-7">
                        Trabaja con Nosotros
                        <span>→</span>
                    </Link>
                </div>
            </section>
            <section className="py-16 md:py-24 relative flex gap-6">
                <div className="max-w-3xl px-8 sm:px-12 lg:px-20">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                        NUESTRA HISTORIA
                    </p>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                        De Humildes Comienzos al Liderazgo en la Carretera
                    </h2>
                    <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
                        <p>
                            MDS Services Group Corp. fue fundada con una misión sencilla: crear una compañía donde los conductores sean tratados con honestidad, respeto y justicia.
                        </p>
                        <p>
                            Lo que comenzó como un pequeño equipo con valores sólidos se ha convertido en un socio de confianza para conductores en todo el país. Gracias a nuestras relaciones con más de 250 brokers, ayudamos a conectar a nuestros conductores con oportunidades mientras les brindamos el apoyo que necesitan para mantenerse enfocados en la carretera.
                        </p>
                        <p>
                            A medida que MDS continúa creciendo, nuestras prioridades siguen siendo las mismas. Creemos en la comunicación transparente, el servicio confiable y en poner a nuestros conductores primero. Cada milla, cada carga y cada relación es importante para nosotros.
                        </p>
                    </div>
                    <Link to="/es/nosotros" className="btn mt-8 bg-blue-600 text-white border-none hover:bg-blue-700 px-7">
                        Conoce Más Sobre Nosotros
                        <span>→</span>
                    </Link>
                </div>
                <div className="relative w-full hidden lg:block">
                    <img className="w-11/12 h-100 object-cover rounded-2xl shadow-lg shadow-blue-300" src={truckimage2} alt="Camión de MDS Services Group" />
                    <div className="absolute bottom-0 right-0 bg-blue-700 text-white rounded-2xl p-6 shadow-lg">

                        <p className="text-4xl font-bold">
                            250+
                        </p>

                        <p className="font-semibold">
                            Brokers
                        </p>

                        <p className="text-sm">
                            Con los que Trabajamos
                        </p>

                    </div>

                </div>
            </section>
            <section className="bg-slate-900 py-12 md:py-14">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                        <div>
                            <p className="text-3xl md:text-4xl font-bold text-blue-500">
                                24/7
                            </p>
                            <p className="mt-2 font-semibold text-white">
                                Apoyo al Conductor
                            </p>
                            <p className="mt-1 text-sm text-slate-400">
                                Ayuda cuando la necesites.
                            </p>
                        </div>
                        <div>
                            <p className="text-3xl md:text-4xl font-bold text-blue-500">
                                250+
                            </p>
                            <p className="mt-2 font-semibold text-white">
                                Relaciones con Brokers
                            </p>
                            <p className="mt-1 text-sm text-slate-400">
                                Más oportunidades de carga.
                            </p>
                        </div>
                        <div>
                            <p className="text-3xl md:text-4xl font-bold text-blue-500">
                                48 H
                            </p>
                            <p className="mt-2 font-semibold text-white">
                                Opciones de Pago Rápido
                            </p>
                            <p className="mt-1 text-sm text-slate-400">
                                Recibe tu pago rápidamente después de la entrega.
                            </p>
                        </div>
                        <div>
                            <p className="text-3xl md:text-4xl font-bold text-blue-500">
                                $0
                            </p>
                            <p className="mt-2 font-semibold text-white">
                                Escrow Requerido
                            </p>
                            <p className="mt-1 text-sm text-slate-400">
                                Mantén mayor control sobre tu dinero.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                            Nuestros Valores
                        </p>
                        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
                            Los Principios que Nos Impulsan
                        </h2>
                    </div>
                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {values.map((value) => (
                            <div key={value.title} className="text-center px-4">
                                <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-600">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-slate-900">
                                    {value.title}
                                </h3>
                                <p className="mt-3 text-slate-600 leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-17 items-center">
                        <div className="max-w-xl">
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                                ¿LISTO PARA COMENZAR?
                            </p>
                            <h2 className="mt-4 text-4xl lg:text-5xl leading-tight font-bold text-slate-900">
                                Construyamos Juntos el Camino que Viene.
                            </h2>
                            <p className="mt-6 text-lg leading-relaxed text-slate-600">
                                Únete a un equipo que pone a los conductores primero, con apoyo confiable, oportunidades y servicio.
                            </p>
                            <Link to="/es/contacto" className="btn mt-8 bg-blue-600 text-white border-0">
                                Contáctanos
                                <span>→</span>
                            </Link>
                        </div>
                        <div>
                            <img className="w-full mt-6 lg:mt-0 object-cover rounded-2xl shadow-lg shadow-blue-300" src={truckimage3} alt="Camión de MDS Services Group" />
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </main>
    )
}
export default HomeSpanish