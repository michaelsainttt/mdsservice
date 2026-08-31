import Nav from "../components/Nav"
import Footer from "../components/Footer"
import bgimage1 from "../assets/bg-image.png"
import { Link } from "react-router-dom"


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


function Benefits() {

  const benefits = [
    {
      title: "250+ Broker Network",
      description: "Strong relationships with more than 250 brokers give our drivers access to a wide range of freight opportunities.",
      icon: <Network className="w-7 h-7" />
    },
    {
      title: "All Trailer Types",
      description: "We work with refrigerated, dry van, and flatbed loads to provide drivers with more opportunities.",
      icon: <Truck className="w-7 h-7" />
    },
    {
      title: "Fuel Savings",
      description: "Fuel cards offer discounts of up to 30 cents per gallon and can also be used for cash advances.",
      icon: <Fuel className="w-7 h-7" />
    },
    {
      title: "Fast & Flexible Pay",
      description: "Get paid within 48 hours after delivering a load or choose weekly payments based on your preference.",
      icon: <Clock className="w-7 h-7" />
    },
    {
      title: "24/7 Driver Support",
      description: "Our team is available around the clock to assist drivers with their needs on the road.",
      icon: <Headphones className="w-7 h-7" />
    },
    {
      title: "Affordable Insurance",
      description: "Competitive liability and cargo insurance options are available without requiring a down payment.",
      icon: <ShieldCheck className="w-7 h-7" />
    },
    {
      title: "No Escrow",
      description: "MDS does not require an escrow account, giving drivers more control over their money.",
      icon: <WalletCards className="w-7 h-7" />
    },
    {
      title: "Trailer Rental",
      description: "Reasonably priced trailer rental options are available to help drivers stay on the road.",
      icon: <Truck className="w-7 h-7" />
    },
    {
      title: "Repair Assistance",
      description: "Financing may be available for qualifying minor repairs with no interest and flexible repayment options.",
      icon: <Wrench className="w-7 h-7" />
    }
  ]


  return (
    <main className="bg-slate-100 text-slate-900 min-h-screen">

      <Nav />


      {/* HERO */}
      <section className="relative min-h-130 bg-cover bg-no-repeat flex items-center bg-left sm:bg-center" style={{ backgroundImage: `url(${bgimage1})` }}>

        <div className="max-w-7xl w-full mx-auto px-6 lg:px-8">

          <div className="max-w-xl">

            <p className="text-sm font-semibold text-blue-600 tracking-[0.2em]">
              DRIVER BENEFITS
            </p>

            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Built to Support
              <span className="block text-blue-600">
                Your Success.
              </span>
            </h1>

            <div className="w-16 h-1 bg-blue-600 mt-6"></div>

            <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-lg">
              We provide the tools, opportunities, and support drivers need to stay moving and succeed on the road.
            </p>

          </div>

        </div>

      </section>


      {/* BENEFITS */}
      <section className="py-16 md:py-24 bg-slate-100">

        <div className="max-w-7xl w-full mx-auto px-6 lg:px-8">

          {/* HEADING */}
          <div className="max-w-2xl mx-auto text-center">

            <p className="text-sm font-semibold text-blue-600 tracking-[0.2em]">
              EVERYTHING WE OFFER
            </p>

            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
              Benefits That Keep You Moving
            </h2>

            <div className="w-16 h-1 bg-blue-600 mt-6 mx-auto"></div>

            <p className="mt-6 text-slate-600 text-lg leading-relaxed">
              MDS is committed to making life on the road easier. Here's what you can count on when working with us.
            </p>

          </div>


          {/* BENEFITS GRID */}
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


      {/* SUPPORT SECTION */}
      <section className="py-16 md:py-20 bg-white">

        <div className="max-w-7xl w-full mx-auto px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <div>

              <p className="text-sm font-semibold text-blue-600 tracking-[0.2em]">
                MORE THAN DISPATCH
              </p>

              <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
                Support That Goes Beyond the Load.
              </h2>

              <p className="mt-6 text-slate-600 leading-relaxed">
                At MDS, our relationship with drivers doesn't stop once a load is booked. We work personally with our drivers and provide the information and assistance they need throughout the process.
              </p>

              <div className="mt-8 space-y-4">

                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                  <p className="font-medium">Complete load confirmations</p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                  <p className="font-medium">Clear and detailed settlements</p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                  <p className="font-medium">Personalized driver support</p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                  <p className="font-medium">24/7 logbook assistance</p>
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
                  READY TO WORK WITH US?
                </p>

                <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">
                  Put MDS Behind Every Mile.
                </h2>

                <p className="mt-4 text-blue-100 leading-relaxed">
                  Get in touch with our team and learn more about the opportunities available to you.
                </p>

              </div>

              <Link to="/contact" className="bg-white text-blue-600 font-semibold px-7 py-3 rounded-lg text-center whitespace-nowrap hover:bg-slate-100 transition">
                  Contact Us →
              </Link>

            </div>

          </div>

        </div>

      </section>


      <Footer />

    </main>
  )
}

export default Benefits