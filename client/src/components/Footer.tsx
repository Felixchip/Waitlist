export default function Footer() {
  return (
    <footer className="pb-0 px-6 overflow-hidden">
      <svg height="0" width="0" style={{ position: 'absolute' }}>
        <defs>
          <filter id="progressiveBlur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="32" />
          </filter>
          <linearGradient id="blurGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="100%" stopColor="white" stopOpacity="1" />
          </linearGradient>
          <mask id="blurMask">
            <rect width="100%" height="100%" fill="url(#blurGradient)" />
          </mask>
        </defs>
      </svg>
      
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center relative">
          <h3 className="text-[12rem] md:text-[16rem] lg:text-[20rem] font-bold leading-none tracking-tighter">
            LOYALIST
          </h3>
          <h3 
            className="text-[12rem] md:text-[16rem] lg:text-[20rem] font-bold leading-none tracking-tighter absolute top-0 left-1/2 -translate-x-1/2"
            style={{
              filter: 'url(#progressiveBlur)',
              mask: 'url(#blurMask)',
              WebkitMask: 'linear-gradient(to bottom, transparent 0%, black 100%)',
            }}
          >
            LOYALIST
          </h3>
        </div>
      </div>
    </footer>
  );
}
