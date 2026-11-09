"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";
import { profile } from "@/data/profile";

const links = [
  ["Home", "/#home"],
  ["About", "/#about"],
  ["Experience", "/#experience"],
  ["Projects", "/#projects"],
  ["Skills", "/#skills"],
  ["Contact", "/#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-emerald-950/5 bg-[#fbfaf5]/88 backdrop-blur-xl">
      <div className="shell flex h-[72px] items-center justify-between gap-5">
        <Link href="/#home" className="flex items-center gap-3" aria-label="Bharat Jatav home">
          <span className="font-display text-2xl font-bold italic text-[#135e34]">BJ</span>
          <span className="leading-tight">
            <span className="block text-sm font-extrabold text-slate-900">Bharat Jatav</span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">Frontend Developer</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="relative pb-1 text-sm font-semibold text-slate-600 transition-colors duration-300 hover:text-[#135e34] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-[#135e34] after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100"
            >
              {label}
            </Link>
          ))}
        </nav>

        <a
          href={profile.resume}
          download
          className="hidden items-center gap-2 rounded-xl bg-[#135e34] px-4 py-2.5 text-xs font-extrabold text-white shadow-[0_10px_25px_rgba(19,94,52,.16)] transition hover:-translate-y-0.5 hover:bg-[#0f4d2a] sm:flex"
        >
          <FiDownload size={16} className="text-white" />
          <span className="text-white" > Download Resume</span>
        </a>

        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-950/10 bg-white text-[#135e34] lg:hidden"
        >
          {open ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-emerald-950/5 bg-[#fbfaf5] lg:hidden"
          >
            <div className="shell flex flex-col gap-2 py-4">
              {links.map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2.5 text-sm font-bold text-slate-700 hover:bg-[#edf4e9]"
                >
                  {label}
                </Link>
              ))}
              <a href={profile.resume} download className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#135e34] px-4 py-3 text-sm font-extrabold text-white">
                <FiDownload /> Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
