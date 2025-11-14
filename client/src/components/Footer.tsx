export default function Footer() {
  return (
    <footer className="border-t border-gray-900 py-12 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center">
          <h3 className="text-2xl font-bold mb-2">Gentheri</h3>
          <p className="text-sm text-gray-500 mb-6">
            AI-powered workflows for forward-thinking teams
          </p>
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
