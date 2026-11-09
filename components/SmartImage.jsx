"use client";

import { useState } from "react";
import Image from "next/image";

export default function SmartImage({ src, alt, className = "", sizes = "100vw", priority = false }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!loaded && <div className="skeleton absolute inset-0 z-10" aria-hidden="true" />}
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        onLoad={() => setLoaded(true)}
        className={`object-contain transition duration-500 ${loaded ? "scale-100 opacity-100" : "scale-[1.03] opacity-0"}`}
      />
    </div>
  );
}
