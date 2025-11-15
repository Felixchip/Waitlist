export default function Footer() {
  return (
    <footer className="pb-0 px-6 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center">
          <h3 className="hero-container relative" style={{ lineHeight: '0.88' }}>
            <span className="hero-sharp text-[12rem] md:text-[16rem] lg:text-[20rem] font-black text-white relative inline-block z-[3]" style={{ letterSpacing: '-0.02em' }}>
              LOYALIST
            </span>
            <span className="hero-fog absolute left-0 top-0 text-[12rem] md:text-[16rem] lg:text-[20rem] font-black text-white z-[2]" style={{ letterSpacing: '-0.02em' }} aria-hidden="true">
              LOYALIST
            </span>
          </h3>
        </div>
      </div>
    </footer>
  );
}
