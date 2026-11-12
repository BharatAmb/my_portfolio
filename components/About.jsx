import { FiCheckCircle, FiLayers, FiZap, FiUsers, FiTarget } from "react-icons/fi";
import Reveal from "./Reveal";
import SmartImage from "./SmartImage";

const strengths = [
  [FiZap, "Performance Focused"],
  [FiLayers, "Clean & Scalable Code"],
  [FiUsers, "Team Collaboration"],
  [FiTarget, "Product Driven"],
];

export default function About() {
  return (
    <section id="about" className="section-space">
      <div className="shell grid items-center gap-10 lg:grid-cols-[1fr_.95fr]">
        <Reveal>
          <div className="section-label">About Me</div>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            A Passionate <span className="text-[#135e34]">Frontend Developer</span>
          </h2>
          <p className="mt-4 max-w-2xl text-sm font-medium leading-7 text-slate-600 sm:text-[15px]">
            I build production-grade frontend experiences across CRM, HRMS, EdTech, e-commerce and simulation products. My work focuses on reusable architecture, robust API integration, role-aware interfaces, accessible responsive UI and measurable performance improvements.
          </p>

          <div className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {strengths.map(([Icon, label]) => (
              <div key={label} className="text-center sm:text-left">
                <Icon className="mx-auto text-2xl text-[#168147] sm:mx-0" />
                <p className="mt-2 text-xs font-extrabold leading-5 text-slate-700">{label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.08} className="relative">
          <SmartImage src="/aboutsection.png" alt="Development workspace placeholder" className="aspect-[1.55] w-full rounded-[28px]" sizes="(max-width: 1024px) 100vw, 45vw" />
          {/* <div className="soft-card absolute right-4 top-4 rounded-2xl p-4 sm:right-5 sm:top-5">
            {["System Design", "Web Performance", "Next.js App Router", "Open for Opportunities"].map((item) => (
              <div key={item} className="flex items-center gap-2 py-1.5 text-xs font-bold text-slate-700">
                <FiCheckCircle className="text-[#168147]" /> {item}
              </div>
            ))}
          </div> */}
        </Reveal>
      </div>
    </section>
  );
}
