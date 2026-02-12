export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent" />
        <div className="relative max-w-4xl mx-auto px-6 py-24 sm:py-32">
          <div className="text-center">
            <div className="text-7xl sm:text-8xl font-light text-amber-400 mb-6">
              Λ
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              Logos
            </h1>
            <p className="text-xl sm:text-2xl text-slate-400 max-w-2xl mx-auto">
              Where language meets action — tracking discourse that shapes
              reality.
            </p>
          </div>
        </div>
      </section>

      {/* What is Logos */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold text-amber-400 mb-6">
          What is Logos?
        </h2>
        <p className="text-lg text-slate-300 leading-relaxed mb-4">
          <strong className="text-white">Logos</strong> (λόγος) — the ancient
          Greek word for &ldquo;word,&rdquo; &ldquo;reason,&rdquo; and
          &ldquo;order&rdquo; — represents information that effects reality.
          Ideas that lead to action. Facts that drive reason.
        </p>
        <p className="text-lg text-slate-300 leading-relaxed">
          Logos is an intelligence platform that tracks the flow of discourse
          across domains where language shapes outcomes: energy policy, public
          health, scientific consensus, and democratic processes.
        </p>
      </section>

      {/* The Mission */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold text-amber-400 mb-8">
          The Mission
        </h2>
        <p className="text-slate-300 mb-8">
          We maintain a <strong className="text-white">comprehensive view</strong> of
          critical domains:
        </p>

        <div className="space-y-8">
          {/* Energy & Climate */}
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
            <div className="flex items-start gap-4">
              <span className="text-3xl">⚡</span>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Energy & Climate Intelligence
                </h3>
                <p className="text-slate-300">
                  Monitoring the global conversation around renewable energy —
                  tracking political, economic, and social dynamics as the world
                  navigates the energy transition. Understanding how discourse
                  shapes policy and investment decisions.
                </p>
              </div>
            </div>
          </div>

          {/* Misinformation Watch */}
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
            <div className="flex items-start gap-4">
              <span className="text-3xl">🛡️</span>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Misinformation Watch
                </h3>
                <p className="text-slate-300 mb-3">
                  Identifying misleading information that operates through
                  psychological manipulation or fallacious reasoning — then
                  disarming those techniques. We deconstruct the rhetoric to
                  reveal the logical gaps, presenting claims in a way that
                  clearly exposes their lack of cogency.
                </p>
                <p className="text-slate-400 text-sm italic">
                  Think of it as <strong>inoculation</strong>: just as an inert
                  virus builds immunity to the live one, exposure to
                  deconstructed misinformation builds resistance to the real
                  thing.
                </p>
              </div>
            </div>
          </div>

          {/* Science-to-Policy */}
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
            <div className="flex items-start gap-4">
              <span className="text-3xl">🔬</span>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Science-to-Policy Translation
                </h3>
                <p className="text-slate-300">
                  Deep analysis of how scientific testimony translates to
                  legislative action. Understanding what makes expert
                  communication effective — and what gets lost in translation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Provenance */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold text-amber-400 mb-6">
          Data Provenance: Trust Through Transparency
        </h2>
        <p className="text-lg text-slate-300 leading-relaxed mb-8">
          In a world drowning in information,{" "}
          <strong className="text-white">
            knowing where data comes from matters as much as the data itself.
          </strong>
        </p>
        <p className="text-slate-300 mb-8">
          Logos implements the{" "}
          <a
            href="https://www.w3.org/TR/prov-dm/"
            className="text-amber-400 hover:text-amber-300 underline underline-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            W3C PROV-DM standard
          </a>{" "}
          — a formal model for describing the provenance of digital artifacts.
          Every piece of information in Logos carries its complete lineage.
        </p>

        <h3 className="text-xl font-semibold text-white mb-4">
          Why Provenance Matters
        </h3>
        <ul className="space-y-3 text-slate-300 mb-8">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 mt-1">•</span>
            <span>
              <strong className="text-white">Combating Misinformation</strong> —
              When tracking false narratives, you need to prove the chain of
              evidence. Who said what, when, and where did they get it?
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 mt-1">•</span>
            <span>
              <strong className="text-white">Research Integrity</strong> —
              Academic and policy research requires citations. Logos maintains
              source attribution at every step of extraction and transformation.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 mt-1">•</span>
            <span>
              <strong className="text-white">Reproducibility</strong> — Any
              claim in Logos can be traced back to its original source, through
              every processing step.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 mt-1">•</span>
            <span>
              <strong className="text-white">Audit Trails</strong> — When
              information influences decisions, stakeholders need to verify the
              path from raw data to insight.
            </span>
          </li>
        </ul>

        <h3 className="text-xl font-semibold text-white mb-4">
          The PROV Model
        </h3>
        <p className="text-slate-300 mb-4">
          Every document, entity, and insight in Logos is connected through
          three core concepts:
        </p>
        <ul className="space-y-2 text-slate-300 mb-4">
          <li className="flex items-start gap-3">
            <span className="text-amber-400 mt-1">•</span>
            <span>
              <strong className="text-white">Entities</strong> — Things that
              exist: documents, extracted facts, computed summaries
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 mt-1">•</span>
            <span>
              <strong className="text-white">Activities</strong> — Things that
              happen: ingestion, extraction, classification, linking
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-400 mt-1">•</span>
            <span>
              <strong className="text-white">Agents</strong> — Who or what is
              responsible: sources, algorithms, human reviewers
            </span>
          </li>
        </ul>
        <p className="text-slate-400 text-sm">
          This isn&apos;t just metadata — it&apos;s a complete graph of
          responsibility and derivation. When Logos says &ldquo;Organization X
          made Claim Y on Date Z,&rdquo; you can trace that assertion back
          through the extraction activity, to the source document, to the
          original publication.
        </p>
      </section>

      {/* Philosophy */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold text-amber-400 mb-6">
          Philosophy
        </h2>
        <p className="text-lg text-slate-300 leading-relaxed">
          The ancient Greeks understood <em>logos</em> as the principle of
          reason and order underlying reality — the rational structure behind
          existence. We continue that tradition, tracking how language, properly
          deployed, becomes action and shapes the world.
        </p>
      </section>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-6 py-16 border-t border-slate-800">
        <p className="text-slate-500 text-sm text-center">
          Logos is under active development. The landing page and research
          outputs are public; the full application is currently private.
        </p>
        <p className="text-slate-600 text-xs text-center mt-4">
          © {new Date().getFullYear()} Logos Project
        </p>
      </footer>
    </main>
  );
}
