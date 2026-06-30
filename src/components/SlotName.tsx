const TARGET = "Hotaka Funahashi";

export default function SlotName() {
  return (
    <h1
      className="text-5xl md:text-7xl font-bold tracking-tight mb-4"
      aria-label={TARGET}
    >
      {TARGET.split("").map((ch, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="inline-block animate-name-reveal whitespace-pre"
          style={{ animationDelay: `${i * 45}ms` }}
        >
          {ch === " " ? " " : ch}
        </span>
      ))}
    </h1>
  );
}
