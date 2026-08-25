import Section from "../components/Section";
import Reveal from "../components/Reveal";
import { pythonUses } from "../data/profile";

const CODE_LINES: { text: string; cls: string }[] = [
  { text: "# kathmandu bus stops — extract → transform → load", cls: "text-dim" },
  { text: 'stops = extract_osm("Kathmandu", feature="bus_stop")', cls: "text-fg/90" },
  { text: "", cls: "" },
  { text: "df = (pd.DataFrame(stops)", cls: "text-fg/90" },
  { text: '        .dropna(subset=["lat", "lon"])', cls: "text-fg/90" },
  { text: '        .fillna({"name": "Unknown Stop"})', cls: "text-fg/90" },
  { text: '        .drop_duplicates("id"))', cls: "text-fg/90" },
  { text: "", cls: "" },
  { text: 'df.to_sql("bus_stops", engine, if_exists="replace")', cls: "text-fg/90" },
  { text: 'print(f"loaded {len(df)} stops ✓")', cls: "text-accent" },
];

export default function PythonFocus() {
  return (
    <Section
      id="python"
      kicker="05 · core tool"
      title="Python — the tool I reach for first"
      intro="Since 2025, Python has been how I automate, analyze and build. It's the language my data engineering path is built on."
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
        {/* code window */}
        <Reveal>
          <div className="min-w-0 max-w-full overflow-hidden rounded-2xl border border-line bg-[#0a0f1d] shadow-[0_20px_60px_rgb(0_0_0/0.4)]">
            <div className="flex items-center justify-between border-b border-line px-4 py-3">
              <div className="flex gap-1.5" aria-hidden="true">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]/80" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]/80" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]/80" />
              </div>
              <p className="font-mono text-xs text-mute">etl_pipeline.py</p>
              <span className="w-10" aria-hidden="true" />
            </div>
            <div className="overflow-x-auto p-5">
              <pre className="font-mono text-[0.78rem] leading-[1.7]">
                {CODE_LINES.map((l, i) => (
                  <div key={i} className="flex">
                    <span className="mr-4 w-4 select-none text-right text-dim/60">{l.text ? i + 1 : ""}</span>
                    <code className={l.cls}>{l.text || " "}</code>
                  </div>
                ))}
              </pre>
            </div>
          </div>
        </Reveal>

        {/* where I use it */}
        <div className="grid content-center gap-4 sm:grid-cols-2">
          {pythonUses.map((u, i) => (
            <Reveal key={u.title} delay={i * 0.07}>
              <div className="glass h-full rounded-2xl p-5 transition-colors hover:border-accent/30">
                <h3 className="font-display text-[0.95rem] font-semibold text-fg">{u.title}</h3>
                <p className="mt-2 text-[0.82rem] leading-relaxed text-mute">{u.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
