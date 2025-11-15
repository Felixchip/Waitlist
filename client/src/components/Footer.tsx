import loyalistLogo from "@assets/LOYALIST_1763219226973.png";

export default function Footer() {
  return (
    <footer className="pb-0 px-6 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center">
          <img 
            src={loyalistLogo} 
            alt="LOYALIST" 
            className="w-full max-w-[1200px] h-auto"
            data-testid="img-footer-logo"
          />
        </div>
      </div>
    </footer>
  );
}
