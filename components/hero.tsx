import Image from "next/image";
import Illustration from "@/public/images/features-illustration.svg";
import welcome from "@/public/images/welcome.png";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black">
      {/* Bg gradient */}
      <div
        className="absolute top-0 left-0 right-0 bg-gradient-to-b from-gray-800 to-gray-900 opacity-60 h-[10rem] pointer-events-none -z-10"
        aria-hidden="true"
      />
      {/* Bg illustration */}
      <div
        className="absolute top-0 left-1/2 -z-10 ml-[390px]"
        aria-hidden="true"
      >
        <Image src={Illustration} className="max-w-none" alt="Illustration" />
      </div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Hero content */}
          <div className="max-w-xl mx-auto md:max-w-none flex flex-col md:flex-row items-center justify-center md:space-x-8 lg:space-x-16 xl:space-x-18 space-y-8 md:space-y-0">
            {/* Content */}
            <div
              className="md:w-7/12 lg:w-1/2 text-center md:text-left"
              data-aos="zoom-out"
              data-aos-delay="100"
            >
              <h1 className="h1 font-uncut-sans mb-6">Tubopark</h1>
              <p className="text-xl text-gray-400 mb-10">
                Manage your parking easily from your smartphone. Register, start
                and stop your session in just a few clicks.
              </p>
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
                data-aos="zoom-out"
                data-aos-delay="300"
              >
                <div>
                  <a
                    className="btn text-white bg-gradient-to-t from-[#074264] to-[#83A5C7] hover:to-[#1E95D9] w-full shadow-lg group"
                    href="https://lydia-app.com/pots?id=71380-tubopark"
                  >
                    Support us{" "}
                    <span className="tracking-normal text-blue-200 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                      -&gt;
                    </span>
                  </a>
                </div>
              </div>
            </div>
            {/* Image */}
            <div
              className="md:w-5/12 lg:w-1/2"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <Image
                src={welcome}
                className="max-w-none mx-auto"
                priority
                alt="Welcome Image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
