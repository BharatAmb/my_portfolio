export default function ProjectLoading() {
  return (
    <main className="min-h-screen py-16">
      <div className="shell grid gap-8 lg:grid-cols-2">
        <div>
          <div className="skeleton h-4 w-36 rounded-full" />
          <div className="mt-5 skeleton h-16 w-full max-w-xl rounded-xl" />
          <div className="mt-4 skeleton h-5 w-full rounded-lg" />
          <div className="mt-2 skeleton h-5 w-5/6 rounded-lg" />
          <div className="mt-8 flex gap-2">
            <div className="skeleton h-9 w-24 rounded-lg" />
            <div className="skeleton h-9 w-24 rounded-lg" />
            <div className="skeleton h-9 w-24 rounded-lg" />
          </div>
        </div>
        <div className="skeleton aspect-[1.25] rounded-[28px]" />
      </div>
    </main>
  );
}
