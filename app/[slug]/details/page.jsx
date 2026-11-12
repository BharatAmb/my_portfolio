import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FiActivity,
  FiArrowLeft,
  FiArrowUpRight,
  FiBarChart2,
  FiBriefcase,
  FiCheck,
  FiCheckCircle,
  FiDatabase,
  FiDownload,
  FiFileText,
  FiLayers,
  FiLock,
  FiShield,
  FiTarget,
  FiTrendingUp,
  FiUploadCloud,
  FiUserCheck,
  FiUsers,
  FiZap,
} from "react-icons/fi";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectImageCarousel from "@/components/ProjectImageCarousel";
import { projects, getProjectBySlug } from "@/data/projects";

const CRM_SLUG = "commercial-enterprise-crm";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Bharat Jatav`,
    description: project.summary,
  };
}

export default async function ProjectDetailsPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const isCRM = project.slug === CRM_SLUG;
  const hasDetails = !!project.details;

  const projectImages =
    project.screenshots && project.screenshots.length > 0
      ? project.screenshots
      : [project.image].filter(Boolean);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#fbfaf5]">
        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="relative overflow-hidden border-b border-[#e4ebe0] pb-10 pt-6 md:pb-14">
          <div className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full border border-[#9eb99f]/25" />
          <div className="pointer-events-none absolute -right-10 top-32 h-52 w-52 rounded-full border border-[#9eb99f]/25" />

          <div className="shell">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm font-extrabold text-[#135e34] transition hover:gap-3"
            >
              <FiArrowLeft />
              Back to Projects
            </Link>

            <div className="mt-7 grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
              <div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-[#135e34] px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.13em] text-white">
                    ⚡ {project.ownershipLabel}
                  </span>

                  <span className="rounded-full bg-[#edf4e9] px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.13em] text-[#27623c]">
                    {project.category}
                  </span>

                  {project.privateProject && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#dfe6dc] bg-white px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.1em] text-slate-500">
                      <FiLock />
                      Private Product
                    </span>
                  )}
                </div>

                <div className="section-label mt-6">
                  {project.details?.eyebrow || "Project Case Study"}
                </div>

                <h1 className="font-display mt-3 max-w-4xl text-4xl font-bold leading-[1.02] tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-[58px]">
                  {project.title}
                </h1>

                <p className="mt-5 max-w-3xl text-base font-medium leading-8 text-slate-600">
                  {project.details?.heading || project.summary}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech?.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-[#dfe8da] bg-white px-3 py-2 text-xs font-bold text-[#45624d]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#135e34] px-5 py-3 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-[#0f4d2a]"
                  >
                    <span className="text-white">Visit Live Project</span>
                    <FiArrowUpRight className="text-white" />
                  </a>
                )}
              </div>

              <div className="relative">
                <div className="pointer-events-none absolute inset-x-[12%] top-[15%] h-[72%] rounded-full bg-[#dcead7] blur-3xl" />

                <ProjectImageCarousel
                  images={projectImages}
                  title={project.title}
                />
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            BASIC PROJECT INFO
        ====================================================== */}

        <section className="py-8">
          <div className="shell grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <InfoCard
              icon={<FiBriefcase />}
              label="Role"
              value={project.role}
            />

            <InfoCard
              icon={<FiLayers />}
              label="Organization"
              value={project.company}
            />

            <InfoCard
              icon={<FiActivity />}
              label="Timeline"
              value={project.period}
            />

            <InfoCard
              icon={<FiShield />}
              label="Product Access"
              value={project.privateProject ? "Private & Permission Based" : "Public Product"}
            />
          </div>
        </section>

        {/* =====================================================
            PRODUCT OVERVIEW
        ====================================================== */}

        <section className="section-space">
          <div className="shell grid gap-10 lg:grid-cols-[.92fr_1.08fr]">
            <div>
              <div className="section-label">Product Overview</div>

              <h2 className="font-display mt-3 text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl">
                {getOverviewHeading(project)}
              </h2>

              <p className="mt-5 text-sm font-medium leading-7 text-slate-600 sm:text-base">
                {project.details?.overview || project.description}
              </p>

              {project.details?.secondOverview && (
                <p className="mt-4 text-sm font-medium leading-7 text-slate-600 sm:text-base">
                  {project.details.secondOverview}
                </p>
              )}
            </div>

            {project.details?.architecturePoints?.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-2">
                {project.details.architecturePoints.map((item, index) => {
                  const icons = [FiUsers, FiLayers, FiShield, FiUserCheck];
                  const Icon = icons[index % icons.length];

                  return (
                    <div
                      key={item.title}
                      className="rounded-[24px] border border-[#dfe6dc] bg-white p-5 shadow-[0_14px_34px_rgba(32,67,44,.05)]"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e9f4e4] text-xl text-[#135e34]">
                        <Icon />
                      </div>

                      <h3 className="mt-4 text-base font-extrabold text-slate-900">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-xs font-medium leading-6 text-slate-500">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="rounded-[28px] border border-[#dfe8da] bg-gradient-to-br from-[#f7faf4] via-white to-[#edf4e9] p-6 sm:p-7">
                <div className="section-label">Key Contribution</div>

                <div className="mt-5 space-y-3">
                  {project.highlights?.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-xl border border-[#e2eae0] bg-white px-4 py-3"
                    >
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#e9f4e4] text-xs text-[#135e34]">
                        <FiCheck />
                      </span>

                      <span className="text-xs font-bold leading-5 text-slate-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* =====================================================
            CORE CAPABILITIES
        ====================================================== */}

        {project.details?.capabilities?.length > 0 && (
          <section className="pb-16">
            <div className="shell">
              <div className="section-label">Core Capabilities</div>

              <div className="mt-3 flex flex-col justify-between gap-4 md:flex-row md:items-end">
                <div>
                  <h2 className="font-display max-w-3xl text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                    {getCapabilitiesHeading(project)}
                  </h2>

                  <p className="mt-3 max-w-2xl text-sm font-medium leading-7 text-slate-500">
                    The major workflows and product experiences I worked on across this application.
                  </p>
                </div>

                <span className="text-sm font-extrabold text-[#135e34]">
                  {project.details.capabilities.length} Core Areas
                </span>
              </div>

              <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {project.details.capabilities.map((item, index) => {
                  const icons = [
                    FiUsers,
                    FiUserCheck,
                    FiDatabase,
                    FiBarChart2,
                    FiLayers,
                    FiFileText,
                    FiShield,
                    FiActivity,
                    FiUploadCloud,
                    FiDownload,
                    FiTarget,
                    FiTrendingUp,
                  ];

                  const Icon = icons[index % icons.length];

                  return (
                    <div
                      key={item.title}
                      className="group rounded-[24px] border border-[#dfe6dc] bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-[#b9d0b9] hover:shadow-[0_18px_42px_rgba(32,67,44,.08)]"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#edf4e9] text-lg text-[#135e34] transition group-hover:bg-[#135e34] group-hover:text-white">
                        <Icon />
                      </div>

                      <h3 className="mt-4 text-base font-extrabold text-slate-900">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-xs font-medium leading-6 text-slate-500">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* =====================================================
            CODING LAB / SHOPIFY LEARNING JOURNEY
        ====================================================== */}

        {project.details?.learningJourney?.length > 0 && (
          <section className="pb-16">
            <div className="shell">
              <div className="rounded-[30px] bg-[#123f2a] p-6 text-white sm:p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-xl text-[#d7ead7]">
                  <FiZap />
                </div>

                <div className="mt-5 text-xs font-extrabold uppercase tracking-[0.14em] text-[#bcd9c2]">
                  {project.slug === "coding-lab" ? "Student Learning Journey" : "Project Learning Journey"}
                </div>

                <h2 className="font-display mt-2 max-w-3xl text-3xl font-bold sm:text-4xl">
                  {project.slug === "coding-lab"
                    ? "From learning the basics to practical work experience."
                    : "From exploring an unfamiliar platform to delivering a production product."}
                </h2>

                <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {project.details.learningJourney.map((item, index) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-xl bg-white/[0.06] px-4 py-4"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-[10px] font-black text-[#cce4d0]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-xs font-bold leading-5 text-[#e1eee3]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* =====================================================
            CODING LAB STUDENT TRACKING
        ====================================================== */}

        {project.details?.studentTracking?.length > 0 && (
          <section className="pb-16">
            <div className="shell">
              <div className="grid gap-8 lg:grid-cols-[.75fr_1.25fr] lg:items-center">
                <div>
                  <div className="section-label">Student Intelligence</div>

                  <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                    Understanding how each student is progressing.
                  </h2>

                  <p className="mt-4 text-sm font-medium leading-7 text-slate-600">
                    Learning is not only about completing lessons. Tracking activity helps reveal how students engage with practice, challenges and projects and where additional improvement may be needed.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {project.details.studentTracking.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl border border-[#e2eae0] bg-white px-4 py-4"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#edf4e9] text-[#135e34]">
                        <FiTrendingUp />
                      </div>

                      <span className="text-xs font-extrabold text-slate-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* =====================================================
            CODE TRAINERS MARKETPLACE FLOW
        ====================================================== */}

        {project.details?.marketplaceFlow?.length > 0 && (
          <section className="pb-16">
            <div className="shell">
              <div className="rounded-[30px] border border-[#dfe8da] bg-gradient-to-br from-[#f7faf4] via-white to-[#edf4e9] p-6 sm:p-8">
                <div className="section-label">Marketplace Flow</div>

                <h2 className="font-display mt-3 max-w-3xl text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  How trainers, organizations and venues connect.
                </h2>

                <p className="mt-3 max-w-2xl text-sm font-medium leading-7 text-slate-500">
                  The platform connects different user goals into one marketplace rather than treating each participant as an isolated user.
                </p>

                <div className="mt-7 grid gap-3 md:grid-cols-2">
                  {project.details.marketplaceFlow.map((item, index) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-xl border border-[#e2eae0] bg-white px-4 py-4"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e9f4e4] text-[10px] font-black text-[#135e34]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-xs font-bold leading-5 text-slate-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* =====================================================
            PERMISSIONS
        ====================================================== */}

        {project.details?.permissionPoints?.length > 0 && (
          <section className="pb-16">
            <div className="shell">
              <div className="rounded-[30px] bg-[#123f2a] p-6 text-white sm:p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-xl text-[#d7ead7]">
                  <FiShield />
                </div>

                <div className="mt-5 text-xs font-extrabold uppercase tracking-[0.14em] text-[#bcd9c2]">
                  Permission Architecture
                </div>

                <h2 className="font-display mt-2 max-w-3xl text-3xl font-bold sm:text-4xl">
                  Access designed around roles and responsibilities.
                </h2>

                <p className="mt-4 max-w-3xl text-sm font-medium leading-7 text-[#d7e7da]">
                  Different users interact with the same product differently. Permissions control which modules, information and actions become available to each role.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {project.details.permissionPoints.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2.5 rounded-xl bg-white/[0.06] px-3 py-3"
                    >
                      <FiCheck className="mt-0.5 shrink-0 text-[#bfe0c4]" />

                      <span className="text-xs font-bold leading-5 text-[#e1eee3]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* =====================================================
            CRM SUPER ADMIN
        ====================================================== */}

        {isCRM && project.details?.superAdminPoints?.length > 0 && (
          <section className="pb-16">
            <div className="shell">
              <div className="grid gap-5 lg:grid-cols-2">
                <div className="rounded-[28px] border border-[#dfe6dc] bg-white p-6 sm:p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e9f4e4] text-xl text-[#135e34]">
                    <FiUsers />
                  </div>

                  <div className="mt-5 text-xs font-extrabold uppercase tracking-[0.14em] text-[#135e34]">
                    Super Admin
                  </div>

                  <h2 className="font-display mt-2 text-3xl font-bold text-slate-950">
                    Central oversight across company environments.
                  </h2>

                  <p className="mt-4 text-sm font-medium leading-7 text-slate-600">
                    Super Admin functionality provides visibility across different company environments while maintaining admin-level separation and accountability.
                  </p>
                </div>

                <div className="rounded-[28px] border border-[#dfe6dc] bg-white p-6">
                  <div className="space-y-3">
                    {project.details.superAdminPoints.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 rounded-xl bg-[#f6f9f4] px-4 py-3"
                      >
                        <FiCheckCircle className="mt-0.5 shrink-0 text-[#135e34]" />

                        <span className="text-xs font-bold leading-5 text-slate-700">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* =====================================================
            REPORTING
        ====================================================== */}

        {project.details?.reportingPoints?.length > 0 && (
          <section className="pb-16">
            <div className="shell">
              <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
                <div>
                  <div className="section-label">Reports & Visibility</div>

                  <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                    Turning operational data into useful visibility.
                  </h2>

                  <p className="mt-4 text-sm font-medium leading-7 text-slate-600">
                    Reports help users and management understand important activity instead of leaving useful information hidden across individual modules.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {project.details.reportingPoints.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl border border-[#e2eae0] bg-white px-4 py-4"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#edf4e9] text-[#135e34]">
                        <FiBarChart2 />
                      </div>

                      <span className="text-xs font-extrabold text-slate-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* =====================================================
            FRONTEND OWNERSHIP
        ====================================================== */}

        {project.details?.frontendOwnership?.length > 0 && (
          <section className="pb-16">
            <div className="shell">
              <div className="overflow-hidden rounded-[30px] border border-[#dfe8da] bg-gradient-to-br from-[#f7faf4] via-white to-[#edf4e9] p-6 sm:p-8">
                <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr]">
                  <div>
                    <div className="section-label">My Frontend Ownership</div>

                    <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                      I worked across the product, not only isolated screens.
                    </h2>

                    <p className="mt-4 text-sm font-medium leading-7 text-slate-600">
                      My responsibility covered product workflows, frontend structure, reusable interfaces and continuous implementation rather than only one individual feature.
                    </p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {project.details.frontendOwnership.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 rounded-xl border border-[#e2eae0] bg-white px-4 py-3"
                      >
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#e9f4e4] text-xs text-[#135e34]">
                          <FiCheck />
                        </span>

                        <span className="text-xs font-bold leading-5 text-slate-700">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* =====================================================
            BEHIND THE BUILD / LEARNING
        ====================================================== */}

        {project.details?.projectStory && (
          <section className="pb-16">
            <div className="shell">
              <div className="section-label">Behind the Build</div>

              <h2 className="font-display mt-3 max-w-3xl text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                The thinking, difficulties and learning behind the product.
              </h2>

              <p className="mt-3 max-w-2xl text-sm font-medium leading-7 text-slate-500">
                Every project added something different to how I understand products, users and frontend engineering.
              </p>

              <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <ProjectStoryCard
                  number="01"
                  title="Planning & Structure"
                  text={project.details.projectStory.planning}
                />

                <ProjectStoryCard
                  number="02"
                  title="Difficulty I Faced"
                  text={project.details.projectStory.difficulty}
                />

                <ProjectStoryCard
                  number="03"
                  title="What I Learned"
                  text={project.details.projectStory.learning}
                />

                <ProjectStoryCard
                  number="04"
                  title="Human & User Behavior"
                  text={project.details.projectStory.humanSide}
                />

                <ProjectStoryCard
                  number="05"
                  title="How I Used AI"
                  text={project.details.projectStory.aiSupport}
                />

                <ProjectStoryCard
                  number="06"
                  title="How It Improved Me"
                  text={project.details.projectStory.growth}
                />
              </div>
            </div>
          </section>
        )}

        {/* =====================================================
            GENERIC HIGHLIGHTS FOR PROJECTS WITHOUT DETAILS
        ====================================================== */}

        {!hasDetails && project.highlights?.length > 0 && (
          <section className="pb-16">
            <div className="shell">
              <div className="rounded-[30px] border border-[#dfe8da] bg-gradient-to-br from-[#f7faf4] via-white to-[#edf4e9] p-6 sm:p-8">
                <div className="section-label">My Contribution</div>

                <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  What I worked on.
                </h2>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {project.highlights.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-xl border border-[#e2eae0] bg-white px-4 py-3"
                    >
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#e9f4e4] text-xs text-[#135e34]">
                        <FiCheck />
                      </span>

                      <span className="text-xs font-bold leading-5 text-slate-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* =====================================================
            CHALLENGE / SOLUTION / IMPACT
        ====================================================== */}

        {(project.challenge || project.solution || project.impact) && (
          <section className="pb-16">
            <div className="shell">
              <div className="section-label">Engineering Perspective</div>

              <h2 className="font-display mt-3 max-w-3xl text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Challenge, approach and product impact.
              </h2>

              <div className="mt-7 grid gap-4 md:grid-cols-3">
                {project.challenge && (
                  <StoryCard
                    number="01"
                    title="Challenge"
                    text={project.challenge}
                  />
                )}

                {project.solution && (
                  <StoryCard
                    number="02"
                    title="Solution"
                    text={project.solution}
                  />
                )}

                {project.impact && (
                  <StoryCard
                    number="03"
                    title="Impact"
                    text={project.impact}
                  />
                )}
              </div>
            </div>
          </section>
        )}

        {/* =====================================================
            MORE WORK
        ====================================================== */}

        <section className="pb-16">
          <div className="shell">
            <div className="rounded-[30px] bg-[#123f2a] p-6 text-white sm:p-8 lg:p-10">
              <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
                <div>
                  <div className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#bcd9c2]">
                    More Work
                  </div>

                  <h2 className="font-display mt-3 text-3xl font-bold sm:text-4xl">
                    Explore more products I&apos;ve worked on.
                  </h2>

                  <p className="mt-3 max-w-2xl text-sm font-medium leading-7 text-[#d7e7da]">
                    Production applications, frontend-owned products and collaborative work across different business domains.
                  </p>
                </div>

                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white  px-5 py-3 text-sm font-extrabold text-[#135e34] transition hover:-translate-y-0.5"
                >
                 <span className="text-[#123f2a]" >View All Projects</span> 
                  <FiArrowUpRight className="text-[#123f2a]" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

function getOverviewHeading(project) {
  if (project.slug === "commercial-enterprise-crm") {
    return "More than a dashboard — a complete multi-company business CRM.";
  }

  if (project.slug === "eduhr-platform") {
    return "Employee operations, monitoring and management in one internal platform.";
  }

  if (project.slug === "ans-tracknology-shopify") {
    return "Building a custom commerce experience by learning an entirely new platform.";
  }

  if (project.slug === "coding-lab") {
    return "A coding platform focused on learning by doing.";
  }

  if (project.slug === "code-trainers") {
    return "A connected marketplace for trainers, organizations and training spaces.";
  }

  if (project.slug === "allcoaching") {
    return "A multi-instructor learning platform built around flexible course delivery.";
  }

  return project.title;
}

function getCapabilitiesHeading(project) {
  if (project.slug === "commercial-enterprise-crm") {
    return "Operational workflows connected in one product.";
  }

  if (project.slug === "eduhr-platform") {
    return "Everything required for everyday employee operations.";
  }

  if (project.slug === "ans-tracknology-shopify") {
    return "The storefront features I explored and delivered.";
  }

  if (project.slug === "coding-lab") {
    return "Learning experiences beyond notes and videos.";
  }

  if (project.slug === "code-trainers") {
    return "Connecting every side of the training ecosystem.";
  }

  if (project.slug === "allcoaching") {
    return "Flexible tools for teachers and authorized learning for students.";
  }

  return "What the product delivers.";
}

function InfoCard({ icon, label, value }) {
  return (
    <div className="rounded-2xl border border-[#dfe6dc] bg-white p-4 shadow-[0_12px_28px_rgba(32,67,44,.04)]">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#edf4e9] text-[#135e34]">
        {icon}
      </div>

      <div className="mt-3 text-[9px] font-extrabold uppercase tracking-[0.13em] text-slate-400">
        {label}
      </div>

      <div className="mt-1 text-xs font-extrabold leading-5 text-slate-800">
        {value}
      </div>
    </div>
  );
}

function StoryCard({ number, title, text }) {
  return (
    <div className="rounded-[24px] border border-[#dfe6dc] bg-white p-5 shadow-[0_12px_30px_rgba(32,67,44,.04)]">
      <span className="text-xs font-black text-[#135e34]">
        {number}
      </span>

      <h3 className="mt-3 text-lg font-extrabold text-slate-900">
        {title}
      </h3>

      <p className="mt-3 text-xs font-medium leading-6 text-slate-500">
        {text}
      </p>
    </div>
  );
}

function ProjectStoryCard({ number, title, text }) {
  if (!text) return null;

  return (
    <div className="group rounded-[24px] border border-[#dfe6dc] bg-white p-5 shadow-[0_12px_30px_rgba(32,67,44,.04)] transition duration-300 hover:-translate-y-1 hover:border-[#b9d0b9] hover:shadow-[0_18px_40px_rgba(32,67,44,.07)]">
      <div className="flex items-center justify-between gap-3">
        <span className="text-xs font-black text-[#135e34]">
          {number}
        </span>

        <span className="h-2 w-2 rounded-full bg-[#b5ceb4] transition group-hover:bg-[#135e34]" />
      </div>

      <h3 className="mt-4 text-lg font-extrabold text-slate-900">
        {title}
      </h3>

      <p className="mt-3 text-xs font-medium leading-6 text-slate-500">
        {text}
      </p>
    </div>
  );
}