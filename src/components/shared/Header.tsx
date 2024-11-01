import MobileNav from "../navbar/MobileNav";
import DesktopNav from "../navbar/DesktopNav";

const Header = () => {
    return (
        <header className="w-full relative">
            <DesktopNav />
            <MobileNav />
        </header>
    );
};

export default Header;
