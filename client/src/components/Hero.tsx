import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import avatar1 from "@assets/generated_images/Professional_woman_avatar_913fd8b1.png";
import avatar2 from "@assets/generated_images/Professional_man_avatar_86fad433.png";
import avatar3 from "@assets/generated_images/Professional_woman_avatar_2_3545e852.png";
import avatar4 from "@assets/generated_images/Professional_man_avatar_2_0f216362.png";
import patternBg from "@assets/pattern-BG_1763167873077.jpg";

export default function Hero() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const avatars = [avatar1, avatar2, avatar3, avatar4];

  const signupMutation = useMutation({
    mutationFn: async (data: { firstName: string; email: string }) => {
      return apiRequest("/api/waitlist", "POST", data);
    },
    onSuccess: () => {
      toast({
        title: "You're in!",
        description: "We'll notify you when Loyalist launches.",
      });
      setName("");
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
    signupMutation.mutate({ firstName: name, email });
  };

  return (
    <section className="min-h-screen flex items-center px-6 pt-24 pb-16 relative overflow-hidden" style={{ backgroundImage: `url(${patternBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(100,100,100,0.05),transparent_50%)]" />
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${2 + Math.random() * 3}s infinite ${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col items-center text-center">
          <div 
            className="mb-8 px-3 py-1.5 text-xs tracking-wider text-white rounded-full backdrop-blur-sm"
            style={{
              background: 'linear-gradient(103deg, #0a0913 0%, rgb(17, 8, 34) 8.75%, rgb(41, 15, 101) 24.32%, rgb(61, 72, 161) 38.77%, rgb(74, 120, 195) 54.74%, rgba(92, 145, 207, 0.7) 66%, rgba(250, 249, 254, 0.5) 83.78%, rgb(209, 214, 226) 100%)',
            }}
            data-testid="badge-launching-soon"
          >
            LAUNCHING SOON
          </div>
          
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight"
            data-testid="heading-hero"
          >
            Get Ahead with{" "}
            <span className="block mt-2">First-Mover Access.</span>
          </h1>
          
          <p 
            className="text-base md:text-lg text-gray-400 mb-12 leading-relaxed max-w-xl"
            data-testid="text-hero-description"
          >
            Loyalist helps forward-thinking teams integrate cutting-edge AI into their workflows—from research to real-time operations.
          </p>

          <div className="mb-12">
            <p className="text-xs text-gray-500 mb-4 tracking-wider uppercase" data-testid="text-backed-by">
              BACKED BY
            </p>
            <div className="flex items-center justify-center gap-8 opacity-60">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-xs">S</span>
                </div>
                <span className="text-sm">Spherule</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-xs">B</span>
                </div>
                <span className="text-sm">Boltshift</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-xs">N</span>
                </div>
                <span className="text-sm">Neutron</span>
              </div>
            </div>
          </div>

          <div className="w-full max-w-[420px]">
            <h2 className="text-2xl font-semibold mb-6" data-testid="heading-join-waitlist">
              Join waitlist
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm text-gray-400 mb-2 block">Name</label>
                <Input
                  type="text"
                  placeholder="John Deo"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="h-12 px-4 bg-background/50 border-gray-800 text-base"
                  data-testid="input-hero-name"
                />
              </div>
              <div>
                <label className="text-sm text-gray-400 mb-2 block">Email</label>
                <Input
                  type="email"
                  placeholder="johneo@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12 px-4 bg-background/50 border-gray-800 text-base"
                  data-testid="input-hero-email"
                />
              </div>
              <button
                type="submit"
                disabled={signupMutation.isPending}
                className="w-full py-4 px-8 font-medium text-white rounded-lg disabled:opacity-50"
                style={{
                  background: 'linear-gradient(101deg, #9573de 0%, rgb(74, 120, 195) 0%, rgb(42, 21, 87) 15.4%, rgb(41, 15, 101) 22.56%, rgb(61, 72, 161) 36.38%, rgba(92, 145, 207, 0.7) 62.51%, rgba(250, 249, 254, 0.5) 79.44%, rgb(121, 58, 255) 100%)',
                  boxShadow: 'inset 0px -4.48px 2.24px 0px rgba(0, 0, 0, 0.25), inset 0px 2.24px 1.12px 0px rgba(255, 255, 255, 0.25)',
                }}
                data-testid="button-hero-submit"
              >
                {signupMutation.isPending ? "Joining..." : "Get early access →"}
              </button>
            </form>

            <div className="mt-6 flex items-center gap-3">
              <div className="flex -space-x-3">
                {avatars.map((avatar, idx) => (
                  <Avatar key={idx} className="w-10 h-10 border-2 border-background">
                    <AvatarImage src={avatar} alt={`User ${idx + 1}`} />
                    <AvatarFallback>U{idx + 1}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <p className="text-sm text-gray-400">JOIN 20K OTHERS</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </section>
  );
}
