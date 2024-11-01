import { MdClose } from "react-icons/md";
import Logo from "../shared/Logo";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";

const MobileNav = () => {
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
        <>
            <div className="lg:hidden bg-white fixed top-0 z-[50] left-0 p-5 w-full flex items-center justify-between">
                <Logo />
                <button onClick={toggleMobileMenu} className="mb-4 text-gray-600 hover:text-primary hover:bg-gray-50 p-1.5 rounded-md duration-300">
                    {isMobileMenuOpen
                        ? <MdClose size={24} className="text-primary" />
                        : <RiMenu3Fill size={24} className="text-primary" />}
                </button>
            </div>

            {isMobileMenuOpen && (
                <div className={`fixed inset-0 bg-black opacity-50 z-[80] ${isScrolled ? "bg-black/80 backdrop-blur-lg " : ""}`} onClick={toggleMobileMenu} />
            )}

            <div className={`h-full min-h-screen z-[90] bg-white fixed top-0 left-0 w-[70%] p-5 transition-transform duration-300 transform ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="w-full flex items-center justify-between ">
                    <Logo />
                    <button onClick={toggleMobileMenu} className="mb-4 text-gray-600 hover:text-primary hover:bg-gray-50 p-1.5 rounded-md duration-300">
                        <MdClose size={24} className="text-primary" />
                    </button>
                </div>
                <nav className="flex flex-col space-y-3 mt-10">
                    <Link to="/" onClick={toggleMobileMenu} className={`px-3 py-2 text-gray-600 hover:text-primary duration-300 hover:bg-gray-50 ${pathname === '/' ? 'font-bold' : ''}`}>
                        Home
                    </Link>
                    <Link to="/about" onClick={toggleMobileMenu} className={`px-3 py-2 text-gray-600 hover:text-primary duration-300 hover:bg-gray-50 ${pathname === '/about' ? 'font-bold' : ''}`}>
                        About
                    </Link>
                    <Link to="/shop" onClick={toggleMobileMenu} className={`px-3 py-2 text-gray-600 hover:text-primary duration-300 hover:bg-gray-50 ${pathname === '/shop' ? 'font-bold' : ''}`}>
                        Shop
                    </Link>
                    <Link to="/faqs" onClick={toggleMobileMenu} className={`px-3 py-2 text-gray-600 hover:text-primary duration-300 hover:bg-gray-50 ${pathname === '/faqs' ? 'font-bold' : ''}`}>
                        FAQs
                    </Link>
                </nav>
            </div>
        </>
    );
};

export default MobileNav;
