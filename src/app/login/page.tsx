"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [key, setKey] = useState("");
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if already authenticated
    if (typeof window !== "undefined") {
      const auth = localStorage.getItem("logos-auth");
      if (auth === "authenticated") {
        router.push("/research");
      }
    }
  }, [router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // The password is "love" (case insensitive)
    if (key.toLowerCase() === "love") {
      localStorage.setItem("logos-auth", "authenticated");
      router.push("/research");
    } else {
      setError(true);
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 flex items-center justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent" />
      
      <div className="relative max-w-md w-full mx-auto px-6">
        <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700/50 backdrop-blur-sm">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="text-5xl font-light text-amber-400 mb-4">λ</div>
            <h1 className="text-2xl font-bold tracking-tight">Research Access</h1>
          </div>

          {/* The fancy prompt */}
          <p className="text-slate-300 text-center mb-6">
            Please enter your 256-bit Advanced Encryption Standard key to proceed.
          </p>

          <form onSubmit={handleSubmit}>
            <div className={`mb-4 ${shake ? "animate-shake" : ""}`}>
              <input
                type="password"
                value={key}
                onChange={(e) => {
                  setKey(e.target.value);
                  setError(false);
                }}
                placeholder="••••••••"
                className={`w-full px-4 py-3 bg-slate-900/50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400/50 text-center text-lg tracking-widest ${
                  error ? "border-red-500" : "border-slate-600"
                }`}
                autoFocus
              />
              {error && (
                <p className="text-red-400 text-sm text-center mt-2">
                  Invalid encryption key
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold rounded-lg transition-colors"
            >
              Decrypt
            </button>
          </form>

          <p className="text-slate-500 text-xs text-center mt-6">
            Research portal access is limited to authorized personnel.
          </p>
        </div>

        {/* Back to main site link */}
        <p className="text-center mt-6">
          <a
            href="/"
            className="text-slate-400 hover:text-amber-400 text-sm underline underline-offset-2"
          >
            ← Back to main site
          </a>
        </p>
      </div>
    </main>
  );
}
