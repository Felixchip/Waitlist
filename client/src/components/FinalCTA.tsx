import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export default function FinalCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Final CTA signup:", email);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
    }, 3000);
  };

  return (
    <section className="py-24">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Retain More Fans?
        </h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Join the waitlist and be the first to know when FanBase CRM launches
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-6">
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-12 px-4 text-base flex-1"
              data-testid="input-final-cta-email"
            />
            <Button 
              type="submit" 
              size="lg"
              className="h-12 px-8 font-semibold"
              data-testid="button-final-cta-submit"
            >
              Join Waitlist
            </Button>
          </div>
          {submitted && (
            <p className="text-foreground mt-3 text-sm font-medium">
              Thanks! You're on the list.
            </p>
          )}
        </form>

        <p className="text-sm text-muted-foreground mb-2">
          No credit card required. Launch notification only.
        </p>
        <Badge variant="outline" className="text-sm">
          Launching Q2 2025
        </Badge>
      </div>
    </section>
  );
}
