"use client";

import { useEffect, useState } from "react";

const GITHUB_USER = "hotaka0908";

type Day = { date: string; count: number; level: number };

const LEVEL_COLORS = [
  "rgba(255,255,255,0.06)",
  "#0e4429",
  "#006d32",
  "#26a641",
  "#39d353",
];

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

export default function Contributions() {
  const [days, setDays] = useState<Day[] | null>(null);
  const [total, setTotal] = useState<number | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    fetch(`https://github-contributions-api.jogruber.de/v4/${GITHUB_USER}?y=last`)
      .then((res) => {
        if (!res.ok) throw new Error("failed");
        return res.json();
      })
      .then((data) => {
        setDays(data.contributions);
        setTotal(data.total?.lastYear ?? null);
      })
      .catch(() => setFailed(true));
  }, []);

  // 週ごと（列）に分割。先頭は曜日に合わせて空セルでパディング。
  const weeks: (Day | null)[][] = [];
  if (days && days.length > 0) {
    const firstWeekday = new Date(days[0].date).getDay();
    const cells: (Day | null)[] = [
      ...Array<null>(firstWeekday).fill(null),
      ...days,
    ];
    for (let i = 0; i < cells.length; i += 7) {
      weeks.push(cells.slice(i, i + 7));
    }
  }

  const monthLabels = weeks.map((week, idx) => {
    const first = week.find(Boolean) as Day | undefined;
    if (!first) return "";
    const month = new Date(first.date).getMonth();
    const prevFirst = weeks[idx - 1]?.find(Boolean) as Day | undefined;
    const prevMonth = prevFirst ? new Date(prevFirst.date).getMonth() : -1;
    return month !== prevMonth ? MONTHS[month] : "";
  });

  return (
    <a
      href={`https://github.com/${GITHUB_USER}`}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full max-w-2xl mx-auto p-5 border border-[var(--border)] rounded-2xl hover:border-foreground transition-colors group"
    >
      <div className="flex items-center justify-between mb-4">
        <span className="font-medium">
          {total !== null
            ? `${total.toLocaleString()} contributions in the last year`
            : "GitHub Contributions"}
        </span>
        <span className="text-sm text-[var(--muted)] group-hover:text-foreground transition-colors">
          @{GITHUB_USER} →
        </span>
      </div>

      {failed ? (
        <p className="text-sm text-[var(--muted)] py-4">
          コントリビューションを読み込めませんでした。クリックでGitHubへ。
        </p>
      ) : !days ? (
        <div className="h-[120px] flex items-center justify-center text-sm text-[var(--muted)]">
          読み込み中…
        </div>
      ) : (
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full">
            <div className="flex gap-[3px] mb-1 ml-0">
              {monthLabels.map((label, i) => (
                <div
                  key={i}
                  className="w-[11px] text-[10px] text-[var(--muted)] whitespace-nowrap"
                >
                  {label}
                </div>
              ))}
            </div>
            <div className="flex gap-[3px]">
              {weeks.map((week, wi) => (
                <div key={wi} className="flex flex-col gap-[3px]">
                  {week.map((day, di) =>
                    day ? (
                      <div
                        key={di}
                        className="w-[11px] h-[11px] rounded-[2px]"
                        style={{ backgroundColor: LEVEL_COLORS[day.level] }}
                        title={`${day.count} contributions on ${day.date}`}
                      />
                    ) : (
                      <div key={di} className="w-[11px] h-[11px]" />
                    )
                  )}
                </div>
              ))}
            </div>
            <div className="flex items-center justify-end gap-1 mt-2 text-[10px] text-[var(--muted)]">
              <span>Less</span>
              {LEVEL_COLORS.map((color, i) => (
                <div
                  key={i}
                  className="w-[11px] h-[11px] rounded-[2px]"
                  style={{ backgroundColor: color }}
                />
              ))}
              <span>More</span>
            </div>
          </div>
        </div>
      )}
    </a>
  );
}
