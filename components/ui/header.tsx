import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/logo.png";

export default function Header({ nav = true }: { nav?: boolean }) {
  // State pour gérer le changement de fond du header
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Vérifie si le scroll est supérieur à 50 pixels
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
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link className="block" href="/" aria-label="Cruip">
              <Image src={logo} alt="Logo" width={100} height={100} />
            </Link>
          </div>
          {/* Desktop navigation */}
          {nav && (
            <nav className="flex grow">
              {/* Desktop sign in links */}
              <ul className="flex grow justify-end flex-wrap items-center">
                <li className="ml-12">
                  <Link className="text-white hover:underline" href="#0">
                    Staff
                  </Link>
                </li>
                <li className="ml-12">
                  <Link className="text-white hover:underline" href="#0">
                    Contact
                  </Link>
                </li>
                <li className="ml-12">
                  <Link className="text-white hover:underline" href="#0">
                    Gaming
                  </Link>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
