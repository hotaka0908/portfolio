const projects = [
  {
    title: "AI Necklace",
    description:
      "喋ったら何でもできるAIデバイス。ウェアラブルなネックレス型AIアシスタント。",
    tags: ["AI", "Hardware", "IoT"],
    link: "https://x.com/hotaka_0908/status/2040723282677403945",
    linkType: "x",
    linkLabel: "View on X",
  },
  {
    title: "CopiChat",
    description:
      "あの人としゃべれるチャットアプリ。iOSアプリとしてApp Storeで公開中。",
    tags: ["iOS", "Swift"],
    link: "https://apps.apple.com/jp/app/copichat/id6754622028",
    linkType: "appstore",
    linkLabel: "App Store",
  },
  {
    title: "AIデバイス未来考察",
    description:
      "AIデバイスの未来について考察した技術書。技術書典にて販売中。",
    tags: ["Book", "AI", "Tech"],
    link: "https://techbookfest.org/product/tCb4D3eVDreK1iFQBStaFK?productVariantID=quupPuFcETjWSX8p8YtzMf",
    linkType: "book",
    linkLabel: "技術書典",
  },
];

const LinkIcon = ({ type }: { type: string }) => {
  switch (type) {
    case "x":
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case "appstore":
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.293 14.707a1 1 0 01-1.414 0L12 13.414l-2.879 2.879a1 1 0 01-1.414-1.414L10.586 12 7.707 9.121a1 1 0 011.414-1.414L12 10.586l2.879-2.879a1 1 0 011.414 1.414L13.414 12l2.879 2.879a1 1 0 010 1.414z" />
        </svg>
      );
    case "book":
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      );
    default:
      return null;
  }
};

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
              className="block group p-6 border border-[var(--border)] rounded-xl relative overflow-hidden transition-all duration-300 hover:border-[var(--accent)] hover:shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent)]/10 via-[var(--accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-[var(--accent)] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[var(--muted)] mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-foreground/5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  <span className="ml-auto flex items-center gap-1.5 text-sm text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors">
                    <LinkIcon type={project.linkType} />
                    {project.linkLabel}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
