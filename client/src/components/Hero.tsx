import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles } from "lucide-react";
import heroBg from "@assets/generated_images/Hero_gradient_background_c3dc3690.png";

export default function Hero() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Waitlist signup:", email);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
    }, 3000);
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Sparkles className="w-6 h-6 text-primary" />
          <span className="text-sm font-semibold text-primary-foreground bg-primary/20 backdrop-blur-sm px-4 py-1 rounded-full border border-primary/30">
            Launching Q2 2025
          </span>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Simple Fan Management<br />
          <span className="text-primary">Built for Creators</span>
        </h1>

        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
          Turn your fan data into clear, actionable insights. Auto-tag supporters, prevent churn, and boost renewals — effortlessly.
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-12 px-4 text-base bg-white/95 backdrop-blur-sm border-white/20 flex-1"
              data-testid="input-waitlist-email"
            />
            <Button 
              type="submit" 
              size="lg"
              className="h-12 px-8 font-semibold bg-primary hover:bg-primary/90 text-primary-foreground"
              data-testid="button-join-waitlist"
            >
              Join Waitlist
            </Button>
          </div>
          {submitted && (
            <p className="text-white/90 mt-3 text-sm font-medium">
              Thanks! You're on the list.
            </p>
          )}
        </form>

        <p className="text-white/70 text-sm">
          Join 500+ creators on the waitlist · No credit card required
        </p>
      </div>
    </section>
  );
}
