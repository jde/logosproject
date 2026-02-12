export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent" />
        <div className="relative max-w-4xl mx-auto px-6 py-24 sm:py-32">
          <div className="text-center">
            <div className="text-7xl sm:text-8xl font-light text-amber-400 mb-6">
              λ
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              The Logos Project
            </h1>
            <p className="text-xl sm:text-2xl text-slate-400 max-w-2xl mx-auto">
              Studying the intersection of language and action, discourse and reality.
            </p>
          </div>
        </div>
      </section>

      {/* The Mission */}
      <section className="max-w-4xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold text-amber-400 mb-8">
          The Mission
        </h2>
        <p className="text-slate-300">
          The Logos Project builds platforms that track the flow of discourse across domains where language shapes outcomes. We strive to maintain a comprehensive view of these domains so that we can study the ways in which the language can be traced to concrete outcomes, measured in business, politics, legislation and beyond.
        </p>
      </section>

      {/* Methodology */}
      <section className="max-w-4xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold text-amber-400 mb-6">
          Methodology
        </h2>
        <p className="text-slate-300 mb-8">
          We implement the{" "}
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

        <div className="space-y-8">
          {/* The PROV Model */}
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
            <h3 className="text-xl font-semibold text-white mb-4">
              The PROV Model
            </h3>
            <p className="text-slate-300 mb-4">
              PROV-DM provides a standardized way to represent the history of data. In Logos, every document, extracted claim, and derived insight is linked through a directed graph that answers: <em>Where did this come from? How was it transformed? Who is responsible?</em>
            </p>
            <ul className="space-y-3 text-slate-300 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-amber-400 mt-1">•</span>
                <span>
                  <strong className="text-white">Entities</strong> — Data objects at any stage: source documents, extracted claims, entity mentions, computed analyses, and final reports.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-400 mt-1">•</span>
                <span>
                  <strong className="text-white">Activities</strong> — Transformations that create or modify entities: document ingestion, NLP extraction, entity resolution, claim verification, and summarization.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-400 mt-1">•</span>
                <span>
                  <strong className="text-white">Agents</strong> — The actors responsible: original publishers, news organizations, automated pipelines, LLM processors, and human reviewers.
                </span>
              </li>
            </ul>
            <p className="text-slate-400 text-sm">
              This creates a complete accountability graph. When Logos reports &ldquo;Organization X made Claim Y on Date Z,&rdquo; you can trace that assertion through every extraction and transformation step, back to the original publication — with full transparency into the methods used.
            </p>
          </div>

          {/* Why Provenance Matters */}
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
            <h3 className="text-xl font-semibold text-white mb-4">
              Why Provenance Matters
            </h3>
            <p className="text-slate-300 mb-4">
              Any authority of the claims of the Logos Project fall through directly to the source material of the claims combined with the logical validity of the ways that we handle the information presented in that material. The PROV model is the most rigorous model we could find that combines both source attribution and chain of custody.
            </p>
            <ul className="space-y-3 text-slate-300">
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
          </div>
        </div>
      </section>

      {/* Current Focus Areas */}
      <section className="max-w-4xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold text-amber-400 mb-2">
          Current Focus Areas
        </h2>
        <p className="text-slate-400 mb-8">We are currently actively tracking information across these domains:</p>

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
                  navigates the energy transition. Producing actionable information for the renewable energy initiatives.
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
                  communication effective — and what gets lost in politics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the project */}
      <section className="max-w-4xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold text-amber-400 mb-6">
          About the project
        </h2>
        <p className="text-lg text-slate-300 leading-relaxed">
          The ancient Greeks understood λόγος as the principle of
          reason and order underlying reality — the rational structure behind
          existence. Since ancient times, humans have dramatically increased our impact on reality. We now have the ability to track the discourse surrounding these impacts at scale. We study logos in a modern context, tracking how language, properly
          deployed, becomes action and shapes the world.
        </p>
      </section>

      {/* Capabilities */}
      <section className="max-w-4xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold text-amber-400 mb-6">
          Capabilities
        </h2>
        <p className="text-lg text-slate-300 leading-relaxed">
          The Logos Project utilizes a variety of cloud services and a private datacenter, allowing us to handle both public and private datasets. We are not equipped to handle sensitive or classified information at this time.
        </p>
      </section>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-6 py-10 border-t border-slate-800">
        <p className="text-slate-400 text-sm text-center mb-4">
          For more information, or to start a conversation about our work, please don&apos;t hesitate to{" "}
          <a
            href="mailto:hello@logosproject.xyz"
            className="text-amber-400 hover:text-amber-300 underline underline-offset-2"
          >
            reach out
          </a>.
        </p>
        <p className="text-slate-600 text-xs text-center">
          © {new Date().getFullYear()} Logos Project
        </p>
      </footer>
    </main>
  );
}
