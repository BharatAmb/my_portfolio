import ProjectSkeleton from "@/components/ProjectSkeleton";

export default function ProjectsLoading() {
  return (
    <main className="min-h-screen py-16">
      <div className="shell">
        <div className="skeleton h-5 w-32 rounded-full" />
        <div className="mt-4 skeleton h-14 w-full max-w-3xl rounded-xl" />
        <div className="mt-4 skeleton h-5 w-full max-w-xl rounded-lg" />
        <div className="mt-10"><ProjectSkeleton count={6} /></div>
      </div>
    </main>
  );
}
