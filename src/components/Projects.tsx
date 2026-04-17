const projects = [
  {
    title: "CopiChat",
    description:
      "あの人としゃべれるチャットアプリ。iOSアプリとしてApp Storeで公開中。",
    tags: ["iOS", "Swift"],
    link: "https://apps.apple.com/jp/app/copichat/id6754622028",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight mb-4">Projects</h2>
        <div className="w-12 h-1 bg-[var(--accent)] mb-12"></div>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block group p-6 border border-[var(--border)] rounded-xl hover:border-[var(--accent)] transition-colors"
            >
              <h3 className="text-xl font-semibold mb-2 group-hover:text-[var(--accent)] transition-colors">
                {project.title}
              </h3>
              <p className="text-[var(--muted)] mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm bg-foreground/5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
