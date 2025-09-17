"use client";

import * as React from "react";
import { ExternalLink, ArrowRight } from "lucide-react";

const ResultItem = React.forwardRef(
  ({ action, active, currentRootActionId }, ref) => {
    const ancestors = React.useMemo(() => {
      if (!currentRootActionId) return action.ancestors;
      const index = action.ancestors.findIndex(
        (ancestor) => ancestor.id === currentRootActionId
      );
      return action.ancestors.slice(index + 1);
    }, [action.ancestors, currentRootActionId]);

    const isExternalLink =
      action.id &&
      (action.id.includes("manzil-") ||
        (action.perform && action.perform.toString().includes("window.open")));

    return (
      <div
        ref={ref}
        className={`
          relative z-10 flex cursor-pointer items-center justify-between px-6 py-4 transition-all duration-300 rounded-xl
          ${
            active
              ? "bg-gradient-to-r from-orange-200/30 via-red-200/20 to-orange-100/20 dark:from-orange-600/20 dark:via-red-700/10 dark:to-orange-700/20 border-l-4 border-orange-500"
              : "hover:bg-gradient-to-r hover:from-orange-100/20 hover:via-red-100/10 hover:to-orange-50/10 dark:hover:from-orange-700/20 dark:hover:via-red-800/10 dark:hover:to-orange-800/20"
          }
        `}
      >
        <div className="relative z-10 flex items-center gap-3 flex-1">
          <div className="flex flex-col flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              {ancestors.length > 0 &&
                ancestors.map((ancestor) => (
                  <React.Fragment key={ancestor.id}>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      {ancestor.name}
                    </span>
                    <ArrowRight className="w-3 h-3 text-gray-400 dark:text-gray-500" />
                  </React.Fragment>
                ))}
              <span
                className={`
                  font-semibold text-lg sm:text-xl bg-clip-text text-transparent 
                  ${
                    active
                      ? "bg-gradient-to-r from-red-500 via-orange-500 to-red-500 animate-text-glow"
                      : "bg-gradient-to-r from-gray-900 dark:from-gray-100 via-orange-500 to-red-500 hover:animate-text-glow"
                  }
                  transition-all duration-500
                `}
              >
                {action.name}
              </span>
              {isExternalLink && (
                <ExternalLink className="w-4 h-4 text-gray-500 dark:text-gray-400 ml-1" />
              )}
            </div>
            {action.subtitle && (
              <span className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                {action.subtitle}
              </span>
            )}
          </div>
        </div>

        {action.shortcut?.length ? (
          <div className="relative z-10 flex gap-1">
            {action.shortcut.map((sc, i) => (
              <kbd
                key={sc + i}
                className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 flex h-6 min-w-6 items-center justify-center rounded border px-2 text-xs font-medium transition-all duration-300"
              >
                {sc}
              </kbd>
            ))}
          </div>
        ) : null}

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
      </div>
    );
  }
);

ResultItem.displayName = "KBarResultItem";

export default ResultItem;
