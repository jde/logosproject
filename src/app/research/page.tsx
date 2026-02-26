"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ResearchPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const auth = localStorage.getItem("logos-auth");
      if (auth !== "authenticated") {
        router.push("/login");
      } else {
        setIsAuthenticated(true);
      }
      setIsLoading(false);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("logos-auth");
    router.push("/");
  };

  if (isLoading) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 flex items-center justify-center">
        <div className="text-amber-400 text-xl">Loading...</div>
      </main>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent" />

      {/* Header */}
      <header className="relative border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-3xl font-light text-amber-400">λ</span>
            <span className="text-xl font-semibold">Research Portal</span>
          </div>
          <button
            onClick={handleLogout}
            className="text-slate-400 hover:text-amber-400 text-sm"
          >
            Sign out
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-2">Welcome to the Research Portal</h1>
        <p className="text-slate-400 mb-12">
          Internal research documents, analysis, and ongoing investigations.
        </p>

        {/* Research Areas */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Science-to-Policy */}
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-amber-400/30 transition-colors">
            <span className="text-3xl mb-4 block">🔬</span>
            <h2 className="text-xl font-semibold text-white mb-2">
              Science-to-Policy Translation
            </h2>
            <p className="text-slate-300 text-sm mb-4">
              Analysis of how scientific testimony translates to legislative action in New Jersey.
            </p>
            <div className="text-amber-400 text-sm">
              2 hearings analyzed • 30+ pending
            </div>
          </div>

          {/* Energy Intelligence */}
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-amber-400/30 transition-colors">
            <span className="text-3xl mb-4 block">⚡</span>
            <h2 className="text-xl font-semibold text-white mb-2">
              Energy & Climate Intelligence
            </h2>
            <p className="text-slate-300 text-sm mb-4">
              Tracking the global conversation around renewable energy and the energy transition.
            </p>
            <div className="text-slate-500 text-sm">
              Coming soon
            </div>
          </div>

          {/* Misinformation Watch */}
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-amber-400/30 transition-colors">
            <span className="text-3xl mb-4 block">🛡️</span>
            <h2 className="text-xl font-semibold text-white mb-2">
              Misinformation Watch
            </h2>
            <p className="text-slate-300 text-sm mb-4">
              Deconstructing misleading information and exposing logical gaps in rhetoric.
            </p>
            <div className="text-slate-500 text-sm">
              Coming soon
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-12 bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
          <h3 className="text-lg font-semibold text-amber-400 mb-4">
            Legislative Analysis Progress
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="text-3xl font-bold text-white">2</div>
              <div className="text-slate-400 text-sm">Hearings Analyzed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">77</div>
              <div className="text-slate-400 text-sm">Scientific Claims Extracted</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">7</div>
              <div className="text-slate-400 text-sm">Scientists Documented</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">75.7</div>
              <div className="text-slate-400 text-sm">Avg. Evidence Score</div>
            </div>
          </div>
        </div>

        {/* Analyzed Hearings */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-amber-400 mb-4">
            Completed Analyses
          </h3>
          <div className="space-y-3">
            <div className="bg-slate-800/30 rounded-lg p-4 border border-slate-700/50 flex items-center justify-between">
              <div>
                <div className="font-medium text-white">
                  Plastic Pollution Reduction Act Hearings
                </div>
                <div className="text-slate-400 text-sm">
                  April 22, 2024 • 42 claims • SBLS: 72.8
                </div>
              </div>
              <span className="text-green-400 text-sm font-medium">Complete</span>
            </div>
            <div className="bg-slate-800/30 rounded-lg p-4 border border-slate-700/50 flex items-center justify-between">
              <div>
                <div className="font-medium text-white">
                  Climate Resiliency in the Garden State
                </div>
                <div className="text-slate-400 text-sm">
                  August 1, 2024 • 35 claims • SBLS: 78.5
                </div>
              </div>
              <span className="text-green-400 text-sm font-medium">Complete</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative max-w-6xl mx-auto px-6 py-8 border-t border-slate-800 mt-12">
        <p className="text-slate-500 text-sm text-center">
          Internal use only • The Logos Project
        </p>
      </footer>
    </main>
  );
}
