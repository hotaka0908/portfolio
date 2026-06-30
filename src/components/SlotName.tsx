"use client";

import { useEffect, useState } from "react";

const TARGET = "Hotaka Funahashi";
const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const TICK_MS = 45;
const BASE_MS = 600;
const STEP_MS = 130;

function randomGlyph() {
  return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
}

export default function SlotName() {
  // settle 時刻を文字ごとに段階的にずらす（左から順に止まる）
  const settleAt = TARGET.split("").map(
    (_, i) => BASE_MS + i * STEP_MS
  );

  const [display, setDisplay] = useState<string[]>(() =>
    TARGET.split("").map((ch) => (ch === " " ? " " : randomGlyph()))
  );
  const [done, setDone] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const id = setInterval(() => {
      const elapsed = performance.now() - start;
      let allSettled = true;

      setDisplay(
        TARGET.split("").map((ch, i) => {
          if (ch === " ") return " ";
          if (elapsed >= settleAt[i]) return ch;
          allSettled = false;
          return randomGlyph();
        })
      );

      if (allSettled) {
        setDone(true);
        clearInterval(id);
      }
    }, TICK_MS);

    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <h1
      className="text-5xl md:text-7xl font-bold tracking-tight mb-4"
      aria-label={TARGET}
    >
      {display.map((ch, i) => {
        if (ch === " ") return <span key={i}>&nbsp;</span>;
        const settled = done || TARGET[i] === ch;
        return (
          <span
            key={i}
            aria-hidden="true"
            className={`inline-block text-center transition-[filter,color] duration-150 ${
              settled
                ? "text-foreground"
                : "text-[var(--accent)] blur-[1px] animate-slot"
            }`}
            // 回転中だけ幅を固定して横揺れを防ぐ。確定後は本来の字幅に戻す。
            style={settled ? undefined : { minWidth: "0.62em" }}
          >
            {ch}
          </span>
        );
      })}
    </h1>
  );
}
