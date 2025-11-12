import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import avatar1 from "@assets/generated_images/Creator_avatar_1_b77124d4.png";
import avatar2 from "@assets/generated_images/Creator_avatar_2_e97a0dc9.png";
import avatar3 from "@assets/generated_images/Creator_avatar_3_003c12a7.png";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "I've been looking for something like this forever. Most tools are way too complicated for solo creators.",
      name: "Sarah Chen",
      tier: "$5k/month creator",
      avatar: avatar1,
      initials: "SC",
      rating: 5,
    },
    {
      quote: "Finally, a CRM that doesn't feel like it's built for agencies. Can't wait to try it!",
      name: "Marcus Johnson",
      tier: "$3k/month creator",
      avatar: avatar2,
      initials: "MJ",
      rating: 5,
    },
    {
      quote: "The auto-tagging feature alone would save me hours every week. This is exactly what I need.",
      name: "Alex Rivera",
      tier: "$8k/month creator",
      avatar: avatar3,
      initials: "AR",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Early Feedback</h2>
          <p className="text-xl text-muted-foreground">
            What creators are saying about FanBase CRM
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, idx) => (
            <Card key={idx} className="p-6" data-testid={`testimonial-${idx}`}>
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="italic text-foreground mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center gap-3">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.tier}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
