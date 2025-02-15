"use client";

import "lenis/dist/lenis.css";
import { ReactLenis } from "lenis/react";

export function Lenis({ options }: { options: any }) {
  return (
    <ReactLenis
      root
      options={{
        ...options,
        prevent: (node) => {
          return (
            node.nodeName === "VERCEL-LIVE-FEEDBACK" ||
            node.id === "theatrejs-studio-root"
          );
        },
      }}
    />
  );
}
