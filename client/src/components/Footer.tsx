export default function Footer() {
  return (
    <footer className="pb-0 px-6 overflow-visible">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center">
          <div className="relative inline-block">
            {/* Blurred copy behind */}
            <div 
              className="absolute left-0 top-0 text-[12rem] md:text-[16rem] lg:text-[20rem] font-bold leading-none tracking-tighter text-white pointer-events-none select-none"
              style={{
                filter: 'blur(60px)',
                opacity: 0.8,
                transform: 'translateY(30px)',
              }}
              aria-hidden="true"
            >
              LOYALIST
            </div>
            {/* Original text on top */}
            <h3 className="text-[12rem] md:text-[16rem] lg:text-[20rem] font-bold leading-none tracking-tighter text-white relative">
              LOYALIST
            </h3>
          </div>
        </div>
      </div>
    </footer>
  );
}
