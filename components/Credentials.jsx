import { FiAward, FiBookOpen } from "react-icons/fi";
import { certifications, education } from "@/data/profile";
import Reveal from "./Reveal";

export default function Credentials() {
  return (
    <section className="pb-16 pt-2">
      <div className="shell grid gap-5 lg:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-3xl border border-[#dfe8dc] bg-white p-6 shadow-[0_14px_38px_rgba(32,67,44,.055)]">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#edf4e9] text-xl text-[#135e34]"><FiAward /></span>
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[.18em] text-[#477455]">Credentials</p>
                <h2 className="font-display text-2xl font-bold text-slate-950">Certifications</h2>
              </div>
            </div>
            <div className="mt-5 space-y-3">
              {certifications.map((item) => (
                <div key={item} className="rounded-xl border border-slate-100 bg-[#fafcf8] px-4 py-3 text-sm font-bold text-slate-700">{item}</div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="h-full rounded-3xl border border-[#dfe8dc] bg-white p-6 shadow-[0_14px_38px_rgba(32,67,44,.055)]">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#edf4e9] text-xl text-[#135e34]"><FiBookOpen /></span>
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[.18em] text-[#477455]">Learning</p>
                <h2 className="font-display text-2xl font-bold text-slate-950">Education</h2>
              </div>
            </div>
            <div className="mt-5 space-y-4">
              {education.map((item) => (
                <div key={item.title} className="border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                  <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-start">
                    <h3 className="text-sm font-extrabold text-slate-800">{item.title}</h3>
                    <span className="text-[11px] font-bold text-[#477455]">{item.period}</span>
                  </div>
                  <p className="mt-1 text-xs font-medium leading-5 text-slate-500">{item.place}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
