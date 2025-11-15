import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { ArrowRight } from "lucide-react";
import avatar1 from "@assets/generated_images/Professional_woman_avatar_913fd8b1.png";
import avatar2 from "@assets/generated_images/Professional_man_avatar_86fad433.png";
import avatar3 from "@assets/generated_images/Professional_woman_avatar_2_3545e852.png";
import avatar4 from "@assets/generated_images/Professional_man_avatar_2_0f216362.png";

export default function FinalCTA() {
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
        description: "We'll notify you when Gentheri launches.",
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
    <section className="py-32 px-6 border-t border-gray-900">
      <div className="container mx-auto max-w-md">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">
            Join waitlist
          </h2>
          
          <form onSubmit={handleSubmit} className="w-full space-y-4 mb-8">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Name</label>
              <Input
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="h-12 px-4 bg-gray-900/50 border-gray-800 text-base text-white placeholder:text-gray-600"
                data-testid="input-final-cta-name"
              />
            </div>
            
            <div>
              <label className="block text-sm text-gray-400 mb-2">Email</label>
              <Input
                type="email"
                placeholder="johnoe@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 px-4 bg-gray-900/50 border-gray-800 text-base text-white placeholder:text-gray-600"
                data-testid="input-final-cta-email"
              />
            </div>
            
            <button
              type="submit"
              disabled={signupMutation.isPending}
              className="w-full py-3 px-6 font-medium text-white rounded-lg disabled:opacity-50 flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
              style={{
                background: 'linear-gradient(90deg, rgb(99, 102, 241) 0%, rgb(168, 85, 247) 100%)',
              }}
              data-testid="button-final-cta-submit"
            >
              {signupMutation.isPending ? "Joining..." : (
                <>
                  Get early access
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {avatars.map((avatar, idx) => (
                  <Avatar key={idx} className="w-10 h-10 border-2 border-black">
                    <AvatarImage src={avatar} alt={`User ${idx + 1}`} />
                    <AvatarFallback>U{idx + 1}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <p className="text-sm text-gray-300 uppercase tracking-wide">
                JOIN 20K OTHERS
              </p>
            </div>
            <p className="text-sm text-gray-500">You</p>
          </div>
        </div>
      </div>
    </section>
  );
}
