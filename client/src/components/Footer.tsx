import { Separator } from "@/components/ui/separator";
import { Mail, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-3">FanBase CRM</h3>
            <p className="text-sm text-muted-foreground">
              Simple fan management built for OnlyFans creators
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Connect</h4>
            <div className="flex gap-4 mb-4">
              <a href="#twitter" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#instagram" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="mailto:hello@fanbasecrm.com" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              hello@fanbasecrm.com
            </p>
          </div>
        </div>

        <Separator className="mb-8" />

        <div className="text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} FanBase CRM. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
