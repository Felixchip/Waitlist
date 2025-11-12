import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import ProblemSolution from "@/components/ProblemSolution";
import Features from "@/components/Features";
import ProductMockup from "@/components/ProductMockup";
import Testimonials from "@/components/Testimonials";
import StatsBar from "@/components/StatsBar";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <SocialProof />
      <ProblemSolution />
      <Features />
      <ProductMockup />
      <Testimonials />
      <StatsBar />
      <FinalCTA />
      <Footer />
    </div>
  );
}
