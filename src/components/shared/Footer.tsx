import { Link } from "react-router-dom";
import FooterLogo from "./FooterLogo";
import SocialIcons from "./SocialIcons";

const Footer = () => {
    return (
        <footer
            className="bg-[#12305b] text-white bg-cover bg-center relative mt-20"
            style={{ backgroundImage: "url('./assets/images/footer-background-image.png')", }}
        >
            {/* Optional overlay */}
            <div className="absolute inset-0 bg-[#12305b] mix-blend-plus-darker bg-opacity-90"></div>

            <div className="w-full lg:max-w-[1325px] mx-auto px-4 py-16 flex flex-col items-center relative z-10">
                <div className="flex flex-col items-center mb-12">
                    <FooterLogo />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    <div className="flex flex-col md:flex-row gap-5">
                        <div className="w-fit mb-6 flex flex-col gap-5">
                            <h4 className="text-base font-semibold uppercase ">Company</h4>
                            <ul className="text-gray-400">
                                <li><a href="#" className="hover:text-gray-300">About</a></li>
                                <li><a href="#" className="hover:text-gray-300">Blog</a></li>
                                <li><a href="#" className="hover:text-gray-300">Contact</a></li>
                                <li><a href="#" className="hover:text-gray-300">Jobs</a></li>
                            </ul>
                        </div>
                        <div className="w-full mb-6 flex flex-col gap-3">
                            <h4 className="text-base font-semibold uppercase ">Contact</h4>
                            <ul>
                                <li><span className="text-gray-400">PHONE</span></li>
                                <li><a href="tel:+2347085073128" className="hover:text-gray-300 font-semibold">+234 708 507 3128</a></li>
                            </ul>
                            <ul>
                                <li><span className="text-gray-400">Address</span></li>
                                <li>16, Ogindipe Close, Upston Close</li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full mb-6 flex flex-col gap-3 lg:max-w-[463px]">
                        <h4 className="text-base font-semibold uppercase ">Consumer Advisory</h4>
                        <p className="text-sm">These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. This product should be used only as directed on the label. All trademarks and copyrights are property of their respective owners and not affiliated with nor do they endorse this product. Results may vary.</p>
                        <p className="text-sm">By using our website or product, you agree to follow our <Link to="#" className="text-blue-600">terms of service.</Link></p>
                    </div>
                    <div className="w-full self-stretch mb-6 flex flex-col gap-5 lg:max-w-[322px] ">
                        <div className="w-full flex flex-col gap-5 lg:px-10 lg:border-l lg:border-l-gray-600 ">
                            <h4 className="text-base font-semibold uppercase">Get in Touch</h4>
                            <p className="text-sm text-gray-400 max-w-[270px] ">Feel free to get in touch with us via email</p>
                            <a href="mailto:hello@sleepstiq.com" className="text-lg font-bold ">hello@sleepstiq.com</a>
                        </div>
                        <SocialIcons />
                        <p className="lg:pl-10 text-gray-400">© 2020@sleepstiq. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
