export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight mb-4">About</h2>
        <div className="w-12 h-1 bg-[var(--accent)] mb-8"></div>
        <div className="space-y-6 text-[var(--muted)] leading-relaxed">
          <p>
            株式会社Universal Pineを設立し、人々の生活をより良くするために、AIネックレスを開発しています。
          </p>
          <p>
            ユーザー体験を重視した、シンプルで美しいプロダクトを作ることを心がけています。
            常に新しい技術を学び、より良いソリューションを提供することを目指しています。
          </p>
        </div>
      </div>
    </section>
  );
}
