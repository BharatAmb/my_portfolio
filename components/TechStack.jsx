import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiMui,
  SiStyledcomponents,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiPostman,
  SiShopify,
  SiGraphql,
} from "react-icons/si";
import { FiCode } from "react-icons/fi";
import Reveal from "./Reveal";

const tools = [
  [SiReact, "React", "#61DAFB"],
  [SiNextdotjs, "Next.js", "#000000"],
  [SiTypescript, "TypeScript", "#3178C6"],
  [SiJavascript, "JavaScript", "#F7DF1E"],
  [SiTailwindcss, "Tailwind CSS", "#06B6D4"],
  [SiMui, "Material UI", "#007FFF"],
  [SiStyledcomponents, "Styled Components", "#DB7093"],
  [SiNodedotjs, "Node.js", "#339933"],
  [SiExpress, "Express", "#000000"],
  [SiMongodb, "MongoDB", "#47A248"],
  [SiMysql, "MySQL", "#4479A1"],
  [SiGit, "Git", "#F05032"],
  [SiGithub, "GitHub", "#181717"],
  [FiCode, "VS Code", "#007ACC"],
  [SiPostman, "Postman", "#FF6C37"],
  [SiShopify, "Shopify", "#7AB55C"],
  [SiGraphql, "GraphQL", "#E10098"],
];

export default function TechStack() {
  return (
    <section id="skills" className="">
    <div className="shell">
      <Reveal>
        <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <div>
            <div className="section-label">
              Tech Stack
            </div>
  
            <h2 className="font-display mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              My Tech Stack & Tools
            </h2>
          </div>
  
          <p className="max-w-md text-sm font-medium leading-6 text-slate-500">
            Technologies I use to build modern, fast and scalable applications.
          </p>
        </div>
      </Reveal>
  
      <Reveal
        delay={0.06}
        className="mt-6 rounded-2xl border border-[#e4eadf] bg-gradient-to-r from-[#f8faf6] to-[#f0f5ec] p-4 sm:p-5"
      >
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9">
  
          {tools.map(([Icon, label, color]) => (
            <div
              key={label}
              className="
                group
                flex
                min-h-[88px]
                flex-col
                items-center
                justify-center
                rounded-xl
                border
                border-slate-200/70
                bg-white
                px-2
                py-3
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#bcd0b9]
                hover:shadow-md
              "
            >
              {/* REAL BRAND COLOR ICON */}
              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-lg
                  bg-slate-50
                  transition-all
                  duration-300
                  group-hover:scale-110
                  group-hover:bg-white
                "
              >
                <Icon
                  className="text-[27px] transition-transform duration-300"
                  style={{
                    color: color,
                  }}
                />
              </div>
  
              <span className="mt-2.5 text-center text-[10px] font-extrabold leading-4 text-slate-700">
                {label}
              </span>
            </div>
          ))}
  
        </div>
      </Reveal>
    </div>
  </section>
  );
}
