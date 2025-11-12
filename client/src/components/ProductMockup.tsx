import { Badge } from "@/components/ui/badge";
import dashboardMockup from "@assets/generated_images/Dashboard_mockup_interface_db3154fc.png";

export default function ProductMockup() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-sm font-semibold">
            See it in action
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Your Fans, Organized
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get a clear view of who your top supporters are, who needs attention, and who's about to renew
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border">
            <img 
              src={dashboardMockup} 
              alt="FanBase CRM Dashboard Interface" 
              className="w-full"
              data-testid="img-product-mockup"
            />
            <div className="absolute top-8 left-8 bg-primary/90 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold">
              Top Supporters
            </div>
            <div className="absolute bottom-8 right-8 bg-destructive/90 backdrop-blur-sm text-destructive-foreground px-4 py-2 rounded-lg text-sm font-semibold">
              At Risk
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
