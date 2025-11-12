import { Card } from "@/components/ui/card";
import { AlertCircle, CheckCircle2, TrendingDown, Users, Clock } from "lucide-react";

export default function ProblemSolution() {
  const problems = [
    { icon: Users, text: "Struggling to track top fans vs. casual subscribers" },
    { icon: TrendingDown, text: "Missing renewal opportunities and losing revenue" },
    { icon: Clock, text: "Wasting time with complex agency tools" },
  ];

  const solutions = [
    { title: "Auto-categorize fans", desc: "Top Supporters, At Risk, Expired — updated automatically" },
    { title: "Smart engagement alerts", desc: "Know exactly who to message and when" },
    { title: "Creator-first simplicity", desc: "Built for solo creators, not agencies" },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">The Problem</h2>
            <div className="space-y-4">
              {problems.map((problem, idx) => (
                <div key={idx} className="flex items-start gap-4" data-testid={`problem-${idx}`}>
                  <AlertCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                  <p className="text-lg text-foreground">{problem.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">The Solution</h2>
            <div className="space-y-6">
              {solutions.map((solution, idx) => (
                <Card key={idx} className="p-6 hover-elevate" data-testid={`solution-${idx}`}>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{solution.title}</h3>
                      <p className="text-muted-foreground">{solution.desc}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
