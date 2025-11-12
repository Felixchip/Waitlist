import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import avatar1 from "@assets/generated_images/Creator_avatar_1_b77124d4.png";
import avatar2 from "@assets/generated_images/Creator_avatar_2_e97a0dc9.png";
import avatar3 from "@assets/generated_images/Creator_avatar_3_003c12a7.png";
import avatar4 from "@assets/generated_images/Creator_avatar_4_3d3f5a19.png";

export default function SocialProof() {
  const creators = [
    { id: 1, img: avatar1, name: "SC" },
    { id: 2, img: avatar2, name: "MJ" },
    { id: 3, img: avatar3, name: "AL" },
    { id: 4, img: avatar4, name: "KW" },
  ];

  return (
    <section className="py-12 border-b">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="flex -space-x-3">
            {creators.map((creator) => (
              <Avatar key={creator.id} className="w-12 h-12 border-2 border-background">
                <AvatarImage src={creator.img} alt={creator.name} />
                <AvatarFallback>{creator.name}</AvatarFallback>
              </Avatar>
            ))}
          </div>
          <p className="text-muted-foreground font-medium" data-testid="text-social-proof">
            Trusted by creators earning $1k–$10k/month
          </p>
        </div>
      </div>
    </section>
  );
}
