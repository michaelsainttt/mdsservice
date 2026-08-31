import Footer from "../components/Footer"
import Nav from "../components/Nav"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

function Contact() {

    return (
        <main className="bg-white text-slate-900 min-h-screen">

            <Nav />


            {/* HERO */}
            <section className="py-20 md:py-28 bg-slate-100">

                <div className="max-w-7xl w-full mx-auto px-6 lg:px-8">

                    <div className="max-w-2xl">

                        <p className="text-sm font-semibold text-blue-600 tracking-[0.2em]">
                            CONTACT US
                        </p>

                        <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                            Let's Get in
                            <span className="block text-blue-600">
                                Touch.
                            </span>
                        </h1>

                        <div className="w-16 h-1 bg-blue-600 mt-6"></div>

                        <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                            Have questions about working with MDS? Contact our team directly and we'll be happy to help.
                        </p>

                    </div>

                </div>

            </section>


            {/* CONTACT DETAILS */}
            <section className="py-16 md:py-24">

                <div className="max-w-7xl w-full mx-auto px-6 lg:px-8">

                    <div className="max-w-3xl">

                        <p className="text-sm font-semibold text-blue-600 tracking-[0.2em]">
                            GET IN TOUCH
                        </p>

                        <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
                            Contact Information
                        </h2>

                        <p className="mt-4 text-slate-600 leading-relaxed">
                            Reach out to MDS Services Group Corp. using any of the contact methods below.
                        </p>


                        <div className="mt-12 space-y-8">

                            {/* PHONE */}
                            <div className="flex items-center gap-5 border-b border-slate-200 pb-8">

                                <div className="w-12 h-12 shrink-0 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                                    <Phone className="w-5 h-5" />
                                </div>

                                <div>
                                    <p className="text-sm text-slate-500">
                                        Phone
                                    </p>

                                    <p className="mt-1 text-lg font-semibold">
                                        (786) 486-4982
                                    </p>
                                </div>

                            </div>


                            {/* EMAIL */}
                            <div className="flex items-center gap-5 border-b border-slate-200 pb-8">

                                <div className="w-12 h-12 shrink-0 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                                    <Mail className="w-5 h-5" />
                                </div>

                                <div>
                                    <p className="text-sm text-slate-500">
                                        Email
                                    </p>

                                    <p className="mt-1 text-lg font-semibold">
                                        mdsservices01@gmail.com
                                    </p>
                                </div>

                            </div>


                            {/* ADDRESS */}
                            <div className="flex items-center gap-5 border-b border-slate-200 pb-8">

                                <div className="w-12 h-12 shrink-0 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                                    <MapPin className="w-5 h-5" />
                                </div>

                                <div>
                                    <p className="text-sm text-slate-500">
                                        Address
                                    </p>

                                    <p className="mt-1 text-lg font-semibold">
                                        4510 SW 137Th Ct, Miami, Florida 33175
                                    </p>
                                </div>

                            </div>


                            {/* HOURS */}
                            <div className="flex items-center gap-5">

                                <div className="w-12 h-12 shrink-0 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                                    <Clock className="w-5 h-5" />
                                </div>

                                <div>
                                    <p className="text-sm text-slate-500">
                                        Driver Support
                                    </p>

                                    <p className="mt-1 text-lg font-semibold">
                                        Available 24/7
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* CTA */}
            <section className="py-16 md:py-20 bg-slate-100">

                <div className="max-w-7xl mx-auto px-6 lg:px-8">

                    <div className="bg-blue-600 rounded-2xl px-8 py-10 md:px-12 md:py-12">

                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

                            <div>

                                <h2 className="text-2xl md:text-3xl font-bold text-white">
                                    Interested in Working With MDS?
                                </h2>

                                <p className="mt-3 text-blue-100">
                                    Learn more about the benefits available to our drivers.
                                </p>

                            </div>

                            <a href="/driver-benefits" className="bg-white text-blue-600 font-semibold px-7 py-3 rounded-lg text-center whitespace-nowrap hover:bg-slate-100 transition">
                                Driver Benefits →
                            </a>

                        </div>

                    </div>

                </div>

            </section>


            <Footer />

        </main>
    )
}

export default Contact 