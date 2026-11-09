import { FiBriefcase, FiCode, FiShoppingCart, FiUsers } from "react-icons/fi";
import { profile } from "@/data/profile";

const icons = [FiBriefcase, FiUsers, FiCode, FiShoppingCart];

export default function ProductionStrip() {
  return (
    <div className="shell">
      <div className="rounded-2xl border border-[#dfe9dc] bg-gradient-to-r from-[#f2f7ee] via-[#edf5e9] to-[#f4f7f0] px-5 py-4 shadow-[0_14px_36px_rgba(45,83,53,.06)]">
        <div className="grid items-center gap-4 md:grid-cols-[190px_1fr]">
          <p className="text-sm font-extrabold leading-5 text-[#214c31]">Worked On<br />Production Products:</p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {profile.productionProducts.map((item, index) => {
              const Icon = icons[index];
              return (
                <div key={item} className="flex items-center gap-2 border-l border-[#cadbc7] pl-4 text-sm font-extrabold text-slate-800">
                  <Icon className="text-lg text-[#135e34]" />
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
