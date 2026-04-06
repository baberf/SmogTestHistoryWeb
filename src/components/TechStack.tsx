import { TECH_STACK } from "@/data/appData";
import { TechItem } from "@/types";

function TechBadge({ item }: { item: TechItem }) {
  return (
    <div className="flex flex-col items-center rounded-xl border border-zinc-800 bg-zinc-900/50 px-6 py-5 text-center transition-colors hover:border-zinc-700">
      <span className="text-base font-semibold text-white">{item.name}</span>
      <span className="mt-1 text-xs text-zinc-500">{item.category}</span>
    </div>
  );
}

export default function TechStack() {
  return (
    <section id="tech-stack" className="bg-zinc-950 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            Tech Stack
          </h2>
          <p className="mx-auto max-w-2xl text-zinc-400">
            Built with native iOS technologies for optimal performance and
            platform integration.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {TECH_STACK.map((item) => (
            <TechBadge key={item.name} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
