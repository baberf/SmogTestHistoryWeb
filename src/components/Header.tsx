import Image from "next/image";
import { APP_NAME, APP_STORE_URL } from "@/data/appData";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <Image
            src="/images/app-icon.png"
            alt={`${APP_NAME} icon`}
            width={36}
            height={36}
            className="rounded-lg"
          />
          <span className="text-lg font-semibold text-white">{APP_NAME}</span>
        </div>
        <nav className="flex items-center gap-6">
          <a
            href="#features"
            className="text-sm text-zinc-400 transition-colors hover:text-white"
          >
            Features
          </a>
          <a
            href="#screenshots"
            className="text-sm text-zinc-400 transition-colors hover:text-white"
          >
            Screenshots
          </a>
          <a
            href="#tech-stack"
            className="text-sm text-zinc-400 transition-colors hover:text-white"
          >
            Tech Stack
          </a>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-500"
          >
            App Store
          </a>
        </nav>
      </div>
    </header>
  );
}
