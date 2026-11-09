export default function ProjectSkeleton({ count = 4 }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="overflow-hidden rounded-2xl border border-[#e2e8df] bg-white p-3">
          <div className="skeleton aspect-[1.5] rounded-xl" />
          <div className="mt-4 skeleton h-3 w-24 rounded-full" />
          <div className="mt-3 skeleton h-5 w-3/4 rounded-lg" />
          <div className="mt-3 skeleton h-3 w-full rounded-lg" />
          <div className="mt-2 skeleton h-3 w-5/6 rounded-lg" />
        </div>
      ))}
    </div>
  );
}
