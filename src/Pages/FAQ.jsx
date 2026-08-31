import Footer from "../components/Footer"
import Nav from "../components/Nav"
import bgimage1 from "../assets/bg-image.png"

function FAQ(){
    return(
        <>
            <main className = "bg-slate-100 text-slate-900 min-h-screen">
                <Nav />
                <section className = "py-16 md:py-24 relative min-h-150 bg-cover bg-left sm:bg-center bg-no-repeat flex items-center" style={{ backgroundImage: `url(${bgimage1})` }}>
                    <div className = "max-w-7xl mx-auto w-full px-6 lg:px-8">
                        <div className = "max-w-xl ,x=a">
                            <p className = "text-sm font-semibold text-blue-600 tracking-[0.2em]">FAQ</p>
                            <h1 className = "font-bold text-4xl sm:text-5xl lg:text-6xl text-slate-900 leading-tight tracking-loose">Questions?</h1>
                            <h1 className = "font-bold text-4xl sm:text-5xl lg:text-6xl text-blue-600 leading-tight tracking-loose">We've Got Answers.</h1>
                            <p className = "mt-6 sm:text-lg text-base text-slate-600 leading-relaxe max-w-lg">Find answers to the most questions drivers ask about working with MDS.</p>
                        </div>
                    </div>
                </section>
                <section className = "py-16 md:py-24 bg-slate-100">
                    <div className = "max-w-7xl w-full mx-auto px-6 lg:px-8" >
                        <div className = "max-w-2xl mx-auto text-center">
                            <p className = "text-sm font-semibold text-blue-600 tracking-[0.2em]">GENERAL QUESTIONS</p>
                            <h1 className = "font-bold text-2xl sm:text-3xl lg:text-4xl text-slate-900 leading-tight tracking-loose">Everything You Need to Know</h1>
                            <div className = "w-16 h-1 bg-blue-600 mt-6 mx-auto"></div>
                            <p className = "mt-6 text-slate-600 text-lg leading-relaxed">Can't find the question you're looking for? Contact our team - we're here to help.</p>
                        </div>
                        <div className = "mt-12 max-w-4xl space-y-4 mx-auto">
                            <div tabIndex={0} className="collapse collapse-plus bg-white rounded-xl shadow-sm border-slate-200">
                                <div className="collapse-title font-semibold">How quickly do I get paid?</div>
                                <div className="collapse-content text-sm">
                                    Drivers can receive payment within 48 hours after delivering a load or choose weekly payments based on their preference.
                                </div>
                            </div>
                            <div tabIndex={0} className="collapse collapse-plus bg-white border-slate-200 rounded-xl shadow-sm">
                                <div className="collapse-title font-semibold">What types of loads does MDS work with?</div>
                                <div className="collapse-content text-sm">
                                    We work with refrigerated, dry van, and flatbed loads, giving drivers access to a variety of freight opportunities.
                                </div>
                            </div>
                            <div tabIndex={0} className="collapse collapse-plus bg-white border-slate-200 rounded-xl shadow-sm">
                                <div className="collapse-title font-semibold">Does MDS have consistent freight opportunities?</div>
                                <div className="collapse-content text-sm">
                                    Yes. We work with more than 250 brokers and offer year-round freight opportunities.
                                </div>
                            </div>
                            <div tabIndex={0} className="collapse collapse-plus bg-white border-slate-200 rounded-xl shadow-sm">
                                <div className="collapse-title font-semibold">Do you offer fuel discounts?</div>
                                <div className="collapse-content text-sm">
                                    Yes. Fuel card options are available with discounts of up to 30 cents per gallon to help drivers reduce operating costs.
                                </div>
                            </div>
                            <div tabIndex={0} className="collapse collapse-plus bg-white border-slate-200 rounded-xl shadow-sm">
                                <div className="collapse-title font-semibold">Is escrow required?</div>
                                <div className="collapse-content text-sm">
                                    No. MDS does not require drivers to maintain an escrow account.
                                </div>
                            </div>
                            <div tabIndex={0} className="collapse collapse-plus bg-white border-slate-200 rounded-xl shadow-sm">

                                <div className="collapse-title font-semibold">
                                    Can I use the fuel card for cash advances?
                                </div>

                                <div className="collapse-content text-sm">
                                    Yes. Fuel cards can be used for fuel purchases or cash advances without additional fees for using the card.
                                </div>

                            </div>


                            <div tabIndex={0} className="collapse collapse-plus bg-white border-slate-200 rounded-xl shadow-sm">

                                <div className="collapse-title font-semibold">
                                    Does MDS offer 24/7 driver support?
                                </div>

                                <div className="collapse-content text-sm">
                                    Yes. Our team is available 24/7 to assist drivers with operational needs and provide support while they are on the road.
                                </div>

                            </div>


                            <div tabIndex={0} className="collapse collapse-plus bg-white border-slate-200 rounded-xl shadow-sm">

                                <div className="collapse-title font-semibold">
                                    Does MDS offer insurance options?
                                </div>

                                <div className="collapse-content text-sm">
                                    Yes. We offer competitive liability and cargo insurance options without requiring a down payment.
                                </div>

                            </div>


                            <div tabIndex={0} className="collapse collapse-plus bg-white border-slate-200 rounded-xl shadow-sm">

                                <div className="collapse-title font-semibold">
                                    Can I rent a trailer through MDS?
                                </div>

                                <div className="collapse-content text-sm">
                                    Yes. We offer trailer rentals at reasonable rates, with newer equipment available for different types of loads.
                                </div>

                            </div>


                            <div tabIndex={0} className="collapse collapse-plus bg-white border-slate-200 rounded-xl shadow-sm">

                                <div className="collapse-title font-semibold">
                                    Does MDS help with repairs?
                                </div>

                                <div className="collapse-content text-sm">
                                    Yes. We offer interest-free financing for minor repairs with flexible payment options to help our drivers stay on the road.
                                </div>

                            </div>


                            <div tabIndex={0} className="collapse collapse-plus bg-white border-slate-200 rounded-xl shadow-sm">

                                <div className="collapse-title font-semibold">
                                    How does MDS handle load confirmations and settlements?
                                </div>

                                <div className="collapse-content text-sm">
                                    We provide drivers with complete load confirmations rather than summaries. Settlements are sent by email on the scheduled payment day with clear details of income and expenses.
                                </div>

                            </div>


                            <div tabIndex={0} className="collapse collapse-plus bg-white border-slate-200 rounded-xl shadow-sm">

                                <div className="collapse-title font-semibold">
                                    Does MDS offer incentives for inspections?
                                </div>

                                <div className="collapse-content text-sm">
                                    Yes. Pre-employment and quarterly inspections are free and may include a $100 incentive when no technical problems are found. Qualifying DOT inspections with no violations may receive a $400 incentive.
                                </div>

                            </div>


                            <div tabIndex={0} className="collapse collapse-plus bg-white border-slate-200 rounded-xl shadow-sm">

                                <div className="collapse-title font-semibold">
                                    Does MDS provide logbook assistance?
                                </div>

                                <div className="collapse-content text-sm">
                                    Yes. We provide 24/7 attention to logbook status and offer assistance when needed and possible.
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
                                    <p className="text-sm font-semibold text-blue-100 tracking-[0.2em]">STILL HAVE QUESTIONS?</p>
                                    <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">We're Here to Help.</h2>
                                    <p className="mt-4 text-blue-100 leading-relaxed">Our team is available to answer your questions and help you learn more about working with MDS.</p>
                                </div>
                                <a href="/contact" className="bg-white text-blue-600 font-semibold px-7 py-3 rounded-lg text-center whitespace-nowrap hover:bg-slate-100 transition">Contact Us →</a>
                            </div>
                        </div>
                    </div>
                </section>
            <Footer />
            </main>
        </>
    )
}
export default FAQ