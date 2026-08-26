import Link from "next/link";
import { ROUTES } from "@/constants/routes";

function Chevron() {
  return (
    <svg
      aria-hidden="true"
      width="14"
      height="8"
      viewBox="0 0 14 8"
      fill="none"
      className="transition-transform duration-200 group-open:rotate-180"
    >
      <path d="m1 1 6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function HomeNav() {
  return (
    <nav aria-label="Primary navigation" className="absolute inset-x-0 bottom-[58px] z-30 flex justify-center px-5 sm:bottom-[62px]">
      <div className="flex items-center gap-4 text-white">
        <Link href={ROUTES.PROJECTS} className="underline underline-offset-2 transition-colors hover:text-white">
          Projects
        </Link>

        <details className="group relative">
          <summary className="flex cursor-pointer list-none items-center gap-2 underline underline-offset-2 transition-colors hover:text-white [&::-webkit-details-marker]:hidden">
            Links
            <Chevron />
          </summary>
          <div className="absolute bottom-8 left-1/2 flex min-w-32 -translate-x-1/2 flex-col gap-1 rounded-xl bg-white p-2 text-xs text-black shadow-xl">
            <a href="mailto:function@functionstudio.online" className="rounded-lg px-3 py-2 hover:bg-[#f5f5f5]">
              Email
            </a>
            <a href="https://x.com/functionstudioo" target="_blank" rel="noopener noreferrer" className="rounded-lg px-3 py-2 hover:bg-[#f5f5f5]">
              Twitter
            </a>
          </div>
        </details>

        <details className="group relative">
          <summary className="flex cursor-pointer list-none items-center gap-2 underline underline-offset-2 transition-colors hover:text-white [&::-webkit-details-marker]:hidden">
            About
            <Chevron />
          </summary>
          <div className="absolute bottom-8 right-0 flex w-60 flex-col gap-1 rounded-xl bg-white p-2 text-xs text-black shadow-xl">
            <Link href={ROUTES.ORE} className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-[#f5f5f5]">
              <img src="/ore.png" alt="" width="28" height="28" className="rounded-full" />
              Isaac Oreoluwa — Designer
            </Link>
            <Link href={ROUTES.AKEYE} className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-[#f5f5f5]">
              <img src="/akeye.svg" alt="" width="28" height="28" />
              Akeye Saheed — Developer
            </Link>
          </div>
        </details>
      </div>
    </nav>
  );
}
