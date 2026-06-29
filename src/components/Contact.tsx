export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-foreground/[0.02]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-4">Contact</h2>
        <div className="w-12 h-1 bg-[var(--accent)] mx-auto mb-8"></div>
        <p className="text-[var(--muted)] mb-10 max-w-md mx-auto leading-relaxed">
          お気軽にご連絡ください。
        </p>
        <div className="flex flex-col sm:flex-row items-stretch justify-center gap-4 mb-6">
          <a
            href="mailto:ho@universalpine.com"
            className="flex flex-col items-center px-8 py-4 bg-foreground text-background rounded-2xl font-medium hover:opacity-90 transition-opacity"
          >
            <span className="text-sm opacity-70">本人宛</span>
            <span>ho@universalpine.com</span>
          </a>
          <a
            href="mailto:ho@agentmail.to"
            className="flex flex-col items-center px-8 py-4 border border-[var(--border)] rounded-2xl font-medium hover:border-foreground transition-colors"
          >
            <span className="text-sm text-[var(--muted)]">AIエージェント宛</span>
            <span>ho@agentmail.to</span>
          </a>
        </div>
      </div>
    </section>
  );
}
