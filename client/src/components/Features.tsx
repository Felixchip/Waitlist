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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl mx-auto leading-tight">
            <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-white bg-clip-text text-transparent">
              What you get<br />
              early access to
            </span>
          </h2>
          
          <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Loyalist helps forward-thinking teams integrate cutting-edge<br />
            AI into their workflows — from research to real-time operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-8 lg:grid-cols-12 gap-5 auto-rows-[minmax(120px,auto)]">
          {/* Big left card - AI research assistant */}
          <div 
            className="md:col-span-8 lg:col-span-7 lg:row-span-2 p-6 rounded-3xl overflow-hidden border-0"
            style={{
              background: 'rgba(30, 35, 55, 0.6)',
              boxShadow: '0 6px 18px rgba(2,6,23,0.6)',
            }}
            data-testid="feature-card-ai-research"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                <span className="text-white text-xl font-bold">AI</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1 text-white">AI research assistant</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Automate data gathering, summarization, and insight generation across sources.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-indigo-950/40 to-purple-950/20 rounded-2xl p-6 aspect-video flex items-center justify-center">
              <img src={dashboardImg} alt="AI Research Dashboard" className="w-full h-full object-contain opacity-80" />
            </div>
          </div>

          {/* Top-right medium */}
          <div 
            className="md:col-span-8 lg:col-span-5 lg:row-span-1 p-5 rounded-3xl overflow-hidden border-0"
            style={{
              background: 'rgba(30, 35, 55, 0.6)',
              boxShadow: '0 6px 18px rgba(2,6,23,0.6)',
            }}
            data-testid="feature-card-ops-monitoring"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                <span className="text-2xl">🔒</span>
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold mb-1 text-white">Real-time ops monitoring</h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Leverage AI to observe, flag, and optimize workflows as they happen.
                </p>
              </div>
            </div>
          </div>

          {/* Middle-right small */}
          <div 
            className="md:col-span-4 lg:col-span-5 lg:row-span-1 p-5 rounded-3xl overflow-hidden border-0"
            style={{
              background: 'rgba(30, 35, 55, 0.6)',
              boxShadow: '0 6px 18px rgba(2,6,23,0.6)',
            }}
            data-testid="feature-card-monitoring-setup"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                <span className="text-2xl">☁️</span>
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold mb-0.5 text-white">Setting up real monitoring</h3>
                <p className="text-gray-400 text-xs">5 mins left</p>
              </div>
            </div>
          </div>

          {/* Bottom-left card */}
          <div 
            className="md:col-span-4 lg:col-span-5 lg:row-span-1 p-5 rounded-3xl overflow-hidden border-0"
            style={{
              background: 'rgba(30, 35, 55, 0.6)',
              boxShadow: '0 6px 18px rgba(2,6,23,0.6)',
            }}
            data-testid="feature-card-intelligence"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                <span className="text-2xl">⚙️</span>
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold mb-1 text-white">Custom intelligence modules</h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Tailor AI agents to your team's needs.
                </p>
              </div>
            </div>
          </div>

          {/* Big bottom-right */}
          <div 
            className="md:col-span-8 lg:col-span-7 lg:row-span-1 p-5 rounded-3xl overflow-hidden border-0"
            style={{
              background: 'rgba(30, 35, 55, 0.6)',
              boxShadow: '0 6px 18px rgba(2,6,23,0.6)',
            }}
            data-testid="feature-card-analytics"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                <span className="text-2xl">👤</span>
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold mb-0.5 text-white">Analysis completed</h3>
                <p className="text-gray-400 text-xs">Preparing full report</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
