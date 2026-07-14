import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Benefits from "@/components/ProductMockup";
import WaitlistForm from "@/components/ProblemSolution";
import FAQ from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import footerBg from "@assets/footer-gradient-bg.jpg";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <WaitlistForm />
      <Benefits />
      <FAQ />
      <div style={{ backgroundImage: `url(${footerBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <FinalCTA />
        <Footer />
      </div>
    </div>
  );
}
