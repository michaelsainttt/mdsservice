import logo from "../assets/logo.png"
import { Link, useLocation } from "react-router-dom"

function Footer() {

    const location = useLocation()
    const isSpanish = location.pathname.startsWith("/es")

    const companyLinks = isSpanish
        ? [
            { name: "Inicio", path: "/es" },
            { name: "Beneficios para Conductores", path: "/es/beneficios" },
            { name: "Nosotros", path: "/es/nosotros" },
            { name: "Preguntas Frecuentes", path: "/es/preguntas" },
            { name: "Contacto", path: "/es/contacto" }
        ]
        : [
            { name: "Home", path: "/" },
            { name: "Driver Benefits", path: "/benefits" },
            { name: "About Us", path: "/about" },
            { name: "FAQ", path: "/faq" },
            { name: "Contact", path: "/contact" }
        ]
    return (
        <footer className="footer sm:footer-horizontal bg-slate-900 text-slate-300 p-10">
            <aside>
                <Link to={isSpanish ? "/es" : "/"}>
                    <img src={logo} alt="MDS Services Group Corp." className="w-30 h-auto" />
                </Link>
                <p className="leading-relaxed">
                    MDS Services Group Corp.
                    <br />
                    El Horizonte es nuestro
                </p>
            </aside>
            <nav>
                <h6 className="footer-title text-white">
                    {isSpanish ? "Redes Sociales" : "Social Media"}
                </h6>
                <a href="https://www.instagram.com/mdsservicesgroupcorp/" target="_blank" rel="noopener noreferrer" className="link link-hover">
                    Instagram
                </a>
                <a href="https://www.facebook.com/profile.php?id=61589647782513" target="_blank" rel="noopener noreferrer" className="link link-hover">
                    Facebook
                </a>
            </nav>
            <nav>
                <h6 className="footer-title text-white">
                    {isSpanish ? "Compañía" : "Company"}
                </h6>
                {companyLinks.map((link) => (
                    <Link key={link.path} to={link.path} className="link link-hover">
                        {link.name}
                    </Link>
                ))}
            </nav>
            <nav>
                <h6 className="footer-title text-white">
                    {isSpanish ? "Contacto" : "Contact"}
                </h6>
                <a href="mailto:mdsservices01@gmail.com" className="link link-hover">
                    mdsservices01@gmail.com
                </a>
                <a href="tel:+13054347139" className="link link-hover">
                    (786) 486-4982
                </a>
                <a href="https://maps.google.com/?q=4510+SW+137th+Ct+Miami+Florida+33175" target="_blank" rel="noopener noreferrer" className="link link-hover">
                    4510 SW 137th Ct, Miami, Florida 33175
                </a>
            </nav>
        </footer>
    )
}

export default Footer