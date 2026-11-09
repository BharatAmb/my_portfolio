import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 text-center">
      <div>
        <p className="text-sm font-extrabold uppercase tracking-[.2em] text-[#477455]">404</p>
        <h1 className="font-display mt-3 text-5xl font-bold text-slate-950">Project not found.</h1>
        <p className="mt-4 text-sm font-medium text-slate-500">The project may have been renamed or removed from the portfolio.</p>
        <Link href="/projects" className="mt-7 inline-flex rounded-xl bg-[#135e34] px-5 py-3 text-sm font-extrabold text-white">Back to Projects</Link>
      </div>
    </main>
  );
}
