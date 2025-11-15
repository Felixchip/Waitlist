import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import dashboardImg from "@assets/generated_images/AI_dashboard_mockup_52d697e2.png";
import monitoringImg from "@assets/generated_images/Monitoring_dashboard_interface_57fead2a.png";
import neuralImg from "@assets/generated_images/AI_neural_network_visual_95a7e2a1.png";
import analyticsImg from "@assets/generated_images/Intelligence_analytics_interface_e871e986.png";
import patternBg from "@assets/pattern-BG_1763167873077.jpg";

export default function Features() {
  return (
    <section className="py-32 px-6" style={{ backgroundImage: `url(${patternBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
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
          <h2 className="text-[64px] font-display font-medium mb-6 max-w-4xl mx-auto leading-[64px]">
            <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-white bg-clip-text text-transparent">
              What you get<br />
              early access to
            </span>
          </h2>
          
          <p className="text-gray-300 max-w-2xl mx-auto text-[18px] font-tight leading-[22px]">
            Loyalist helps forward-thinking teams integrate cutting-edge<br />
            AI into their workflows — from research to real-time operations.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          {/* Top row: 40% left, 60% right */}
          <div className="flex gap-5 h-[400px]">
            <div 
              className="rounded-3xl overflow-hidden border-0 flex flex-col"
              style={{
                width: '40%',
                background: '#181725',
                boxShadow: '0 6px 18px rgba(2,6,23,0.6)',
              }}
              data-testid="feature-card-ai-research"
            >
              <div className="h-[240px] bg-gray-600 flex items-center justify-center">
                <img src={dashboardImg} alt="AI Research Dashboard" className="w-full h-full object-cover" />
              </div>
              <div className="bg-[#1a1828] p-6 flex-1 flex flex-col justify-center">
                <h3 className="text-xl font-semibold mb-2 text-white">AI research assistant</h3>
                <p className="text-gray-400 text-sm">
                  Automate data gathering, summarization, and insight generation across sources.
                </p>
              </div>
            </div>

            <div 
              className="rounded-3xl overflow-hidden border-0 flex flex-col"
              style={{
                width: '60%',
                background: '#181725',
                boxShadow: '0 6px 18px rgba(2,6,23,0.6)',
              }}
              data-testid="feature-card-ops-monitoring"
            >
              <div className="h-[240px] bg-gray-600 flex items-center justify-center">
                <img src={monitoringImg} alt="Real-time ops monitoring" className="w-full h-full object-cover" />
              </div>
              <div className="bg-[#1a1828] p-6 flex-1 flex flex-col justify-center">
                <h3 className="text-xl font-semibold mb-2 text-white">Real-time ops monitoring</h3>
                <p className="text-gray-400 text-sm">
                  Leverage AI to observe, flag, and optimize workflows as they happen.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom row: 70% left, 30% right */}
          <div className="flex gap-5 h-[400px]">
            <div 
              className="rounded-3xl overflow-hidden border-0 flex flex-col"
              style={{
                width: '70%',
                background: '#181725',
                boxShadow: '0 6px 18px rgba(2,6,23,0.6)',
              }}
              data-testid="feature-card-intelligence"
            >
              <div className="h-[240px] bg-gray-600 flex items-center justify-center">
                <img src={neuralImg} alt="Custom intelligence modules" className="w-full h-full object-cover" />
              </div>
              <div className="bg-[#1a1828] p-6 flex-1 flex flex-col justify-center">
                <h3 className="text-xl font-semibold mb-2 text-white">Custom intelligence modules</h3>
                <p className="text-gray-400 text-sm">
                  Tailor AI agents to your team's needs.
                </p>
              </div>
            </div>

            <div 
              className="rounded-3xl overflow-hidden border-0 flex flex-col"
              style={{
                width: '30%',
                background: '#181725',
                boxShadow: '0 6px 18px rgba(2,6,23,0.6)',
              }}
              data-testid="feature-card-analytics"
            >
              <div className="h-[240px] bg-gray-600 flex items-center justify-center">
                <img src={analyticsImg} alt="Analysis completed" className="w-full h-full object-cover" />
              </div>
              <div className="bg-[#1a1828] p-6 flex-1 flex flex-col justify-center">
                <h3 className="text-xl font-semibold mb-2 text-white">Analysis completed</h3>
                <p className="text-gray-400 text-sm">Preparing full report</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
