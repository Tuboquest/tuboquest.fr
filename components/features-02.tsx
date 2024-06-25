import Image from "next/image";
import Illustration from "@/public/images/features-illustration.svg";
import Notifications from "@/public/images/Notifications.png";

export default function Features02() {
  return (
    <section className="relative">
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section content */}
          <div className="max-w-xl mx-auto md:max-w-none flex flex-col md:flex-row items-center justify-center md:space-x-8 lg:space-x-16 xl:space-x-18 space-y-8 md:space-y-0">
            {/* Content */}
            <div
              className="md:w-7/12 lg:w-1/2"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <div className="text-center md:text-left">
                <h3 className="h3 font-uncut-sans text-4xl mb-4">
                  Notifications et alertes
                </h3>
                <ul className="inline-flex flex-col text-lg text-gray-400 space-y-3">
                  <li className="flex items-center">
                    <svg
                      className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>
                      <b>
                        <u>Alertes</u>
                      </b>{" "}
                      : Recevez des notifications en temps réel pour ne jamais
                      dépasser votre temps de stationnement.
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>
                      <b>
                        <u>Rappels</u>
                      </b>{" "}
                      : Soyez informé du temps restant pour ajuster votre
                      stationnement en conséquence.
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>
                      <b>
                        <u>Localisation</u>
                      </b>{" "}
                      : Géolocalisez votre emplacement de stationnement pour y
                      retourner facilement.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            {/* Image */}
            <div
              className="md:w-5/12 lg:w-1/2"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <Image
                src={Notifications}
                className="max-w-none mx-auto"
                priority
                alt="Right Image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
