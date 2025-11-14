import { Card } from "@/components/ui/card";
import { Search, Activity, Sparkles, Gauge } from "lucide-react";
import dashboardImg from "@assets/generated_images/AI_dashboard_mockup_52d697e2.png";
import monitoringImg from "@assets/generated_images/Monitoring_dashboard_interface_57fead2a.png";
import neuralImg from "@assets/generated_images/AI_neural_network_visual_95a7e2a1.png";
import analyticsImg from "@assets/generated_images/Intelligence_analytics_interface_e871e986.png";

export default function Features() {
  return (
    <section className="py-32 px-6">
      <div className="container mx-auto max-w-7xl">
        <p className="text-xs text-gray-500 mb-4 tracking-wider uppercase text-center" data-testid="label-features">
          FEATURES
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center max-w-3xl mx-auto">
          What you get early access to
        </h2>
        
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Gentheri helps forward-thinking teams integrate cutting-edge AI into their workflows — from research to real-time operations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-8 bg-card border-gray-900 hover-elevate lg:col-span-2 lg:row-span-2" data-testid="feature-card-ai-research">
            <img src={dashboardImg} alt="AI Research Dashboard" className="w-full h-48 object-cover rounded-lg mb-6 opacity-80" />
            <div className="flex items-center gap-3 mb-4">
              <Search className="w-6 h-6 text-white" />
              <h3 className="text-xl font-semibold">AI research assistant</h3>
            </div>
            <p className="text-gray-400">
              Automate data gathering, summarization, and insight generation across sources.
            </p>
          </Card>

          <Card className="p-8 bg-card border-gray-900 hover-elevate" data-testid="feature-card-ops-monitoring">
            <img src={monitoringImg} alt="Ops Monitoring" className="w-full h-32 object-cover rounded-lg mb-6 opacity-80" />
            <div className="flex items-center gap-3 mb-4">
              <Activity className="w-6 h-6 text-white" />
              <h3 className="text-xl font-semibold">Real-time ops monitoring</h3>
            </div>
            <p className="text-gray-400">
              Leverage AI to observe, flag, and optimize operational workflows as they happen.
            </p>
          </Card>

          <Card className="p-8 bg-card border-gray-900 hover-elevate" data-testid="feature-card-intelligence">
            <img src={neuralImg} alt="Custom Intelligence" className="w-full h-32 object-cover rounded-lg mb-6 opacity-80" />
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-6 h-6 text-white" />
              <h3 className="text-xl font-semibold">Custom intelligence modules</h3>
            </div>
            <p className="text-gray-400">
              Tailor AI agents to your team's unique needs, whether it's competitive analysis or internal reporting.
            </p>
          </Card>

          <Card className="p-8 bg-card border-gray-900 hover-elevate lg:col-span-2" data-testid="feature-card-analytics">
            <img src={analyticsImg} alt="Analytics" className="w-full h-32 object-cover rounded-lg mb-6 opacity-80" />
            <div className="flex items-center gap-3 mb-4">
              <Gauge className="w-6 h-6 text-white" />
              <h3 className="text-xl font-semibold">Real-time ops monitoring</h3>
            </div>
            <p className="text-gray-400">
              Leverage AI to observe, flag, and optimize operational workflows as they happen.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
