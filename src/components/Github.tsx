import Contributions from "@/components/Contributions";

export default function Github() {
  return (
    <section id="github" className="py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight mb-4">GitHub</h2>
        <div className="w-12 h-1 bg-[var(--accent)] mb-12"></div>
        <Contributions />
      </div>
    </section>
  );
}
