import logo from "../assets/logo.png"

function Footer(){
    return(
        <footer className="footer sm:footer-horizontal shadow-sm p-10">
            <aside>
                <img src={logo} className="w-30 h-auto"/>
                <p>
                MDS Service Group Corporation
                <br />
                Providing reliable tech since 1992
                </p>
            </aside>
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">Home</a>
                <a className="link link-hover">Driver Benefits</a>
                <a className="link link-hover">About Us</a>
                <a className="link link-hover">FAQ</a>
                <a className="link link-hover">Contact</a>
            </nav>
            <nav>
                <h6 className="footer-title">Contact</h6>
                <a className="link link-hover">786-###-####</a>
                <a className="link link-hover">@mdsservicesgroupcorp</a>
                <a className="link link-hover">Miami, FL, 1260 SW</a>
            </nav>
    </footer>
    )
}

export default Footer