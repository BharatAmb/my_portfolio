"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { FiArrowUp } from "react-icons/fi";

export default function ScrollToTop() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  // Scroll top whenever page/route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Show / hide scroll button
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 350);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-[999] flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-[#135e34] text-white shadow-[0_12px_30px_rgba(19,94,52,.28)] transition hover:-translate-y-1 hover:bg-[#0f4d2a]"
    >
      <FiArrowUp size={19} />
    </button>
  );
}