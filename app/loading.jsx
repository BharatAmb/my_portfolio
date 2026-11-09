import ProjectSkeleton from "@/components/ProjectSkeleton";

export default function Loading() {
  return (
    <main className="min-h-screen py-10">
      <div className="shell">
        <div className="skeleton h-10 w-56 rounded-xl" />
        <div className="mt-3 skeleton h-5 w-full max-w-xl rounded-lg" />
        <div className="mt-10"><ProjectSkeleton count={4} /></div>
      </div>
    </main>
  );
}
