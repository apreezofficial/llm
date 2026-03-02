import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBanner from "@/components/StatsBanner";
import MentorsSection from "@/components/MentorsSection";
import Features from "@/components/Features";
import Roadmap from "@/components/Roadmap";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsBanner />
      <MentorsSection />
      <Features />
      <Roadmap />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
