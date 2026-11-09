import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import ProjectsExplorer from "@/components/ProjectsExplorer";

import {
  projects,
  primaryProjects,
  contributionProjects,
} from "@/data/projects";


export const metadata = {
  title: "All Projects — Bharat Jatav",

  description:
    "Frontend-owned products, production contributions and additional project work handled by Bharat Jatav.",
};


export default function ProjectsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-[75vh] py-14 sm:py-20">

        <div className="shell">

          {/* =====================================================
              PAGE INTRO
          ====================================================== */}

          <div className="section-label">
            Project Library
          </div>


          <div className="mt-3 grid gap-7 lg:grid-cols-[1.1fr_.9fr] lg:items-end">

            <div>
              <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                More than one product.
                <span className="text-[#135e34]">
                  {" "}
                  Often at the same time.
                </span>
              </h1>
            </div>


            <div>
              <p className="text-sm font-medium leading-7 text-slate-600 sm:text-base">
                Working in a startup environment has meant owning complete
                frontend responsibilities while continuously moving across
                products depending on delivery priorities.
              </p>

              <p className="mt-3 text-sm font-medium leading-7 text-slate-500">
                This portfolio separates the products I primarily owned from
                products where I contributed whenever additional frontend
                development was needed.
              </p>
            </div>
          </div>


          {/* =====================================================
              QUICK STATS
          ====================================================== */}

          <div className="mt-8 grid gap-3 sm:grid-cols-3">

            {/* Owned */}

            <div className="rounded-2xl border border-[#dfe8dc] bg-white p-4 shadow-sm">
              <div className="text-2xl">
                ⚡
              </div>

              <div className="mt-2 text-2xl font-black text-[#135e34]">
                {primaryProjects.length}
              </div>

              <p className="mt-1 text-[10px] font-extrabold uppercase tracking-[0.13em] text-slate-500">
                Frontend Owned Products
              </p>
            </div>


            {/* Contribution */}

            <div className="rounded-2xl border border-[#dfe8dc] bg-white p-4 shadow-sm">
              <div className="text-2xl">
                🤝
              </div>

              <div className="mt-2 text-2xl font-black text-[#135e34]">
                {contributionProjects.length}
              </div>

              <p className="mt-1 text-[10px] font-extrabold uppercase tracking-[0.13em] text-slate-500">
                Product Contributions
              </p>
            </div>


            {/* Parallel */}

            <div className="rounded-2xl border border-[#dfe8dc] bg-white p-4 shadow-sm">
              <div className="text-2xl">
                🚀
              </div>

              <div className="mt-2 text-2xl font-black text-[#135e34]">
                2+
              </div>

              <p className="mt-1 text-[10px] font-extrabold uppercase tracking-[0.13em] text-slate-500">
                Products Handled in Parallel
              </p>
            </div>
          </div>


          {/* =====================================================
              PROJECT EXPLORER
          ====================================================== */}

          <ProjectsExplorer
            projects={projects}
          />
        </div>
      </main>

      <Footer />
    </>
  );
}