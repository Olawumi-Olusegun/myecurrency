import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { RiMenu3Line } from "react-icons/ri";
import Logo from "../shared/Logo";

const DesktopNav = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const { pathname } = useLocation();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerWidth >= 10) {
                setIsScrolled(window.scrollY > 10);
                setIsMobileMenuOpen(false);
            }
        };

        const handleResize = () => {
            if (window.innerWidth > 20) {
                setIsScrolled(false);
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, []);



    return (
        <div
            className={`hidden lg:block relative lg:fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-lg shadow" : "bg-transparent"}`}
        >
            <div className="max-w-[1109px] bg-white lg:bg-transparent py-4 px-5 lg:px-0 mx-auto flex items-center">
                <Logo />

                <nav className="hidden md:flex space-x-8 ml-28">
                    <Link
                        to="/"
                        className={`text-gray-600 hover:text-primary ${pathname === "/" ? "font-bold" : ""
                            }`}
                    >
                        Home
                    </Link>
                    <Link
                        to="/about"
                        className={`text-gray-600 hover:text-primary ${pathname === "/about" ? "font-bold" : ""
                            }`}
                    >
                        About
                    </Link>
                    <Link
                        to="/shop"
                        className={`text-gray-600 hover:text-primary ${pathname === "/shop" ? "font-bold" : ""
                            }`}
                    >
                        Shop
                    </Link>
                    <Link
                        to="/faqs"
                        className={`text-gray-600 hover:text-primary ${pathname === "/faqs" ? "font-bold" : ""
                            }`}
                    >
                        FAQs
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button onClick={toggleMobileMenu} className="md:hidden ml-auto text-gray-600 hover:text-primary">
                    <RiMenu3Line size={24} className="text-primary" />
                </button>
            </div>

            {/* Overlay */}
            <div
                className={`fixed inset-0 z-[999] bg-black bg-opacity-50 transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                onClick={toggleMobileMenu}
            ></div>
        </div>
    );
};

export default DesktopNav;
