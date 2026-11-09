import { FiBriefcase, FiCheckCircle } from "react-icons/fi";
import { achievements, experiences } from "@/data/profile";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="section-space">
      <div className="shell">
        <Reveal>
          <div className="section-label">Work Experience</div>
          <div className="mt-2 flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <h2 className="font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">My Professional Journey</h2>
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#e8f2e4] px-4 py-2 text-xs font-extrabold text-[#135e34]">
              <FiBriefcase /> 3+ Years of Professional Experience
            </span>
          </div>
        </Reveal>

        <div className="mt-7 grid gap-6 lg:grid-cols-[1.55fr_.75fr]">
          <div className="relative space-y-4 before:absolute before:bottom-5 before:left-[13px] before:top-5 before:w-px before:bg-[#b7ceb8]">
            {experiences.map((experience, index) => (
              <Reveal key={experience.company} delay={index * 0.06} className="relative pl-10">
                <span className="absolute left-[7px] top-6 z-10 h-3.5 w-3.5 rounded-full border-[3px] border-[#fbfaf5] bg-[#168147] shadow-[0_0_0_1px_#168147]" />
                <article className="rounded-2xl border border-[#dfe8dc] bg-white p-5 shadow-[0_12px_32px_rgba(34,70,46,.055)]">
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                    <div>
                      <h3 className="text-base font-extrabold text-slate-900">{experience.role} — {experience.company}</h3>
                      <p className="mt-1 text-xs font-bold text-[#39724d]">{experience.location}</p>
                    </div>
                    <span className="text-xs font-bold text-slate-500">{experience.period}</span>
                  </div>
                  <ul className="mt-3 space-y-1.5">
                    {experience.highlights.slice(0, 4).map((item) => (
                      <li key={item} className="flex gap-2 text-xs font-medium leading-5 text-slate-600">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#168147]" /> {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.08}>
            <aside className="sticky top-24 rounded-3xl border border-[#dfe8dc] bg-gradient-to-br from-white to-[#edf5e9] p-5 shadow-[0_16px_42px_rgba(34,70,46,.06)]">
              <div className="flex items-center gap-2">
                <FiBriefcase className="text-xl text-[#135e34]" />
                <h3 className="text-lg font-extrabold text-slate-900">Key Highlights</h3>
              </div>
              <div className="mt-4 space-y-3">
                {achievements.map((item) => (
                  <div key={item} className="flex items-start gap-2 border-b border-[#dfe8dc] pb-3 last:border-none last:pb-0">
                    <FiCheckCircle className="mt-0.5 shrink-0 text-[#168147]" />
                    <p className="text-xs font-semibold leading-5 text-slate-600">{item}</p>
                  </div>
                ))}
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
