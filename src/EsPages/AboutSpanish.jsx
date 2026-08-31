import Nav from "../components/Nav"
import Footer from "../components/Footer"


import aboutImage1 from "../assets/TruckInHorizon1.png"
import aboutImage2 from "../assets/TruckImage.jpg"

import { Check } from "lucide-react"


function About() {

  return (
    <main className="bg-white text-slate-900 min-h-screen">
      <Nav />
      <section className="relative min-h-130 bg-cover bg-no-repeat flex items-center bg-left sm:bg-position-[-100%_center]" style={{ backgroundImage: `url(${aboutImage1})` }}>
        <div className="max-w-7xl w-full mx-auto px-6 lg:px-8">
          <div className="max-w-xl">
            <p className="text-sm font-semibold text-blue-600 tracking-[0.2em]">
              SOBRE MDS
            </p>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Una Compañía Pensada
              <span className="block text-blue-600">
                Para los Conductores.
              </span>
            </h1>
            <div className="w-16 h-1 bg-blue-600 mt-6"></div>
            <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-lg">
              MDS Services Group Corp. fue creada con un objetivo en mente: ofrecer a los conductores una compañía en la que puedan confiar.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl w-full mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <img src={aboutImage2} alt="MDS Services Group truck" className="w-full h-95 lg:h-lg:h-130ct-cover rounded-2xl" />
              <div className="absolute bottom-4 right-4 lg:-bottom-5 lg:-right-5 bg-blue-600 text-white px-7 py-5 rounded-xl shadow-lg">
                <p className="text-3xl font-bold">
                  250+
                </p>
                <p className="text-sm text-blue-100">
                  Relaciones con Brokers
                </p>
              </div>

            </div>
            <div>
              <p className="text-sm font-semibold text-blue-600 tracking-[0.2em]">
                NUESTRA HISTORIA
              </p>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                Una Compañía en la que los Conductores
                <span className="block text-blue-600">
                  Pueden Confiar.
                </span>
              </h2>
              <p className="mt-6 text-slate-600 leading-relaxed">
                MDS Services Group Corp. fue fundada con una misión sencilla: crear una compañía donde los conductores sean tratados con honestidad, respeto y justicia.
              </p>
              <p className="mt-5 text-slate-600 leading-relaxed">
                Lo que comenzó como un pequeño equipo con valores sólidos se ha convertido en un socio de confianza para conductores en todo el país. Gracias a nuestras relaciones con más de 250 brokers, conectamos a nuestros conductores con oportunidades de carga mientras les brindamos el apoyo que necesitan para mantenerse enfocados en la carretera.
              </p>
              <p className="mt-5 text-slate-600 leading-relaxed">
                Nuestro enfoque es personal. Nos tomamos el tiempo para conocer la experiencia, las preferencias y las necesidades de cada conductor, en lugar de tratar a todos de la misma manera.
              </p>
              <p className="mt-5 text-slate-600 leading-relaxed">
                A medida que MDS continúa creciendo, nuestras prioridades siguen siendo las mismas: servicio confiable, trato justo, comunicación clara y relaciones duraderas con los conductores con quienes trabajamos.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-slate-100">
        <div className="max-w-7xl w-full mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-blue-600 tracking-[0.2em]">
              EN LO QUE CREEMOS
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
              La Forma en que Hacemos Negocios Importa.
            </h2>
            <div className="w-16 h-1 bg-blue-600 mt-6"></div>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Nuestras relaciones con los conductores se basan en principios simples.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="border-t-2 border-slate-900 pt-6">
              <p className="text-sm font-semibold text-blue-600">
                01
              </p>
              <h3 className="mt-3 text-2xl font-semibold">
                Respeto
              </h3>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Cada conductor merece ser tratado como un socio valioso. Escuchamos a nuestros conductores y trabajamos teniendo en cuenta su experiencia, sus intereses y sus necesidades.
              </p>
            </div>
            <div className="border-t-2 border-slate-900 pt-6">
              <p className="text-sm font-semibold text-blue-600">
                02
              </p>
              <h3 className="mt-3 text-2xl font-semibold">
                Transparencia
              </h3>
              <p className="mt-4 text-slate-600 leading-relaxed">
                La comunicación clara es importante. Los conductores reciben confirmaciones completas de las cargas y liquidaciones detalladas para que siempre comprendan el trabajo realizado y sus pagos.
              </p>
            </div>
            <div className="border-t-2 border-slate-900 pt-6">
              <p className="text-sm font-semibold text-blue-600">
                03
              </p>
              <h3 className="mt-3 text-2xl font-semibold">
                Apoyo
              </h3>
              <p className="mt-4 text-slate-600 leading-relaxed">
                La carretera no se detiene al final del día. Nuestro equipo brinda asistencia las 24 horas, los 7 días de la semana, para ayudar a los conductores con los desafíos que puedan encontrar en el camino.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl w-full mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-sm font-semibold text-blue-600 tracking-[0.2em]">
                CÓMO TRABAJAMOS
              </p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
                Atención Personalizada
                <span className="block text-blue-600">
                  de Principio a Fin.
                </span>
              </h2>
              <p className="mt-6 text-slate-600 leading-relaxed">
                Creemos que un buen servicio comienza con una buena comunicación. Por eso trabajamos directamente con nuestros conductores y los mantenemos informados durante todo el proceso.
              </p>
              <div className="mt-8 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-7 h-7 shrink-0 rounded-full bg-blue-600 text-white flex items-center justify-center">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold">
                      Complete Load Information
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">
                      Los conductores reciben las confirmaciones completas de las cargas en lugar de resúmenes abreviados.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-7 h-7 shrink-0 rounded-full bg-blue-600 text-white flex items-center justify-center">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold">
                      Oportunidades Personalizadas
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">
                      Tomamos en cuenta la experiencia y los intereses de cada conductor al trabajar con ellos.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-7 h-7 shrink-0 rounded-full bg-blue-600 text-white flex items-center justify-center">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold">
                      Liquidaciones Claras
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">
                      Las liquidaciones se envían por correo electrónico el día de pago con un desglose claro de los ingresos y gastos.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-7 h-7 shrink-0 rounded-full bg-blue-600 text-white flex items-center justify-center">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold">
                      Asistencia 24/7
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">
                      Nuestro equipo está disponible las 24 horas para brindar apoyo siempre que sea posible.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-900 rounded-2xl p-8 md:p-10 text-white">
              <p className="text-sm font-semibold text-blue-400 tracking-[0.2em]">
                MDS EN NÚMEROS
              </p>
              <h3 className="mt-3 text-3xl font-bold">
                Preparados para Mantener a los Conductores en Movimiento.
              </h3>
              <p className="mt-5 text-slate-300 leading-relaxed">
                Nuestros servicios están diseñados pensando en las necesidades reales que enfrentan los conductores todos los días.
              </p>
              <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10">
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-blue-400">
                    250+
                  </p>
                  <p className="mt-2 text-sm text-slate-300">
                    Relaciones con Brokers
                  </p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-blue-400">
                    24/7
                  </p>
                  <p className="mt-2 text-sm text-slate-300">
                    Apoyo al Conductor
                  </p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-blue-400">
                    48 Hr
                  </p>
                  <p className="mt-2 text-sm text-slate-300">
                    Opción de Pago
                  </p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-blue-400">
                    $0
                  </p>
                  <p className="mt-2 text-sm text-slate-300">
                    Escrow Requerido
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* CTA */}
      <section className="py-16 md:py-24 bg-slate-100">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="max-w-5xl mx-auto bg-blue-600 rounded-2xl px-8 py-12 md:px-12 md:py-14 shadow-lg">

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">

              <div className="max-w-xl text-center md:text-left">

                <p className="text-sm font-semibold text-blue-100 tracking-[0.2em]">
                  TRABAJA CON MDS
                </p>

                <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">
                  ¿Listo para Salir a la Carretera?
                </h2>

                <p className="mt-4 text-blue-100 leading-relaxed">
                  Habla con nuestro equipo y conoce más sobre las oportunidades de trabajar con MDS Services Group Corp.
                </p>

              </div>


              <a href="/es/contacto" className="bg-white text-blue-600 font-semibold px-7 py-3 rounded-lg text-center whitespace-nowrap hover:bg-slate-100 transition">
                Contáctanos →
              </a>

            </div>

          </div>

        </div>

      </section>


      <Footer />

    </main>
  )
}


export default About