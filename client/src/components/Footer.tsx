export default function Footer() {
  return (
    <footer className="pb-0 px-6 overflow-visible">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center">
          <div className="relative">
            <h3 className="text-[12rem] md:text-[16rem] lg:text-[20rem] font-bold leading-none tracking-tighter text-white relative z-10">
              LOYALIST
            </h3>
            <div 
              className="absolute left-0 text-[12rem] md:text-[16rem] lg:text-[20rem] font-bold leading-none tracking-tighter text-white pointer-events-none"
              style={{
                bottom: '-20px',
                filter: 'blur(40px)',
                opacity: 0.9,
                maskImage: 'linear-gradient(to bottom, transparent 0%, black 90%)',
                WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 90%)',
              }}
              aria-hidden="true"
            >
              LOYALIST
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
