import { Button } from "@/components/ui/button";
import { SiX } from "react-icons/si";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex items-center justify-center">
      <div 
        className="flex items-center gap-16 px-6 py-3 rounded-full backdrop-blur-md"
        style={{
          background: 'rgba(24, 23, 37, 0.6)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-purple-600" />
          <span className="text-lg font-semibold" data-testid="text-logo">Loyalist AI</span>
        </div>

        <div className="flex items-center gap-2">
          <button class='btn' data-testid="button-react">React button</button>
          <div 
            className="rounded-lg p-[1px]"
            style={{
              background: 'linear-gradient(to bottom, #ffffff 0%, #f0f0ff 20%, #2b3ea7 60%, #0a0a28 100%)',
            }}
          >
            <Button 
              size="icon" 
              variant="ghost" 
              className="w-10 h-10 rounded-lg bg-black border-0"
              data-testid="button-twitter"
              asChild
            >
              <a href="https://twitter.com/felixchip" target="_blank" rel="noopener noreferrer">
                <SiX className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
