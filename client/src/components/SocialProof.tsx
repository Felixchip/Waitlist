import { SiGoogle, SiAmazon, SiNetflix, SiMeta, SiApple, SiOpenai } from "react-icons/si";

export default function SocialProof() {
  const logos = [
    { Icon: SiGoogle, name: "Google" },
    { Icon: SiAmazon, name: "Amazon" },
    { Icon: SiNetflix, name: "Netflix" },
    { Icon: SiMeta, name: "Meta" },
    { Icon: SiApple, name: "Apple" },
    { Icon: SiOpenai, name: "OpenAI" },
  ];

  return (
    <section className="py-16 border-t border-b border-gray-900">
      <div className="container mx-auto px-6">
        <p className="text-center text-xs text-gray-500 mb-8 tracking-wider uppercase" data-testid="text-backed-by">
          BACKED BY
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 opacity-40">
          {logos.map((logo, idx) => (
            <logo.Icon key={idx} className="w-8 h-8 text-white" data-testid={`logo-${logo.name.toLowerCase()}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
