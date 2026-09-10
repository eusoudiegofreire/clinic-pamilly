import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import NotAlwaysImmunity from "@/components/NotAlwaysImmunity";
import ConsultationFlow from "@/components/ConsultationFlow";
import AboutDoctor from "@/components/AboutDoctor";
import Testimonials from "@/components/Testimonials";
import Offer from "@/components/Offer";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PainPoints />
        <NotAlwaysImmunity />
        <ConsultationFlow />
        <AboutDoctor />
        <Testimonials />
        <Offer />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
