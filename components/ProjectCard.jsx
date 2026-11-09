"use client";

import Link from "next/link";
import { motion } from "motion/react";

import {
  FiArrowUpRight,
  FiLock,
} from "react-icons/fi";

import SmartImage from "./SmartImage";


export default function ProjectCard({ project }) {
  const getOwnershipBadge = () => {
    if (project.ownership === "primary") {
      return (
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#135e34] px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-[0.09em] text-white">
          ⚡ Frontend Owned
        </span>
      );
    }

    if (project.ownership === "contribution") {
      return (
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#eef3ec] px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-[0.09em] text-[#41634c]">
          🤝 Product Contribution
        </span>
      );
    }

    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#f6f1e8] px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-[0.09em] text-[#765f36]">
        ✨ Open Showcase
      </span>
    );
  };


  return (
    <motion.article
      whileHover={{
        y: -6,
      }}
      transition={{
        duration: 0.22,
      }}
      className="
        group
        overflow-hidden
        rounded-2xl
        border
        border-[#dfe6dc]
        bg-white
        shadow-[0_16px_38px_rgba(32,67,44,.07)]
      "
    >
      <Link
        href={`/aboutproject/${project.slug}`}
        className="block"
      >
        {/* ================= IMAGE ================= */}

        <div className="relative">
          <SmartImage
            src={project.image}
            alt={`${project.title} project preview`}
            className="aspect-[1.5] w-full bg-[#edf4ea]"
            sizes="
              (max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw
            "
          />

          {/* Ownership Badge */}
          <div className="absolute left-3 top-3 z-20">
            {getOwnershipBadge()}
          </div>
        </div>


        {/* ================= CONTENT ================= */}

        <div className="p-4 sm:p-5">
          <div className="flex items-center justify-between gap-3">
            <span className="rounded-full bg-[#edf4e9] px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-[0.12em] text-[#27623c]">
              {project.category}
            </span>

            {project.privateProject && (
              <span className="inline-flex items-center gap-1 text-[10px] font-bold text-slate-400">
                <FiLock />
                Private
              </span>
            )}
          </div>


          {/* Title */}

          <div className="mt-3 flex items-start justify-between gap-3">
            <div>
              <h3 className="text-base font-extrabold leading-6 text-slate-900 sm:text-lg">
                {project.title}
              </h3>

              <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.08em] text-slate-400">
                {project.company}
              </p>
            </div>

            <span
              className="
                flex
                h-8
                w-8
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#e9f2e5]
                text-[#135e34]
                transition
                group-hover:bg-[#135e34]
                group-hover:text-white
              "
            >
              <FiArrowUpRight />
            </span>
          </div>


          {/* Summary */}

          <p className="mt-3 line-clamp-3 text-xs font-medium leading-5 text-slate-500">
            {project.summary}
          </p>


          {/* Technologies */}

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tech
              .slice(0, 3)
              .map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-[#f4f7f2] px-2 py-1 text-[9px] font-bold text-[#45624d]"
                >
                  {tech}
                </span>
              ))}

            {project.tech.length > 3 && (
              <span className="rounded-md bg-[#f4f7f2] px-2 py-1 text-[9px] font-bold text-[#45624d]">
                +{project.tech.length - 3}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.article>
  );
}