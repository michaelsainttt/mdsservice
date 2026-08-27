import logo from "../assets/logo.png"

function Nav(){
    return(
    <div class="navbar max-w-10xl mx-auto">
        <div class="navbar-start">
            <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
                tabindex="-1"
                class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li><a href="">Home</a></li>
                <li><a>Driver Benefits</a></li>
                <li><a>About Us</a></li>
                <li><a>FAQ</a></li>
            </ul>
            </div>
            <img src={logo} className="w-30 h-auto mx-auto lg:mx-0"/>
        </div>
        <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal px-1 gap-16">
            <li className="font-semibold"><a>Home</a></li>
            <li className="font-semibold"><a>Driver Benefits</a></li>
            <li className="font-semibold"><a>About Us</a></li>
            <li className="font-semibold"><a>FAQ</a></li>
            </ul>
        </div>
        <div class="navbar-end">
    <a class="btn bg-blue-600 border-0 rounded-xl">Contact Us</a>
  </div>
</div>
    )
}

export default Nav