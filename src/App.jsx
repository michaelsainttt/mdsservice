import { BrowserRouter, Routes, Route, useLocation} from "react-router-dom"

import "./App.css"

// English Pages
import Home from "./Pages/Home"
import FAQ from "./Pages/FAQ"
import Contact from "./Pages/Contact"
import Benefits from "./Pages/Benefits"
import About from "./Pages/About"

// Spanish Pages
import HomeSpanish from "./EsPages/HomeSpanish"
import FAQSpanish from "./EsPages/FAQSpanish"
import ContactSpanish from "./EsPages/ContactSpanish"
import BenefitsSpanish from "./EsPages/BenefitsSpanish"
import AboutSpanish from "./EsPages/AboutSpanish"


function AnimatedRoutes() {

  const location = useLocation()

  return (

    <div key={location.pathname} className="page-transition">

      <Routes location={location}>

        <Route path="/" element={<Home />} />
        <Route path="/benefits" element={<Benefits />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/es" element={<HomeSpanish />} />
        <Route path="/es/beneficios" element={<BenefitsSpanish />} />
        <Route path="/es/nosotros" element={<AboutSpanish />} />
        <Route path="/es/preguntas" element={<FAQSpanish />} />
        <Route path="/es/contacto" element={<ContactSpanish />} />

      </Routes>

    </div>

  )

}


function App() {

  return (

    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>

  )
}

export default App
