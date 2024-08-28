export const metadata = {
  title: "Tubopark",
  description: "Page description",
};

import Hero from "@/components/hero";
import Features from "@/components/features";
import Features02 from "@/components/features-02";
import Pricing from "@/components/pricing";
import Contact from "@/components/contact";
import Gaming from "@/components/gaming";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Features02 />
      <Pricing />
      <Contact />
      <Gaming />
    </>
  );
}
