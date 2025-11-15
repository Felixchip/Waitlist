import { Button } from "@/components/ui/button";
import { SiYoutube, SiLinkedin, SiGithub } from "react-icons/si";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6">
      <div className="container mx-auto max-w-7xl flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-purple-600" />
          <span className="text-lg font-semibold" data-testid="text-logo">Loyalist AI</span>
        </div>

        <p className="text-xs tracking-widest text-gray-400 uppercase hidden md:block" data-testid="text-launch-date">
          LAUNCHING ON 25TH JUNE 2025
        </p>

        <div className="flex items-center gap-2">
          <Button 
            size="icon" 
            variant="ghost" 
            className="w-10 h-10 rounded-lg border border-gray-800"
            data-testid="button-youtube"
          >
            <SiYoutube className="w-4 h-4" />
          </Button>
          <Button 
            size="icon" 
            variant="ghost" 
            className="w-10 h-10 rounded-lg border border-gray-800"
            data-testid="button-linkedin"
          >
            <SiLinkedin className="w-4 h-4" />
          </Button>
          <Button 
            size="icon" 
            variant="ghost" 
            className="w-10 h-10 rounded-lg border border-gray-800"
            data-testid="button-github"
          >
            <SiGithub className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}
