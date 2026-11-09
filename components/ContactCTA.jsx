import { FiArrowRight, FiMail, FiSend } from "react-icons/fi";
import { profile } from "@/data/profile";
import Reveal from "./Reveal";

export default function ContactCTA() {
  return (
    <section id="contact" className="pb-10 pt-4">
      <div className="shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-r from-[#154d2c] via-[#0d5b31] to-[#0b4d2b] px-6 py-7 text-white shadow-[0_24px_70px_rgba(16,74,41,.22)] sm:px-9">
            <div className="absolute -left-12 -top-16 h-48 w-48 rounded-full bg-white/10" />
            <div className="absolute -bottom-20 right-0 h-52 w-52 rounded-full bg-[#68a167]/20" />
            <div className="relative z-10 flex flex-col justify-between gap-6 md:flex-row md:items-center">
              <div className="flex items-center gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/10 text-2xl"><FiSend /></span>
                <div>
                  <h2 className="font-display text-2xl font-bold sm:text-3xl">Let&apos;s Build Something Great Together</h2>
                  <p className="mt-1 text-sm font-medium text-emerald-50/80">I&apos;m open to exciting Frontend and Full-Stack opportunities.</p>
                </div>
              </div>
              <a href={`mailto:${profile.email}`} className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-extrabold  transition hover:scale-[1.02]">
                <FiMail className="text-[#144f2d]"/> <span className="text-[#144f2d]">Get in Touch </span><FiArrowRight className="text-[#144f2d]"/>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
