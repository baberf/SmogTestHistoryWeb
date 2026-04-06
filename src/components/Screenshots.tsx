import Image from "next/image";
import { SCREENSHOTS } from "@/data/appData";
import { Screenshot } from "@/types";

function PhoneMockup({ screenshot }: { screenshot: Screenshot }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative rounded-[2.5rem] border-4 border-zinc-700 bg-zinc-800 p-2 shadow-2xl shadow-black/50">
        <div className="absolute left-1/2 top-0 h-6 w-24 -translate-x-1/2 rounded-b-2xl bg-zinc-700" />
        <div className="overflow-hidden rounded-[2rem]">
          <Image
            src={screenshot.src}
            alt={screenshot.alt}
            width={280}
            height={497}
            className="h-auto w-[280px]"
          />
        </div>
      </div>
      <p className="mt-4 text-sm text-zinc-500">{screenshot.alt}</p>
    </div>
  );
}

export default function Screenshots() {
  return (
    <section id="screenshots" className="bg-zinc-900 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            App Screenshots
          </h2>
          <p className="mx-auto max-w-2xl text-zinc-400">
            A clean, intuitive interface designed for quick lookups.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-12 md:flex-row md:gap-8">
          {SCREENSHOTS.map((screenshot) => (
            <PhoneMockup key={screenshot.src} screenshot={screenshot} />
          ))}
        </div>
      </div>
    </section>
  );
}
