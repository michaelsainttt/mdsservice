import Footer from "../components/Footer"
import Nav from "../components/Nav"
import truckimage1 from "../assets/TruckInHorizon1.png"
import truckimage2 from "../assets/backgroundimage2.jpg"

function Home(){
    const values = [
        {
            title:"Integrity",
            description:"We do what's right, every time. Transparency is at the core of every decision."
        },
        {
            title:"Respect",
            description:"We value every driver and every partner. You're not a number. You're family."
        },
        {
            title:"Reliability",
            description:"We keep our word and keep you moving with consistent loads and on-time payments"
        },
        {
            title:"Support",
            description:"Our team is here for you 24/7, because we know the road never really stops."
        },

    ]
    return(
        <main className="min-h-screen bg-slate-100 text-slate-900">
            <Nav/>
            <section className="py-16 md:py-24 relative min-h-150 bg-cover sm:bg-left lg:bg-center xl:bg-right" style={{ backgroundImage: `url(${truckimage1})` }}>
                <div className="max-w-3xl px-8 sm:px-8 lg:px-12 ">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                        MDS Services Group Corp.
                    </p>

                    <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-slate-900">
                        Built Around Drivers.
                        <br />
                        Driven by <span className="text-blue-600">Respect.</span>
                    </h1>

                    <p className="mt-6 max-w-lg text-base sm:text-lg leading-relaxed text-slate-600">
                        At MDS Services Group Corp., we believe great relationships build great
                        results. We're more than a dispatch company — we're a partner on the road.
                    </p>

                    <button className="btn mt-8 bg-blue-600 text-white border-none hover:bg-blue-700 px-7">
                        Work With Us
                    </button>

                    </div>
            </section>
            <section className="py-16 md:py-24 relative">
                <div className="max-w-3xl px-8 sm:px-12 lg:px-20">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">OUR STORY</p>

                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                        From Humble Beginnings to Highway Leadership
                    </h2>
                    <div className = "mt-6 space-y-4 text-slate-600 leading-relaxed">
                        <p>MDS Services Group Corp., was founded with a simple mission: to treat drivers with honesty, respect, and fairness.</p>
                        <p>What started as a small team with big values has grown into a truster partner for drivers.</p>
                        <p>We continue to grow by staying true to what matters most - putting drivers first, every mile, every load.</p>
                    </div>
                </div>
                <div>
                    <img src={truckimage2}/>
                </div>
            </section>
            <section>
                <div>
                    <p>Our Values</p>
                    <h2>The principles That Drive Us</h2>
                </div>
                <div>
                    {values.map((value) => (
                        <div key={value.title}>
                            <h3>{value.title}</h3>
                            <p>{value.description}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section>
                <div>
                    <img src="" alt=""/>
                </div>
                <div>
                    <h3>Let's Build the Road Ahead, Together.</h3>
                    <p>Join a company that's commited to your success, on and off the road.</p>
                    <button className="">
                        Contact Us
                    </button>
                </div>
            </section>
            <Footer/>
        </main>
    )
}

export default Home