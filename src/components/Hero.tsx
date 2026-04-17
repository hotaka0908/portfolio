export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-[var(--accent)] font-medium mb-4 tracking-wide">
          Hello, I&apos;m
        </p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
          Hotaka Funahashi
        </h1>
        <p className="text-xl md:text-2xl text-[var(--muted)] mb-6">
          船橋 穂天
        </p>
        <p className="text-lg text-[var(--muted)] max-w-xl mx-auto mb-2 leading-relaxed">
          CEO of Universal Pine Inc.
        </p>
        <p className="text-sm text-[var(--muted)] mb-10">
          Tokyo, Japan
        </p>
        <div className="flex items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-8 py-3 bg-foreground text-background rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-[var(--border)] rounded-full font-medium hover:border-foreground transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
