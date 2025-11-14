import { Card } from "@/components/ui/card";
import { Zap, TrendingUp, Users } from "lucide-react";

export default function Benefits() {
  const benefits = [
    {
      icon: Zap,
      title: "Early advantage",
      desc: "Get first-mover access to powerful AI tools before the rest of the market catches on.",
    },
    {
      icon: TrendingUp,
      title: "Boosted productivity",
      desc: "Streamline research, automate tasks, and make data-driven decisions faster than ever.",
    },
    {
      icon: Users,
      title: "Exclusive feedback loop",
      desc: "Shape the future of Gentheri by sharing your insights during early access.",
    },
  ];

  return (
    <section className="py-32 px-6">
      <div className="container mx-auto max-w-7xl">
        <p className="text-xs text-gray-500 mb-4 tracking-wider uppercase text-center" data-testid="label-benefits">
          BENEFITS
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center max-w-3xl mx-auto">
          Why join the Gentheri waitlist?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <Card key={idx} className="p-8 bg-card border-gray-900 hover-elevate" data-testid={`benefit-card-${idx}`}>
              <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mb-6">
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
