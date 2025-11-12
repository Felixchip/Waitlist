import { Card } from "@/components/ui/card";
import { Tags, Bell, TrendingUp, MessageSquare, Shield, Zap } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Tags,
      title: "Smart Fan Categories",
      desc: "Auto-tag fans by spending, engagement, and subscription status",
    },
    {
      icon: Bell,
      title: "Engagement Reminders",
      desc: "Get timely alerts when fans are about to expire or go inactive",
    },
    {
      icon: TrendingUp,
      title: "Analytics Dashboard",
      desc: "Track new vs returning subscribers, churn rate, and revenue trends",
    },
    {
      icon: MessageSquare,
      title: "Re-engagement Templates",
      desc: "One-click DM templates to win back expired subscribers",
    },
    {
      icon: Shield,
      title: "Churn Prevention",
      desc: "Identify at-risk fans before they leave and take action",
    },
    {
      icon: Zap,
      title: "Quick Setup",
      desc: "Import your fan data and start engaging in under 5 minutes",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Everything You Need</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed specifically for independent creators
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <Card key={idx} className="p-8 hover-elevate" data-testid={`feature-card-${idx}`}>
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
