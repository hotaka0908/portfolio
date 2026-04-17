export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-foreground/[0.02]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-4">Contact</h2>
        <div className="w-12 h-1 bg-[var(--accent)] mx-auto mb-8"></div>
        <p className="text-[var(--muted)] mb-10 max-w-md mx-auto leading-relaxed">
          お気軽にご連絡ください。
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:ho@universalpine.com"
            className="px-8 py-3 bg-foreground text-background rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            Send Email
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-[var(--border)] rounded-full font-medium hover:border-foreground transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
