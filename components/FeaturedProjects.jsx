import Link from "next/link";

import {
  FiArrowRight,
  FiLayers,
  FiZap,
} from "react-icons/fi";

import {
  featuredProjects,
} from "@/data/projects";

import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";


export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="section-space "
    >
      <div className="shell">

        {/* =====================================================
            INTRO
        ====================================================== */}

        <Reveal>
          <div
            className="
              overflow-hidden
              rounded-[28px]
              border
              border-[#dfe8da]
              bg-gradient-to-br
              from-[#f7faf4]
              via-white
              to-[#edf4e9]
              p-5
              sm:p-7
              lg:p-8
            "
          >
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

              {/* LEFT */}

              <div className="max-w-3xl">
                <div
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-[#135e34]/10
                    px-3
                    py-1.5
                    text-[10px]
                    font-extrabold
                    uppercase
                    tracking-[0.15em]
                    text-[#135e34]
                  "
                >
                  🚀 Product Ownership
                </div>

                <h2 className="font-display mt-4 text-2xl font-bold leading-tight tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">
                  Building products end-to-end while moving across multiple products.
                </h2>

                <p className="mt-4 max-w-3xl text-sm font-medium leading-7 text-slate-600 sm:text-base">
                  Startup development is rarely about working on only one
                  application. I have independently handled complete frontend
                  responsibility for major production products while regularly
                  managing multiple products in parallel and stepping into
                  additional products whenever delivery required it.
                </p>
              </div>


              {/* RIGHT STATS */}

              <div className="grid grid-cols-2 gap-3 sm:flex lg:flex-col xl:flex-row">

                <div
                  className="
                    min-w-[130px]
                    rounded-2xl
                    border
                    border-[#dce7d8]
                    bg-white
                    px-4
                    py-4
                    text-center
                    shadow-sm
                  "
                >
                  <div className="flex items-center justify-center gap-2">
                    <FiLayers className="text-[#135e34]" />

                    <span className="text-2xl font-black text-[#135e34]">
                      6
                    </span>
                  </div>

                  <div className="mt-1 text-[9px] font-extrabold uppercase tracking-[0.12em] text-slate-500">
                    Primary Products
                  </div>
                </div>


                <div
                  className="
                    min-w-[130px]
                    rounded-2xl
                    border
                    border-[#dce7d8]
                    bg-white
                    px-4
                    py-4
                    text-center
                    shadow-sm
                  "
                >
                  <div className="flex items-center justify-center gap-2">
                    <FiZap className="text-[#135e34]" />

                    <span className="text-xl font-black text-[#135e34]">
                      2+
                    </span>
                  </div>

                  <div className="mt-1 text-[9px] font-extrabold uppercase tracking-[0.12em] text-slate-500">
                    Parallel Products
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>


        {/* =====================================================
            TITLE
        ====================================================== */}

        <Reveal delay={0.05}>
          <div className="mt-10 flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <div>
              <div className="section-label">
                Key Projects
              </div>

              <h2 className="font-display mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Products I&apos;ve Owned on the Frontend
              </h2>

              <p className="mt-3 max-w-2xl text-sm font-medium leading-6 text-slate-500">
                Production applications where I handled primary frontend
                responsibility, from UI architecture and implementation to
                continuous production delivery.
              </p>
            </div>

            <Link
              href="/projects"
              className="
                inline-flex
                items-center
                gap-2
                text-sm
                font-extrabold
                text-[#135e34]
                transition
                hover:gap-3
                hover:underline
              "
            >
              View All Projects
              <FiArrowRight />
            </Link>
          </div>
        </Reveal>


        {/* =====================================================
            PROJECTS
        ====================================================== */}

        <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map(
            (project, index) => (
              <Reveal
                key={project.slug}
                delay={index * 0.05}
              >
                <ProjectCard
                  project={project}
                />
              </Reveal>
            ),
          )}
        </div>
      </div>
    </section>
  );
}