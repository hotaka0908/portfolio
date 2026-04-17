export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight mb-4">About</h2>
        <div className="w-12 h-1 bg-[var(--accent)] mb-8"></div>
        <div className="space-y-6 text-[var(--muted)] leading-relaxed">
          <p>
            はじめまして、船橋穂天です。
            ウェブ開発やソフトウェア開発に情熱を持っています。
          </p>
          <p>
            ユーザー体験を重視した、シンプルで美しいプロダクトを作ることを心がけています。
            常に新しい技術を学び、より良いソリューションを提供することを目指しています。
          </p>
          <p>
            コードを書くこと以外にも、デザインやUI/UXにも興味があり、
            技術とデザインの両面からプロダクトを考えることを大切にしています。
          </p>
        </div>
      </div>
    </section>
  );
}
