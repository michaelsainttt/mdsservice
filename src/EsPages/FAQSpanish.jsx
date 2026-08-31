import Footer from "../components/Footer"
import Nav from "../components/Nav"

import bgimage1 from "../assets/bg-image.png"
import { Link } from "react-router-dom"

function FAQSpanish(){

    return(
        <>
            <main className="bg-slate-100 text-slate-900 min-h-screen">
                <Nav />
                <section className="py-16 md:py-24 relative min-h-150 bg-cover bg-left sm:bg-center bg-no-repeat flex items-center" style={{ backgroundImage: `url(${bgimage1})` }}>
                    <div className="max-w-7xl mx-auto w-full px-6 lg:px-8">
                        <div className="max-w-xl">
                            <p className="text-sm font-semibold text-blue-600 tracking-[0.2em]">
                                PREGUNTAS FRECUENTES
                            </p>
                            <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl text-slate-900 leading-tight tracking-tight">
                                ¿Tienes Preguntas?
                            </h1>
                            <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl text-blue-600 leading-tight tracking-tight">
                                Tenemos Respuestas.
                            </h1>
                            <p className="mt-6 sm:text-lg text-base text-slate-600 leading-relaxed max-w-lg">
                                Encuentra respuestas a las preguntas más frecuentes de los conductores sobre cómo trabajar con MDS.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="py-16 md:py-24 bg-slate-100">
                    <div className="max-w-7xl w-full mx-auto px-6 lg:px-8">
                        <div className="max-w-2xl mx-auto text-center">
                            <p className="text-sm font-semibold text-blue-600 tracking-[0.2em]">
                                PREGUNTAS GENERALES
                            </p>
                            <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-slate-900 leading-tight tracking-tight">
                                Todo lo que Necesitas Saber
                            </h2>
                            <div className="w-16 h-1 bg-blue-600 mt-6 mx-auto"></div>
                            <p className="mt-6 text-slate-600 text-lg leading-relaxed">
                                ¿No encuentras la pregunta que buscas? Comunícate con nuestro equipo. Estamos aquí para ayudarte.
                            </p>
                        </div>
                        <div className="mt-12 max-w-4xl space-y-4 mx-auto">
                            <div tabIndex={0} className="collapse collapse-plus bg-white rounded-xl shadow-sm border-slate-200">
                                <div className="collapse-title font-semibold">
                                    ¿Qué tan rápido recibo mi pago?
                                </div>
                                <div className="collapse-content text-sm">
                                    Los conductores pueden recibir su pago dentro de las 48 horas después de entregar una carga o elegir pagos semanales según su preferencia.
                                </div>
                            </div>
                            <div tabIndex={0} className="collapse collapse-plus bg-white border-slate-200 rounded-xl shadow-sm">
                                <div className="collapse-title font-semibold">
                                    ¿Con qué tipos de cargas trabaja MDS?
                                </div>
                                <div className="collapse-content text-sm">
                                    Trabajamos con cargas refrigeradas, dry van y flatbed, ofreciendo a los conductores acceso a una variedad de oportunidades de carga.
                                </div>
                            </div>
                            <div tabIndex={0} className="collapse collapse-plus bg-white border-slate-200 rounded-xl shadow-sm">
                                <div className="collapse-title font-semibold">
                                    ¿MDS ofrece oportunidades de carga de manera constante?
                                </div>
                                <div className="collapse-content text-sm">
                                    Sí. Trabajamos con más de 250 brokers y ofrecemos oportunidades de carga durante todo el año.
                                </div>
                            </div>
                            <div tabIndex={0} className="collapse collapse-plus bg-white border-slate-200 rounded-xl shadow-sm">
                                <div className="collapse-title font-semibold">
                                    ¿Ofrecen descuentos en combustible?
                                </div>
                                <div className="collapse-content text-sm">
                                    Sí. Ofrecemos tarjetas de combustible con descuentos de hasta 30 centavos por galón para ayudar a los conductores a reducir sus costos operativos.
                                </div>
                            </div>
                            <div tabIndex={0} className="collapse collapse-plus bg-white border-slate-200 rounded-xl shadow-sm">
                                <div className="collapse-title font-semibold">
                                    ¿Se requiere escrow?
                                </div>
                                <div className="collapse-content text-sm">
                                    No. MDS no requiere que los conductores mantengan una cuenta de escrow.
                                </div>
                            </div>
                            <div tabIndex={0} className="collapse collapse-plus bg-white border-slate-200 rounded-xl shadow-sm">

                                <div className="collapse-title font-semibold">
                                    ¿Puedo usar la tarjeta de combustible para obtener cash advance?
                                </div>

                                <div className="collapse-content text-sm">
                                    Sí. Las tarjetas de combustible pueden utilizarse para compras de combustible o para obtener cash advance sin cargos adicionales por el uso de la tarjeta.
                                </div>

                            </div>


                            <div tabIndex={0} className="collapse collapse-plus bg-white border-slate-200 rounded-xl shadow-sm">

                                <div className="collapse-title font-semibold">
                                    ¿MDS ofrece apoyo a los conductores las 24 horas?
                                </div>

                                <div className="collapse-content text-sm">
                                    Sí. Nuestro equipo está disponible las 24 horas para ayudar a los conductores con sus necesidades operativas y brindar el apoyo necesario durante el viaje.
                                </div>

                            </div>


                            <div tabIndex={0} className="collapse collapse-plus bg-white border-slate-200 rounded-xl shadow-sm">

                                <div className="collapse-title font-semibold">
                                    ¿MDS ofrece opciones de seguro?
                                </div>

                                <div className="collapse-content text-sm">
                                    Sí. Ofrecemos opciones de seguros liability y cargo a precios competitivos y sin requerir down payment.
                                </div>

                            </div>


                            <div tabIndex={0} className="collapse collapse-plus bg-white border-slate-200 rounded-xl shadow-sm">

                                <div className="collapse-title font-semibold">
                                    ¿Puedo rentar un tráiler a través de MDS?
                                </div>

                                <div className="collapse-content text-sm">
                                    Sí. Ofrecemos renta de tráilers a precios razonables y con pocos años de uso, incluyendo opciones para diferentes tipos de cargas.
                                </div>

                            </div>


                            <div tabIndex={0} className="collapse collapse-plus bg-white border-slate-200 rounded-xl shadow-sm">

                                <div className="collapse-title font-semibold">
                                    ¿MDS ofrece ayuda con reparaciones?
                                </div>

                                <div className="collapse-content text-sm">
                                    Sí. Ofrecemos financiamiento sin intereses para reparaciones menores, con facilidades de pago para ayudar a nuestros conductores a mantenerse en movimiento.
                                </div>

                            </div>


                            <div tabIndex={0} className="collapse collapse-plus bg-white border-slate-200 rounded-xl shadow-sm">

                                <div className="collapse-title font-semibold">
                                    ¿Cómo maneja MDS las confirmaciones y los settlements?
                                </div>

                                <div className="collapse-content text-sm">
                                    Enviamos a nuestros conductores las confirmaciones completas de las cargas. Los settlements se envían por email el día correspondiente al pago con información clara y detallada sobre ingresos y gastos.
                                </div>

                            </div>


                            <div tabIndex={0} className="collapse collapse-plus bg-white border-slate-200 rounded-xl shadow-sm">

                                <div className="collapse-title font-semibold">
                                    ¿MDS ofrece incentivos por inspecciones?
                                </div>

                                <div className="collapse-content text-sm">
                                    Sí. Las inspecciones de preempleo y trimestrales son gratuitas y pueden incluir una remuneración de $100 cuando no se detectan problemas técnicos. Las inspecciones del DOT sin señalamientos pueden recibir una remuneración de $400.
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
                                        ¿TODAVÍA TIENES PREGUNTAS?
                                    </p>
                                    <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">
                                        Estamos Aquí para Ayudarte.
                                    </h2>
                                    <p className="mt-4 text-blue-100 leading-relaxed">
                                        Nuestro equipo está disponible para responder tus preguntas y ayudarte a conocer más sobre cómo trabajar con MDS.
                                    </p>
                                </div>
                                <Link onClick={() => window.scrollTo(0, 0)} to="/es/contacto" className="bg-white text-blue-600 font-semibold px-7 py-3 rounded-lg text-center whitespace-nowrap hover:bg-slate-100 transition">
                                    Contáctanos →
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </main>
        </>
    )
}
export default FAQSpanish