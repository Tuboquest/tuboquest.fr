import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/logo.png";

export default function Header({ nav = true }: { nav?: boolean }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full z-30 transition-colors duration-300 ${
        scrolled ? "bg-black" : "bg-gradient-to-b from-[#1e95d9] to-[#000000]"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link className="block" href="/" aria-label="Cruip">
              <Image src={logo} alt="Logo" width={100} height={100} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
