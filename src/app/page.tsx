import Header from "@/components/layout/Header";
import SiteFooter from "@/components/layout/SiteFooter";
import Hero from "@/components/sections/home/Hero";
import Logos from "@/components/sections/home/Logos";
import Features from "@/components/sections/home/Features";
import UseCases from "@/components/sections/home/UseCases";
import ContactSection from "@/components/sections/shared/ContactSection";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-50">
      <Header />
      <main className="flex-1">
        <Hero />
        <Logos />
        <Features />
        <UseCases />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
