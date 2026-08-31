import Footer from "../components/Footer"
import Nav from "../components/Nav"

import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { Link } from "react-router-dom"

function ContactSpanish() {
    return (
        <main className="bg-white text-slate-900 min-h-screen">
            <Nav />
            <section className="py-20 md:py-28 bg-slate-100">
                <div className="max-w-7xl w-full mx-auto px-6 lg:px-8">
                    <div className="max-w-2xl">
                        <p className="text-sm font-semibold text-blue-600 tracking-[0.2em]">
                            CONTÁCTANOS
                        </p>
                        <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                            Estamos Aquí
                            <span className="block text-blue-600">
                                Para Ayudarte.
                            </span>
                        </h1>
                        <div className="w-16 h-1 bg-blue-600 mt-6"></div>
                        <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                            ¿Tienes preguntas sobre cómo trabajar con MDS? Comunícate directamente con nuestro equipo y con gusto te ayudaremos.
                        </p>
                    </div>
                </div>
            </section>
            <section className="py-16 md:py-24">
                <div className="max-w-7xl w-full mx-auto px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <p className="text-sm font-semibold text-blue-600 tracking-[0.2em]">
                            PONTE EN CONTACTO
                        </p>
                        <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
                            Información de Contacto
                        </h2>
                        <p className="mt-4 text-slate-600 leading-relaxed">
                            Comunícate con MDS Services Group Corp. utilizando cualquiera de los siguientes métodos de contacto.
                        </p>
                        <div className="mt-12 space-y-8">
                            <div className="flex items-center gap-5 border-b border-slate-200 pb-8">
                                <div className="w-12 h-12 shrink-0 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500">
                                        Teléfono
                                    </p>
                                    <p className="mt-1 text-lg font-semibold">
                                        (786) 486-4982
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-5 border-b border-slate-200 pb-8">
                                <div className="w-12 h-12 shrink-0 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500">
                                        Correo Electrónico
                                    </p>
                                    <p className="mt-1 text-lg font-semibold">
                                        mdsservices01@gmail.com
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-5 border-b border-slate-200 pb-8">
                                <div className="w-12 h-12 shrink-0 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500">
                                        Dirección
                                    </p>
                                    <p className="mt-1 text-lg font-semibold">
                                        4510 SW 137th Ct, Miami, Florida 33175
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-5">
                                <div className="w-12 h-12 shrink-0 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                                    <Clock className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500">
                                        Apoyo al Conductor
                                    </p>
                                    <p className="mt-1 text-lg font-semibold">
                                        Disponible 24/7
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-16 md:py-20 bg-slate-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="bg-blue-600 rounded-2xl px-8 py-10 md:px-12 md:py-12">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-white">
                                    ¿Te Interesa Trabajar con MDS?
                                </h2>
                                <p className="mt-3 text-blue-100">
                                    Conoce más sobre los beneficios disponibles para nuestros conductores.
                                </p>
                            </div>
                            <Link onClick={() => window.scrollTo(0, 0)} to="/es/beneficios" className="bg-white text-blue-600 font-semibold px-7 py-3 rounded-lg text-center whitespace-nowrap hover:bg-slate-100 transition">
                                Beneficios para Conductores →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>

    )
}

export default ContactSpanish