import React from "react";
import Image from "next/image";
import GamingImage from "@/public/images/tuboparking.png";

export default function Gaming() {
  return (
    <section className="relative overflow-hidden bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 font-uncut-sans mb-4">Gaming Zone</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Put your skills to the test with our multi-level parking game!
            </p>
          </div>
          {/* Gaming Box */}
          <div className="max-w-md mx-auto">
            <div
              className="relative flex flex-col h-full p-6 bg-gray-800 rounded-lg text-center"
              data-aos="zoom-out"
            >
              <a
                href="https://tuboquest.alexishenry.eu/tubopark/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Image
                  src={GamingImage}
                  className="mx-auto mb-4"
                  width={400}
                  height={300}
                  alt="Gaming Image"
                />
                <div className="text-white mt-2">Visit Gaming Site</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
