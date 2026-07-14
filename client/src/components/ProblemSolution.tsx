import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle } from "lucide-react";
import avatar1 from "@assets/generated_images/Professional_woman_avatar_913fd8b1.png";
import avatar2 from "@assets/generated_images/Professional_man_avatar_86fad433.png";
import avatar3 from "@assets/generated_images/Professional_woman_avatar_2_3545e852.png";
import avatar4 from "@assets/generated_images/Professional_man_avatar_2_0f216362.png";
import avatar5 from "@assets/generated_images/Professional_woman_avatar_3_1b5ce47e.png";
import avatar6 from "@assets/generated_images/Professional_man_avatar_3_4dcedec3.png";
import avatar7 from "@assets/generated_images/Professional_woman_avatar_4_63e59b24.png";
import avatar8 from "@assets/generated_images/Professional_man_avatar_4_04f7ec27.png";

export default function WaitlistForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7, avatar8];
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "You're in!",
        description: "We'll notify you when Loyalist launches.",
      });
      setName("");
      setEmail("");
    }, 800);
  };

  return (
    <section className="py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join waitlist
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="h-14 px-6 bg-card border-gray-800 text-base"
                data-testid="input-waitlist-name"
              />
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-14 px-6 bg-card border-gray-800 text-base"
                data-testid="input-waitlist-email"
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="h-14 px-8 w-full font-medium"
                data-testid="button-waitlist-submit"
              >
                {isSubmitting ? "Joining..." : "Get early access"}
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="flex -space-x-4">
              {avatars.map((avatar, idx) => (
                <Avatar key={idx} className="w-16 h-16 border-4 border-background">
                  <AvatarImage src={avatar} alt={`User ${idx + 1}`} />
                  <AvatarFallback>U{idx + 1}</AvatarFallback>
                </Avatar>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <p className="text-gray-400 text-sm uppercase tracking-wider">
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
