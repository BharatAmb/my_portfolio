"use client";

import {
  useMemo,
  useState,
} from "react";

import {
  FiLayers,
  FiSearch,
  FiStar,
  FiUsers,
  FiZap,
} from "react-icons/fi";
import ProjectCard from "./ProjectCard";



export default function ProjectsExplorer({
  projects,
}) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");


  // =========================================================
  // CATEGORIES
  // =========================================================

  const categories = useMemo(() => {
    return [
      "All",
      ...new Set(
        projects.map(
          (project) => project.category,
        ),
      ),
    ];
  }, [projects]);


  // =========================================================
  // SEARCH + FILTER
  // =========================================================

  const filtered = useMemo(() => {
    const normalized = query
      .trim()
      .toLowerCase();

    return projects
      .filter((project) => {
        const categoryMatch =
          filter === "All" ||
          project.category === filter;

        const searchable = `
          ${project.title}
          ${project.shortTitle}
          ${project.summary}
          ${project.company}
          ${project.ownershipLabel}
          ${project.tech.join(" ")}
        `.toLowerCase();

        const queryMatch =
          !normalized ||
          searchable.includes(normalized);

        return (
          categoryMatch &&
          queryMatch
        );
      })
      .sort(
        (a, b) =>
          (a.priority || 999) -
          (b.priority || 999),
      );
  }, [
    projects,
    query,
    filter,
  ]);


  // =========================================================
  // GROUPS
  // =========================================================

  const primaryProjects = filtered.filter(
    (project) =>
      project.ownership === "primary",
  );

  const contributionProjects = filtered.filter(
    (project) =>
      project.ownership === "contribution",
  );

 


  const totalResults =
    primaryProjects.length +
    contributionProjects.length;



  return (
    <>
      {/* =====================================================
          SEARCH AREA
      ====================================================== */}

      <div
        className="
          mt-8
          flex
          flex-col
          gap-4
          rounded-2xl
          border
          border-[#dfe8dc]
          bg-white/80
          p-4
          md:flex-row
          md:items-center
          md:justify-between
        "
      >
        {/* Search */}

        <div className="relative w-full md:max-w-sm">
          <FiSearch className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />

          <input
            value={query}
            onChange={(event) =>
              setQuery(event.target.value)
            }
            placeholder="Search projects or technology..."
            className="
              w-full
              rounded-xl
              border
              border-slate-200
              bg-white
              py-3
              pl-10
              pr-4
              text-sm
              outline-none
              transition
              focus:border-[#7ca184]
              focus:ring-4
              focus:ring-[#dcebd9]
            "
          />
        </div>


        {/* Filters */}

        <div className="flex max-w-full gap-2 overflow-x-auto pb-1 md:justify-end">
          {categories.map(
            (category) => (
              <button
                key={category}
                type="button"
                onClick={() =>
                  setFilter(category)
                }
                className={`
                  whitespace-nowrap
                  rounded-full
                  px-3
                  py-2
                  text-xs
                  font-extrabold
                  transition

                  ${
                    filter === category
                      ? "bg-[#135e34] text-white"
                      : "bg-[#eef4eb] text-[#31543d] hover:bg-[#e2eddf]"
                  }
                `}
              >
                {category}
              </button>
            ),
          )}
        </div>
      </div>


      {/* =====================================================
          PRIMARY PROJECTS
      ====================================================== */}

      {primaryProjects.length > 0 && (
        <section className="mt-12">

          <div className="flex flex-col justify-between gap-4 border-b border-[#dfe8dc] pb-5 sm:flex-row sm:items-end">

            <div>
              <div className="flex items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#135e34] text-white">
                  <FiZap />
                </span>

                <span className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#135e34]">
                  Primary Ownership
                </span>
              </div>

              <h2 className="font-display mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                ⚡ Products I Owned on the Frontend
              </h2>

              <p className="mt-2 max-w-2xl text-sm font-medium leading-6 text-slate-500">
                Products where I handled primary frontend responsibility
                and continued delivering features while balancing other
                active products.
              </p>
            </div>


            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[#edf4e9] px-3 py-2 text-xs font-extrabold text-[#31543d]">
              <FiLayers />

              {primaryProjects.length} Products
            </div>
          </div>


          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {primaryProjects.map(
              (project) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                />
              ),
            )}
          </div>
        </section>
      )}


      {/* =====================================================
          CONTRIBUTION PROJECTS
      ====================================================== */}

      {contributionProjects.length > 0 && (
        <section className="mt-16">

          <div className="flex flex-col justify-between gap-4 border-b border-[#dfe8dc] pb-5 sm:flex-row sm:items-end">

            <div>
              <div className="flex items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#e9f1e6] text-[#31543d]">
                  <FiUsers />
                </span>

                <span className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#477455]">
                  Additional Work
                </span>
              </div>

              <h2 className="font-display mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                🤝 Product Contributions
              </h2>

              <p className="mt-2 max-w-2xl text-sm font-medium leading-6 text-slate-500">
                Products where I stepped in whenever frontend support,
                improvements, debugging or additional feature delivery
                was required.
              </p>
            </div>


            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-xs font-extrabold text-slate-600">
              {contributionProjects.length} Contributions
            </div>
          </div>


          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {contributionProjects.map(
              (project) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                />
              ),
            )}
          </div>
        </section>
      )}


 
   

      {/* =====================================================
          EMPTY RESULT
      ====================================================== */}

      {totalResults === 0 && (
        <div className="mt-10 rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center">
          <div className="text-3xl">
            🔎
          </div>

          <p className="mt-3 text-sm font-bold text-slate-600">
            No projects match your search.
          </p>

          <button
            type="button"
            onClick={() => {
              setQuery("");
              setFilter("All");
            }}
            className="mt-4 text-xs font-extrabold text-[#135e34] hover:underline"
          >
            Clear Filters
          </button>
        </div>
      )}
    </>
  );
}