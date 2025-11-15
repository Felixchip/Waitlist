export default function Footer() {
  return (
    <footer className="pb-0 px-6 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center">
          <div className="relative inline-block">
            <h3 className="text-[12rem] md:text-[16rem] lg:text-[20rem] font-bold leading-none tracking-tighter text-white">
              LOYALIST
            </h3>
            <h3 
              className="absolute top-0 left-0 text-[12rem] md:text-[16rem] lg:text-[20rem] font-bold leading-none tracking-tighter text-white pointer-events-none"
              style={{
                filter: 'blur(32px)',
                WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 35%, black 100%)',
                maskImage: 'linear-gradient(to bottom, transparent 0%, black 35%, black 100%)',
              }}
            >
              LOYALIST
            </h3>
          </div>
        </div>
      </div>
    </footer>
  );
}
