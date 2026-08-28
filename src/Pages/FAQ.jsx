import Footer from "../components/Footer"
import Nav from "../components/Nav"
import bgimage1 from "../assets/bg-image.png"

function FAQ(){
    return(
        <>
            <main className = "bg-slate-100 text-slate-900 min-h-screen">
                <Nav />
                <section className = "py-16 md:py-24 relative min-h-150" style={{ backgroundImage: `url(${bgimage1})` }}>
                    <div className = "">
                        <p className = "text-sm font-semibold text-blue-600 tracking-[0.2em]">FAQ</p>
                        <h1 className = "font-bold text-4xl sm:text-5xl lg:text-6xl text-slate-900 leading-tight tracking-loose">Questions?</h1>
                        <h1 className = "font-bold text-4xl sm:text-5xl lg:text-6xl text-blue-600 leading-tight tracking-loose">We've Got Answers.</h1>
                        <p className = "mt-6 sm:text-lg">Find answers to the most questions drivers ask about working with MDS.</p>
                    </div>
                </section>
                <section className = "">
                    <div>
                        <div tabIndex={0} className="collapse collapse-plus bg-base-100 border-base-300 border">
                            <div className="collapse-title font-semibold">How do I create an account?</div>
                            <div className="collapse-content text-sm">
                                Click the "Sign Up" button in the top right corner and follow the registration process.
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-plus bg-base-100 border-base-300 border">
                            <div className="collapse-title font-semibold">How do I create an account?</div>
                            <div className="collapse-content text-sm">
                                Click the "Sign Up" button in the top right corner and follow the registration process.
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-plus bg-base-100 border-base-300 border">
                            <div className="collapse-title font-semibold">How do I create an account?</div>
                            <div className="collapse-content text-sm">
                                Click the "Sign Up" button in the top right corner and follow the registration process.
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-plus bg-base-100 border-base-300 border">
                            <div className="collapse-title font-semibold">How do I create an account?</div>
                            <div className="collapse-content text-sm">
                                Click the "Sign Up" button in the top right corner and follow the registration process.
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-plus bg-base-100 border-base-300 border">
                            <div className="collapse-title font-semibold">How do I create an account?</div>
                            <div className="collapse-content text-sm">
                                Click the "Sign Up" button in the top right corner and follow the registration process.
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