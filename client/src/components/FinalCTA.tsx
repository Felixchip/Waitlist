import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

export default function FinalCTA() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const signupMutation = useMutation({
    mutationFn: async (data: { firstName: string; email: string }) => {
      return apiRequest("/api/waitlist", "POST", data);
    },
    onSuccess: () => {
      toast({
        title: "Thanks! You're on the list.",
        description: "We'll notify you when FanBase CRM launches.",
      });
      setFirstName("");
      setEmail("");
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    signupMutation.mutate({ firstName, email });
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
          <div className="flex flex-col gap-3">
            <Input
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="h-12 px-4 text-base"
              data-testid="input-final-cta-firstname"
            />
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 px-4 text-base flex-1"
                data-testid="input-final-cta-email"
              />
              <Button 
                type="submit" 
                size="lg"
                disabled={signupMutation.isPending}
                className="h-12 px-8 font-semibold"
                data-testid="button-final-cta-submit"
              >
                {signupMutation.isPending ? "Joining..." : "Join Waitlist"}
              </Button>
            </div>
          </div>
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
