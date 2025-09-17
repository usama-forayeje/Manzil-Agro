"use client";

import { KBarResults, useMatches } from "kbar";
import ResultItem from "./result-item";

export default function RenderResults() {
  const { results, rootActionId } = useMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === "string" ? (
          <div
            className={`
              text-sm font-semibold uppercase tracking-wider px-6 py-3 border-b border-gray-200 dark:border-gray-700
              text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-orange-400
              ${active ? "animate-text-glow" : ""}
              transition-all duration-300
            `}
          >
            {item}
          </div>
        ) : (
          <ResultItem
            action={item}
            active={active}
            currentRootActionId={rootActionId ?? ""}
          />
        )
      }
    >
      <style jsx>{`
        @keyframes text-glow {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-text-glow {
          background-size: 200% 200%;
          animation: text-glow 3s ease infinite;
        }
      `}</style>
    </KBarResults>
  );
}
