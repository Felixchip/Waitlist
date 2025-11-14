import { Badge } from "@/components/ui/badge";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <Badge 
        variant="outline" 
        className="mb-8 border-gray-800 text-gray-400 bg-transparent px-4 py-2 text-xs tracking-wider"
        data-testid="badge-launching-soon"
      >
        LAUNCHING SOON
      </Badge>
      
      <h1 
        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 max-w-5xl leading-tight"
        data-testid="heading-hero"
      >
        Get Ahead with{" "}
        <span className="block mt-2">First-Mover Access.</span>
      </h1>
      
      <p 
        className="text-lg md:text-xl text-gray-400 max-w-3xl mb-12 leading-relaxed"
        data-testid="text-hero-description"
      >
        Gentheri helps forward-thinking teams integrate cutting-edge AI into their workflows—from research to real-time operations.
      </p>
    </section>
  );
}
