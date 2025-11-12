export default function StatsBar() {
  const stats = [
    { value: "500+", label: "Creators Waiting" },
    { value: "30%", label: "Average Renewal Increase" },
    { value: "5 min", label: "Setup Time" },
  ];

  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} data-testid={`stat-${idx}`}>
              <div className="text-5xl md:text-6xl font-bold mb-2">{stat.value}</div>
              <div className="text-lg opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
