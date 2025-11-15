export default function Footer() {
  return (
    <footer className="border-t border-gray-900 py-12 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center">
          <h3 className="text-2xl font-bold mb-6">Gentheri</h3>
          <a 
            href="https://www.framer.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs text-gray-600 hover:text-gray-400 transition-colors"
          >
            Framer - Custom website builder for designers, agencies and startups.
          </a>
        </div>
      </div>
    </footer>
  );
}
