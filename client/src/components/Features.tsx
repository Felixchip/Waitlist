import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import dashboardImg from "@assets/generated_images/AI_dashboard_mockup_52d697e2.png";
import monitoringImg from "@assets/generated_images/Monitoring_dashboard_interface_57fead2a.png";
import neuralImg from "@assets/generated_images/AI_neural_network_visual_95a7e2a1.png";
import analyticsImg from "@assets/generated_images/Intelligence_analytics_interface_e871e986.png";

export default function Features() {
  return (
    <section className="py-32 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <Badge 
            variant="outline" 
            className="mb-6 border-gray-800 text-gray-400 bg-transparent px-4 py-1.5 text-xs tracking-wider"
            data-testid="badge-features"
          >
            FEATURES
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl mx-auto leading-tight">
            <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-white bg-clip-text text-transparent">
              What you get<br />
              early access to
            </span>
          </h2>
          
          <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Gentheri helps forward-thinking teams integrate cutting-edge<br />
            AI into their workflows — from research to real-time operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-gray-800 hover-elevate overflow-hidden" data-testid="feature-card-ai-research">
            <div className="bg-gradient-to-br from-indigo-950/50 to-purple-950/30 rounded-xl p-6 mb-6 aspect-video flex items-center justify-center">
              <img src={dashboardImg} alt="AI Research Dashboard" className="w-full h-full object-contain opacity-90" />
            </div>
            <h3 className="text-xl font-semibold mb-3">AI research assistant</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Automate data gathering, summarization, and insight generation across sources.
            </p>
          </Card>

          <Card className="p-8 bg-card/50 backdrop-blur-sm border-gray-800 hover-elevate overflow-hidden" data-testid="feature-card-ops-monitoring">
            <div className="bg-gradient-to-br from-indigo-950/50 to-purple-950/30 rounded-xl p-6 mb-6 aspect-video flex items-center justify-center">
              <img src={monitoringImg} alt="Ops Monitoring" className="w-full h-full object-contain opacity-90" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Real-time ops monitoring</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Leverage AI to observe, flag, and optimize operational workflows as they happen.
            </p>
          </Card>

          <Card className="p-8 bg-card/50 backdrop-blur-sm border-gray-800 hover-elevate overflow-hidden" data-testid="feature-card-intelligence">
            <div className="bg-gradient-to-br from-indigo-950/50 to-purple-950/30 rounded-xl p-6 mb-6 aspect-video flex items-center justify-center">
              <img src={neuralImg} alt="Custom Intelligence" className="w-full h-full object-contain opacity-90" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Custom intelligence modules</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Tailor AI agents to your team's unique needs, whether it's competitive analysis or internal reporting.
            </p>
          </Card>

          <Card className="p-8 bg-card/50 backdrop-blur-sm border-gray-800 hover-elevate overflow-hidden" data-testid="feature-card-analytics">
            <div className="bg-gradient-to-br from-indigo-950/50 to-purple-950/30 rounded-xl p-6 mb-6 aspect-video flex items-center justify-center">
              <img src={analyticsImg} alt="Analytics" className="w-full h-full object-contain opacity-90" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Real-time ops monitoring</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Leverage AI to observe, flag, and optimize operational workflows as they happen.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
