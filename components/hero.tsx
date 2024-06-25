import Image from "next/image";
import welcome from "@/public/images/welcome.png";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Bg gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-800 to-gray-900 opacity-60 h-[10rem] pointer-events-none -z-10"
        aria-hidden="true"
      />
      {/* Illustration */}
      <div
        className="absolute right-0 bottom-0 mr-96 mb-10 translate-x-1/2 md:translate-x-1/4 lg:translate-x-0 pointer-events-none -z-10"
        aria-hidden="true"
      >
        <Image
          src={welcome}
          className="max-w-none"
          priority
          alt="New Hero Illustration"
        />
      </div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Hero content */}
          <div className="max-w-xl mx-auto md:max-w-[640px] md:mx-0 text-center md:text-left">
            <h1
              className="h1 font-uncut-sans mb-6"
              data-aos="zoom-out"
              data-aos-delay="100"
            >
              Application mobile de disque de stationnement à distance
            </h1>
            <p
              className="text-xl text-gray-400 mb-10"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              Gérez facilement votre stationnement depuis votre smartphone.
              Inscrivez-vous, débutez et arrêtez votre session en quelques clics
              seulement.
            </p>
            <div
              className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
              data-aos="zoom-out"
              data-aos-delay="300"
            >
              <div>
                <a
                  className="btn text-white bg-gradient-to-t from-[#074264] to-[#83A5C7] hover:to-[#1E95D9] w-full shadow-lg group"
                  href="#0"
                >
                  Telecharger l&apos;Application{" "}
                  <span className="tracking-normal text-blue-200 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                    -&gt;
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
