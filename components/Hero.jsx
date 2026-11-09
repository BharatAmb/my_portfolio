"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { FiArrowRight, FiMail, FiMapPin } from "react-icons/fi";
import { SiReact, SiNextdotjs } from "react-icons/si";
import { profile } from "@/data/profile";
import SmartImage from "./SmartImage";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden py-4">
      <div className="pointer-events-none absolute right-[-9rem] top-8 h-80 w-80 rounded-full border border-[#9eb99f]/45" />
      <div className="pointer-events-none absolute right-[-5rem] top-20 h-56 w-56 rounded-full border border-[#9eb99f]/35" />

      <div className="shell grid items-center gap-10 lg:grid-cols-[1.03fr_.97fr]">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="section-label mb-4">Hello, I&apos;m</div>

          <h1 className="font-display text-5xl font-bold leading-[.95] tracking-[-.045em] text-slate-950 sm:text-6xl lg:text-7xl">
            Bharat <span className="text-[#135e34]">Jatav</span>
          </h1>

          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Frontend Developer
          </h2>

          <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-bold text-slate-600">
            {profile.heroStack.map((item, index) => (
              <span key={item} className="flex items-center gap-3">
                {item}
                {index !== profile.heroStack.length - 1 && (
                  <span className="h-4 w-px bg-slate-300" />
                )}
              </span>
            ))}
          </div>

          <p className="mt-5 max-w-2xl text-[15px] font-medium leading-7 text-slate-600 sm:text-base">
            Frontend Developer with 3+ years of experience building scalable, high-performance and accessible web applications for enterprise CRM, HRMS, EdTech and e-commerce products.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/#projects"
              className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-[#135e34] px-5 py-3 text-sm font-extrabold text-white shadow-[0_12px_28px_rgba(19,94,52,.18)] transition hover:-translate-y-0.5 hover:bg-[#0f4d2a]"
            >
              <span className="text-white">View My Work</span>
              <FiArrowRight className="text-white" />
            </Link>

            <a
              href={`mailto:${profile.email}`}
              className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-[#135e34] bg-white px-5 py-3 text-sm font-extrabold text-[#135e34] transition hover:bg-[#eff5ec]"
            >
              <FiMail />
              Get in Touch
            </a>
          </div>

          <div className="mt-7 grid max-w-xl grid-cols-3 gap-3">
            <div className="border-r border-slate-200 pr-3">
              <p className="text-xl font-extrabold text-[#135e34] sm:text-2xl">3+</p>
              <p className="mt-1 text-[11px] font-semibold leading-4 text-slate-500">Years Experience</p>
            </div>

            <div className="border-r border-slate-200 px-3">
              <p className="flex items-center gap-2 text-xl font-extrabold text-[#135e34] sm:text-2xl">
                <SiReact /> React
              </p>
              <p className="mt-1 text-[11px] font-semibold leading-4 text-slate-500">
                React & Next.js Specialist
              </p>
            </div>

            <div className="pl-3">
              <p className="flex items-center gap-2 text-base font-extrabold text-[#135e34] sm:text-lg">
                <FiMapPin /> Gwalior
              </p>
              <p className="mt-1 text-[11px] font-semibold leading-4 text-slate-500">India</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[560px]"
        >
          <div className="absolute bottom-0 left-1/2 h-[82%] w-[78%] -translate-x-1/2 rounded-[46%_54%_42%_58%/36%_42%_58%_64%] bg-gradient-to-br from-[#cddfc8] via-[#a9c6a8] to-[#dbe7d5]" />

          <div className="relative z-10 flex h-[420px] w-full items-end justify-center sm:h-[460px] lg:h-[500px]">
            <SmartImage
              src="/profile.png"
              alt="Bharat Jatav - Frontend Developer"
              priority
              className="h-full w-full object-cover object-bottom"
            />
          </div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="soft-card absolute bottom-[60%] right-0 z-20 flex items-center gap-3 rounded-2xl px-4 py-3"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-xl  text-md text-[#135e34]">
              <SiNextdotjs />
            </span>

            <span>
              <span className="block text-xs font-bold text-slate-900">Building</span>
              <span className="block text-xs font-bold text-[#135e34]">Scalable & Modern UI</span>
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}