import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import WaitlistForm from "@/components/ProblemSolution";
import Features from "@/components/Features";
import Benefits from "@/components/ProductMockup";
import FAQ from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <SocialProof />
      <WaitlistForm />
      <Features />
      <Benefits />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
