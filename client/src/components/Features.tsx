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
          <div 
            className="mb-6 px-3 py-1.5 text-xs tracking-wider text-white rounded-full inline-block backdrop-blur-sm"
            style={{
              background: 'linear-gradient(103deg, #0a0913 0%, rgb(17, 8, 34) 8.75%, rgb(41, 15, 101) 24.32%, rgb(61, 72, 161) 38.77%, rgb(74, 120, 195) 54.74%, rgba(92, 145, 207, 0.7) 66%, rgba(250, 249, 254, 0.5) 83.78%, rgb(209, 214, 226) 100%)',
            }}
            data-testid="badge-features"
          >
            FEATURES
          </div>
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

        <div className="grid grid-cols-1 md:grid-cols-8 lg:grid-cols-12 gap-5 auto-rows-[minmax(120px,auto)]">
          {/* Big left card - AI research assistant */}
          <div 
            className="md:col-span-8 lg:col-span-7 lg:row-span-2 rounded-xl overflow-hidden border-0"
            style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,0.01), rgba(255,255,255,0.012))',
              boxShadow: '0 6px 18px rgba(2,6,23,0.6)',
            }}
            data-testid="feature-card-ai-research"
          >
            <div className="bg-gradient-to-br from-indigo-950/80 to-purple-950/50 p-8 aspect-video flex items-center justify-center">
              <img src={dashboardImg} alt="AI Research Dashboard" className="w-full h-full object-contain opacity-90" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">AI research assistant</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Automate data gathering, summarization, and insight generation across sources.
              </p>
            </div>
          </div>

          {/* Top-right medium */}
          <div 
            className="md:col-span-8 lg:col-span-5 lg:row-span-1 rounded-xl overflow-hidden border-0"
            style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,0.01), rgba(255,255,255,0.012))',
              boxShadow: '0 6px 18px rgba(2,6,23,0.6)',
            }}
            data-testid="feature-card-ops-monitoring"
          >
            <div className="bg-gradient-to-br from-indigo-950/80 to-purple-950/50 p-8 aspect-[3/2] flex items-center justify-center">
              <img src={monitoringImg} alt="Ops Monitoring" className="w-full h-full object-contain opacity-90" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Real-time ops monitoring</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Leverage AI to observe, flag, and optimize operational workflows as they happen.
              </p>
            </div>
          </div>

          {/* Middle-right small */}
          <div 
            className="md:col-span-4 lg:col-span-5 lg:row-span-1 rounded-xl overflow-hidden border-0"
            style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,0.01), rgba(255,255,255,0.012))',
              boxShadow: '0 6px 18px rgba(2,6,23,0.6)',
            }}
            data-testid="feature-card-monitoring-setup"
          >
            <div className="bg-gradient-to-br from-indigo-950/80 to-purple-950/50 p-6 aspect-[2/1] flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-2">⚙️</div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">Setting up real monitoring</h3>
              <p className="text-gray-400 text-sm">5 mins left</p>
            </div>
          </div>

          {/* Bottom-left card */}
          <div 
            className="md:col-span-4 lg:col-span-5 lg:row-span-1 rounded-xl overflow-hidden border-0"
            style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,0.01), rgba(255,255,255,0.012))',
              boxShadow: '0 6px 18px rgba(2,6,23,0.6)',
            }}
            data-testid="feature-card-intelligence"
          >
            <div className="bg-gradient-to-br from-indigo-950/80 to-purple-950/50 p-8 aspect-square flex items-center justify-center">
              <img src={neuralImg} alt="Custom Intelligence" className="w-full h-full object-contain opacity-90" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Custom intelligence modules</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Tailor AI agents to your team's unique needs, whether it's competitive analysis or internal reporting.
              </p>
            </div>
          </div>

          {/* Big bottom-right */}
          <div 
            className="md:col-span-8 lg:col-span-7 lg:row-span-1 rounded-xl overflow-hidden border-0"
            style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,0.01), rgba(255,255,255,0.012))',
              boxShadow: '0 6px 18px rgba(2,6,23,0.6)',
            }}
            data-testid="feature-card-analytics"
          >
            <div className="bg-gradient-to-br from-indigo-950/80 to-purple-950/50 p-8 aspect-[3/1] flex items-center justify-center">
              <img src={analyticsImg} alt="Analytics" className="w-full h-full object-contain opacity-90" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Real-time ops monitoring</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Leverage AI to observe, flag, and optimize operational workflows as they happen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
