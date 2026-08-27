import Footer from "../components/Footer"
import Nav from "../components/Nav"
import truckimage1 from "../assets/TruckInHorizon1.png"
import truckimage2 from "../assets/backgroundimage2.jpg"
import {
  ShieldCheck,
  Handshake,
  BadgeCheck,
  Headphones
} from "lucide-react"

const values = [
  {
    title: "Integrity",
    description: "We do what's right, every time. Transparency is at the core of every decision.",
    icon: <ShieldCheck className="w-7 h-7" />
  },
  {
    title: "Respect",
    description: "We value every driver and every partner. You're not a number — you're family.",
    icon: <Handshake className="w-7 h-7" />
  },
  {
    title: "Reliability",
    description: "We keep our word and keep you moving with consistent loads and on-time payments.",
    icon: <BadgeCheck className="w-7 h-7" />
  },
  {
    title: "Support",
    description: "Our team is here for you 24/7, because we know the road never really stops.",
    icon: <Headphones className="w-7 h-7" />
  }
]

function Home(){
    return(
        <main className="min-h-screen bg-slate-100 text-slate-900">
            <Nav/>
            <section className="py-16 md:py-24 relative min-h-150 bg-cover bg-position-[10%_center] md:bg-position-[%_center] lg:bg-position[50%_center] sm:bg-position[90%_center]" style={{ backgroundImage: `url(${truckimage1})` }}>
                <div className="max-w-3xl px-8 sm:px-10 lg:px-20 ">
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
                        <span>→</span>
                    </button>

                    </div>
            </section>
            
        <section className="py-16 md:py-24 relative flex gap-6">
            <div className="max-w-3xl px-8 sm:px-12 lg:px-20">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">OUR STORY</p>

                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                    From Humble Beginnings to Highway Leadership
                </h2>
                <div className = "mt-6 space-y-4 text-slate-600 leading-relaxed">
                    <p>MDS Services Group Corp. was founded with a simple mission: to build a company where drivers are treated with honesty, respect, and fairness. </p>
                    <p>What started as a small team with strong values has grown into a trusted partner for drivers across the country. Through relationships with more than 250 brokers, we help connect our drivers with opportunities while providing the support they need to stay focused on the road.</p>
                    <p>As MDS continues to grow, our priorities remain the same. We believe in transparent communication, dependable service, and putting our drivers first. Every mile, every load, and every partnership matters to us.</p>
                </div>
                <button className = "btn mt-8 bg-blue-600 text-white border-none hover:bg-blue-700 px-7">Learn More About Us <span>→</span></button>
            </div>
            <div className=" relative w-full">
                <img className="w-11/12 h-100 object-cover rounded-2xl" src={truckimage2}/>

                <div className="absolute bottom-0 right-0 bg-blue-700 text-white rounded-2xl p-6 shadow-lg">
                    <p className="text-4xl font-bold">250+</p>
                    <p className="font-semibold">Brokers</p>
                    <p className="text-sm">We Work With</p>
                </div>
            </div>
        </section>
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-2xl mx-auto">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                    Our Values
                </p>

                <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
                    The Principles That Drive Us
                </h2>
                </div>

                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((value) => (
                    <div key={value.title} className="text-center p-6">

                        <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-blue-600 text-white flex items-center justify-center">
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
        <section className = "" >
            <h1>Ready to get started?</h1>
            <p>Let's Build the Road Ahead, Together.</p>
            <p>Join a team that puts drivers first with reliable support, opportunities, and service.</p>
            <button>Contact Us</button>
        </section>
        <Footer/>
    </main>
)
}

export default Home