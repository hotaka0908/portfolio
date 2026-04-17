const achievements = [
  {
    title: "新聞掲載",
    description: "野球部時代の活動が新聞に掲載されました。",
    year: "20XX",
    source: "○○新聞",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight mb-4">Achievements</h2>
        <div className="w-12 h-1 bg-[var(--accent)] mb-12"></div>
        <div className="space-y-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="p-6 border border-[var(--border)] rounded-xl"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-semibold">{achievement.title}</h3>
                <span className="text-sm text-[var(--muted)]">
                  {achievement.year}
                </span>
              </div>
              <p className="text-[var(--muted)] mb-2 leading-relaxed">
                {achievement.description}
              </p>
              <p className="text-sm text-[var(--accent)]">
                {achievement.source}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
