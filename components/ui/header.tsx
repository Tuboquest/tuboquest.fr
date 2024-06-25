import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/logo.png";

export default function Header({ nav = true }: { nav?: boolean }) {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link className="block" href="/" aria-label="Cruip">
              <Image src={logo} alt="Logo" width={82} height={82} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
