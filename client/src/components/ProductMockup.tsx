import { Card } from "@/components/ui/card";
import { MdBolt, MdTrendingUp, MdPeople } from "react-icons/md";
import patternBg from "@assets/pattern-BG_1763167873077.jpg";

export default function Benefits() {
  const benefits = [
    {
      icon: MdBolt,
      title: "Early advantage",
      desc: "Get first-mover access to powerful AI tools before the rest of the market catches on.",
    },
    {
      icon: MdTrendingUp,
      title: "Boosted productivity",
      desc: "Streamline research, automate tasks, and make data-driven decisions faster than ever.",
    },
    {
      icon: MdPeople,
      title: "Exclusive feedback loop",
      desc: "Shape the future of Loyalist by sharing your insights during early access.",
    },
  ];

  return (
    <section className="py-32 px-6" style={{ backgroundImage: `url(${patternBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div className="container mx-auto max-w-7xl">
        <div className="flex justify-center mb-6">
          <div 
            className="px-3 py-1.5 text-xs tracking-wider text-white rounded-full backdrop-blur-sm"
            style={{
              background: 'linear-gradient(103deg, #0a0913 0%, rgb(17, 8, 34) 8.75%, rgb(41, 15, 101) 24.32%, rgb(61, 72, 161) 38.77%, rgb(74, 120, 195) 54.74%, rgba(92, 145, 207, 0.7) 66%, rgba(250, 249, 254, 0.5) 83.78%, rgb(209, 214, 226) 100%)',
            }}
            data-testid="badge-benefits"
          >
            BENEFITS
          </div>
        </div>
        <h2 className="text-[64px] font-display font-medium mb-16 text-center max-w-4xl mx-auto leading-[64px]">
          <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-white bg-clip-text text-transparent">
            Why join the<br />
            Loyalist waitlist?
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <Card key={idx} className="p-8 border-0 hover-elevate" style={{ backgroundColor: '#181725' }} data-testid={`benefit-card-${idx}`}>
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center mb-6"
                style={{
                  background: 'linear-gradient(to bottom, #ffffff 0%, #f0f0ff 20%, #2b3ea7 60%, #0a0a28 100%)',
                }}
              >
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-[18px] font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-400 text-[16px] font-tight leading-[22px]">{benefit.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
