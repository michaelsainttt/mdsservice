import { BrowserRouter, Routes, Route } from "react-router-dom"

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


function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* ENGLISH */}
        <Route path="/" element={<Home />} />
        <Route path="/benefits" element={<Benefits />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />


        {/* SPANISH */}
        <Route path="/es" element={<HomeSpanish />} />
        <Route path="/es/beneficios" element={<BenefitsSpanish />} />
        <Route path="/es/nosotros" element={<AboutSpanish />} />
        <Route path="/es/preguntas" element={<FAQSpanish />} />
        <Route path="/es/contacto" element={<ContactSpanish />} />

      </Routes>

    </BrowserRouter>

  )
}

export default App
