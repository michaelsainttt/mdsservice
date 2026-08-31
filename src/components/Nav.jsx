import logo from "../assets/logo.png"
import { Link, useLocation } from "react-router-dom"

function Nav() {

    const location = useLocation()

    const isSpanish = location.pathname.startsWith("/es")


    const navLinks = isSpanish
        ? [
            { name: "Inicio", path: "/es" },
            { name: "Beneficios", path: "/es/beneficios" },
            { name: "Nosotros", path: "/es/nosotros" },
            { name: "Preguntas Frecuentes", path: "/es/preguntas" }
        ]
        : [
            { name: "Home", path: "/" },
            { name: "Driver Benefits", path: "/benefits" },
            { name: "About Us", path: "/about" },
            { name: "FAQ", path: "/faq" }
        ]


    const englishToSpanish = {
        "/": "/es",
        "/benefits": "/es/beneficios",
        "/about": "/es/nosotros",
        "/faq": "/es/preguntas",
        "/contact": "/es/contacto"
    }


    const spanishToEnglish = {
        "/es": "/",
        "/es/beneficios": "/benefits",
        "/es/nosotros": "/about",
        "/es/preguntas": "/faq",
        "/es/contacto": "/contact"
    }


    const languageLink = isSpanish
        ? spanishToEnglish[location.pathname] || "/"
        : englishToSpanish[location.pathname] || "/es"


    return (
        <div className="navbar max-w-7xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown bg-blue-600 rounded-4xl">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={-1} className="menu menu-sm dropdown-content bg-blue-600 rounded-box z-10 mt-3 w-52 p-2 shadow text-slate-100">
                        {navLinks.map((link) => (
                            <li key={link.path}>
                                <Link to={link.path}>
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link to={languageLink} className="font-bold">
                                {isSpanish ? "English" : "Español"}
                            </Link>
                        </li>
                    </ul>
                </div>
                <Link to={isSpanish ? "/es" : "/"}>
                    <img src={logo} alt="MDS Services Group Corp." className="w-30 h-auto mx-auto lg:mx-0" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-12">
                    {navLinks.map((link) => (
                        <li key={link.path} className="font-semibold">
                            <Link to={link.path}>
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="navbar-end gap-3">
                <Link to={languageLink} className="hidden sm:flex btn btn-ghost bg-slate-100 text-blue-600 font-semibold border-none">
                    {isSpanish ? "🇺🇸" : "🇪🇸"}
                </Link>
                <Link to={isSpanish ? "/es/contacto" : "/contact"} className="btn bg-blue-600 hover:bg-blue-700 text-white border-0 rounded-xl">
                    {isSpanish ? "Contáctanos" : "Contact Us"}
                </Link>
            </div>
        </div>
    )
}

export default Nav