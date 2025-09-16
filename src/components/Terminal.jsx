"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const commands = [
  "> pnpm dlx shadcn@latest init",
  "✔ Preflight checks.",
  "✔ Verifying framework. Found Next.js.",
  "✔ Validating Tailwind CSS.",
  "✔ Validating import alias.",
  "✔ Writing components.json.",
  "Success! Project initialization completed.",
  "You may now add components."
];

export default function Terminal() {
  const [visibleLines, setVisibleLines] = useState([]);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < commands.length) {
        setVisibleLines((prev) => [...prev, commands[i]]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mx-auto max-h-[52vh] min-w-[50vw] rounded-lg overflow-hidden shadow-lg bg-black text-green-400 font-mono text-sm border border-gray-700">
      {/* Top bar */}
      <div className="flex items-center space-x-2 bg-zinc-900 px-3 py-2">
        <span className="w-3 h-3 rounded-full bg-red-500"></span>
        <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
        <span className="w-3 h-3 rounded-full bg-green-500"></span>
      </div>

      {/* Terminal body */}
      <div className="p-4">
        {visibleLines.map((line, index) => (
          <motion.div
            className="text-start leading-10"
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            {line}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
