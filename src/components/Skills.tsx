const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "PostgreSQL", "REST API"],
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "VS Code", "Figma"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 bg-foreground/[0.02]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight mb-4">Skills</h2>
        <div className="w-12 h-1 bg-[var(--accent)] mb-12"></div>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div key={skill.category}>
              <h3 className="text-lg font-semibold mb-4">{skill.category}</h3>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li
                    key={item}
                    className="text-[var(--muted)] flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
