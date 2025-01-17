import { Menu, X } from "lucide-react"
import { useState } from "react"
import logo from "../assets/logo.png"
import { navItems } from "../constants/index"
const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen)
    }
    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        <img className="w-10 h-10 mr-2" src={logo} alt="logo" />
                        <span className="text-xl tracking-tight">VirtualR</span>
                    </div>
                    <ul className={'hidden lg:flex ml-14 space-x-12'}  >
                        {navItems.map((item, index) => (
                            <li key={index} className="py-4">
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="hidden lg:flex justify-center space-x-12 items-center">
                        <a href="#" className="py-2 px-3 border rounded-md">
                            Sign In
                        </a>
                        <a href="#" className=" bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md">Create an account</a>
                    </div>
                    <div className="lg:hidden flex justify-end" onClick={toggleNavbar}>
                        {mobileDrawerOpen ? <X /> : <Menu />}
                    </div>

                </div>
                {mobileDrawerOpen &&

                    <div className="flex flex-col justify-center items-center p-12 bg-neutral-900 list-none z-20 right-0 fixed w-full">
                        {navItems.map((item, index) => (
                            <li key={index} className="py-4">
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}

                        <div className="flex m-4 justify-center space-x-6 items-center">
                            <a href="#" className="py-2 px-3 border rounded-md">
                                Sign In
                            </a>
                            <a href="#" className=" bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md">Create an account</a>
                        </div>
                    </div>
                }
            </div>
        </nav>
    )
}

export default Navbar
