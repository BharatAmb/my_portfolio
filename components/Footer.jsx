import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-[#e3e8df] py-6">
      <div className="shell flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <div>
          <p className="text-sm font-extrabold text-slate-800">Bharat Jatav</p>
          <p className="mt-1 text-xs font-medium text-slate-500">Frontend Developer • React.js • Next.js • TypeScript</p>
        </div>
        <div className="flex items-center gap-3">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 hover:text-[#135e34]"><FiGithub /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 hover:text-[#135e34]"><FiLinkedin /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 hover:text-[#135e34]"><FiMail /></a>
          <Link href="/projects" className="ml-2 text-xs font-extrabold text-[#135e34] hover:underline">All Projects</Link>
        </div>
      </div>
    </footer>
  );
}
